'use strict';
let beat="物理攻擊";
let name="亞瑟";

function herostatus(beat,name){
  console.log(`這位英雄是屬於 ${beat} 的英雄,他的名字叫做 ${name}`);
}

//導出時將herostatus 重命名為status

export{beat,name,herostatus as status};