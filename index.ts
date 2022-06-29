// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Helper } from "./src";
(async()=>{
    const duration=parseFloat(process.argv[2]);
    console.log('duration=',duration);
    await Helper.run(duration);
})();