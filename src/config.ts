// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import os from 'os';
export const defaultHeaders={
    "User-Agent": "Mozilla/5.0 (Linux; Android 9; INE-AL00 Build/HUAWEIINE-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3189 MMWEBSDK/20211001 Mobile Safari/537.36 MMWEBID/9728 MicroMessenger/8.0.16.2040(0x28001057) Process/appbrand0 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
    // "Accept-Encoding": "gzip,compress,br,deflate",
    'content-type': 'application/json',
    Host: 'h-api.jielong.co',
    Connection: 'keep-alive',
    charset: 'utf-8',
    // compression: 'Compression',
    platform: 'wx',
    Referer: 'https://servicewechat.com/wx36ddf2a92cbb7814/362/page-frame.html'
}

export const start_time=8;
export const end_time=12;

export const SERVER_HOST=(()=>{
    if(process.env.SERVER_HOST){
        return process.env.SERVER_HOST;
    }
    const net=Object.values(os.networkInterfaces()).flat().find(x=>!x.internal&&x.family=='IPv4');
    return net?net.address:'0.0.0.0';
})();
export const SERVER_PORT=process.env.SERVER_PORT?parseInt(process.env.SERVER_PORT):8000;

export const SERVER_URL=`http://${SERVER_HOST}:${SERVER_PORT}`
