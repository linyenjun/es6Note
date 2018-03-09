'use strict';
let beat="物理攻擊";
let name="亞瑟";

export default function herostatus(beat,name){
  console.log(`這位英雄是屬於 ${beat} 的英雄,他的名字叫做 ${name}`);
}

//在要默認導出的函數前面加上export default

// 另外還可以有這樣的寫法

// function herostatus(beat,name){
//   console.log(`這位英雄是屬於 ${beat} 的英雄,他的名字叫做 ${name}`);
// }

// export {herostatus as default};

