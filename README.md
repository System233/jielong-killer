<!--
 Copyright (c) 2022 System233
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# jielong-killer

打卡接龙

## Usage 

编译代码
```
npm run build
```

启动注册服务器，用于扫码注册
```shell
#服务器地址，默认0.0.0.0开放到局域网
#export SERVER_HOST=localhost
#服务器端口，默认8000
#export SERVER_PORT=8000
npm run serve [ThreadID]
```

运行打卡,可以考虑用cron调用
```shell
npm run check
```

