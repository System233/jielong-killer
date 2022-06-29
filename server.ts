// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express from "express"
import {createProxyMiddleware, responseInterceptor} from 'http-proxy-middleware'
import { Helper, SERVER_PORT, SERVER_URL } from "./src";
export const app=express();
app.use(express.static('public'));

app.use('/Portal',createProxyMiddleware({
    changeOrigin:true,
    target:'https://jielong.co',
    onProxyReq(proxyReq, req, res, options){
        proxyReq.removeHeader('x-sckey');
    },
    onProxyRes(msg,req,res){
        const sckey=req.header('x-sckey');
        console.log(req.method,req.url);
        let cookies=msg.headers['set-cookie'] as string|string[];
        if(!Array.isArray(cookies)){
            cookies=[cookies];
        }
        cookies.forEach(async cookie=>{
            const match=/token\s*=\s*(.+?);/.exec(cookie);
            if(match){
                const [_,value]=match;
                const token=decodeURIComponent(value);
                try {
                    console.log('token',token);
                    await Helper.addToken(token,sckey,process.argv[2]);
                    console.log('added token');
                } catch (error) {
                    console.error(error);
                }
            }
        })
    }
}))
app.get('/run/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await Helper.load();
        if(id in data){
            res.send(await Helper.check(id,data[id]));
        }else{
            throw new Error(`找不到ID: ${id}`);
        }
    } catch (error) {
        res.send(error.message);
    }

})

app.listen(SERVER_PORT,()=>console.log('Server running on '+SERVER_PORT,'\nSERVER_URL=',SERVER_URL));

