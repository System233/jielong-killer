// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import axios,{ AxiosInstance, AxiosResponse } from "axios";
import { API, APIMap, Response } from "./api";
import { defaultHeaders } from "./config";
export class APIError extends Error{
    constructor(message:string,code:number|string){
        super(`${message} (${code})`)
    }
}
export class Session{
    instance:AxiosInstance;
    constructor(public token:string){}
    get http(){
        const getProxy=()=>{
            if(process.env.PROXY_HOST){
                const [host,port]=process.env.DEBUG_PROXY.split(':');
                return {
                    host,
                    port:parseInt(port)
                }
            }
            return null;
        }
        if(!this.instance){
            this.instance=axios.create({
                headers:Object.assign({},defaultHeaders,{authorization:this.token}),
                proxy:getProxy()
            });
            this.instance.interceptors.response.use((res:AxiosResponse<Response<any>>)=>{
                if(res.data.Type!='000001'){
                    throw new APIError(res.data.Data||res.data.Description,res.data.Type);
                }
                res.data=res.data.Data;
                return res;
            })
        }
        return this.instance;
    }
    async request<T extends keyof API>(name:T,data:API[T][0]){
        const config=APIMap[name];
        return await this.http.request<API[T][1]>(Object.assign({
            url:config.url,
            method:config.method,
            headers:config.headers,
        }, config.method=='GET'?{params:data}:{data}));
    }
}