// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import axios from "axios";
import { constants } from "fs";
import { access, readFile, writeFile } from "fs/promises";
import { API, GetCheckInRecordsRecordvaluesDto, GetEditCheckInRecordCheckinsettingSettingsDto } from "./api";
import { end_time, SERVER_HOST, SERVER_PORT, SERVER_URL, start_time } from "./config";
import { Session } from "./session";

interface Config{
    name:string;
    token:string;
    sckey:string;
}
export class Helper{
    constructor(public session:Session){}
    async request<T extends keyof API>(name:T,data:API[T][0]){
        return (await this.session.request(name,data)).data;
    }
    handleFormData(item:GetEditCheckInRecordCheckinsettingSettingsDto,data:GetCheckInRecordsRecordvaluesDto){
        if(item.Name=='日期'){
            data.Texts=[new Date().toLocaleDateString('Shanghai').replaceAll('/','-')]
        }
    }
    async getCurrentUser(){
        return await this.request('GetCurrentUser',null);
    }
    async getThreadDetail(threadId:string){
        return await this.request("GetThreadDetail",{
            threadId
        });
    }
    
    async doCheckIn(threadId:string){
        const thread=await this.getThreadDetail(threadId);
        if(!thread.CheckInInfo.CheckInStatus.AllowCheckIn){
            return thread.CheckInInfo.CheckInStatus.CheckInMsg;
        }
        const ThreadId=thread.ThreadId;
        const currentUser=await this.getCurrentUser();
        const lastFormDataList=await this.request('GetCheckInRecords',{
            threadId:ThreadId,
            pageIndex:1,
            pageSize:10,
            dateTarget:'',
            userId:currentUser.Id,
            sortBy:1,
            number:'',
            signature:'',
            isShowCommentAndAttitude:false,
            isGetAll:true,
            minuteTarget:null
        })
        if(!lastFormDataList.length){
            throw new Error('请先手动打卡一次');
        }
        const lastFormData=lastFormDataList[0];
        const formConfig=await this.request('GetEditCheckInRecord',{
            threadId:ThreadId,
            recordId:0,
            fillSignature:currentUser.FormInfo.Signature,
            fillNumber:currentUser.FormInfo.Number,
            isFillCheckIn:true
        });
        const result=await this.request('EditCheckInRecord',{
            Id:0,
            ThreadId:ThreadId+"",
            Number:'',
            Signature:currentUser.FormInfo.Signature,
            RecordValues:formConfig.CheckInSetting.Settings.map(item=>{
                const lastValue=lastFormData.RecordValues.find(x=>x.FieldId==item.Id);
                this.handleFormData(item,lastValue);
                return {
                    Scores:[],
                    HasValue:true,
                    MatrixValues:[],
                    ...lastValue
                };
            }),
            DateTarget:'',
            IsNeedManualAudit:false,
            MinuteTarget:-1, 
            IsNameNumberComfirm:false
        })
        return result;
    }
    static create(token:string){
        return new Helper(new Session(token));
    } 
    static send(key:string,message:string,body?:string){
        return axios.post(`https://sctapi.ftqq.com/${key}.send`,new URLSearchParams({
            title:message,
            desp:[
                message,
                body||'',
                `[点此重新登录](${SERVER_URL})`,
                `[查看打卡日志](${SERVER_URL}/check.log)`
            ].join('\n\n')
        }).toString(),{
            headers:{
               'Content-type': 'application/x-www-form-urlencoded'
            }
        })
    }
    static async check(key:string,value:string|Config){
        const [Id,threadId]=key.split(':');
        const {name,token,sckey}=typeof value=="string"?{name:Id,token:value,sckey:null}:value;
        const result=await this.checkOne(Id,threadId,name,token,sckey).then(res=>res.join(' '));
        return this.send(sckey,result,`[点此重新打卡](${SERVER_URL}/run/${key})`).then(()=>`推送成功: ${result}`).catch((err)=>`推送失败: ${result} ${err.message}`);
    }
    static async checkOne(Id:string|number,threadId:string,name:string,token:string,sckey:string){
        const helper=Helper.create(token);
        return [
            name,
            await helper.doCheckIn(threadId).catch(err=>err.message)
        ] as const;
    }
    static async checkAll(){
        const data=await this.load();
        return Promise.all(Object.entries(data).map(async([key,value])=>this.check(key,value)));
    }
    static config='config.json';
    static async load(){
        try{
            await access(this.config,constants.F_OK);
            return JSON.parse(await readFile(this.config,'utf-8')) as Record<string,string|{name:string,token:string,sckey:string}>;
        }catch(err){
            console.log(`'${this.config}' not found`);
        }
        return {};
    }
    static async save(data:Record<string,string|{name:string,token:string}>){
        await writeFile(this.config,JSON.stringify(data,null,2));
    }
    static async addToken(token:string,sckey:string,threadId:string){
        const helper=Helper.create(token);
        const user=await helper.getCurrentUser();
        const id=`${user.Id}:${threadId}`;
        const data=await this.load();
        const name=await helper.getCurrentUser().then(e=>e.Nickname).catch(err=>err.message);
        data[id]={
            name,
            token,
            sckey
        };
        await this.send(sckey,`已绑定用户名：${name}`);
        await this.save(data);
        this.check(id,data[id]).then(console.log).catch(console.error);
    }

    static async run(duration:number){
        const data=await this.load();
        const queue=Object.entries(data);
        const max_time=duration/queue.length;
        const sleep=(ms:number)=>new Promise(resolve=>setTimeout(resolve,ms*1000));
        for(const [key,value] of queue){
            const time=Math.random()*max_time*3600+10;
            console.log(`next+${time|0}s`,new Date(Date.now()+time*1000).toLocaleString());
            await sleep(time);
            await this.check(key,value).then(console.log).catch(console.error);
        }
    }
}
