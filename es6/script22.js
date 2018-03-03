//用疊代器來模擬英雄的攻擊,今天李元芳要去打主宰,攻擊完之後不再攻擊了

function hero(beat){
   let i = 0;
   return{
     next(){
       let done = (i>=beat.length); //當還攻擊主宰時成立
       let value = !done?beat[i++]:"已獲得主宰之力";
       //要是還再攻擊,next()就返回攻擊的招式,要是攻擊結束就獲得主宰之力


       //return根據上面設定的條件返回攻擊的結果
       return{
         value:value,//value裡面設定的是招數
         done:done//是否攻擊結束了,打印出來的值是true/false
       }
     }
   }
}

let liyuanfang =hero(["2","1","1","1","1","1","3","1","1","1"]);
//李元芳輸出了2技能之後平A了5次,之後又放了大招再平A了3次
console.log(liyuanfang.next());
console.log(liyuanfang.next());
console.log(liyuanfang.next());
console.log(liyuanfang.next());
console.log(liyuanfang.next());
console.log(liyuanfang.next());
console.log(liyuanfang.next());
console.log(liyuanfang.next());
console.log(liyuanfang.next());
console.log(liyuanfang.next());
//李元芳攻擊主宰10次,next都返回主宰沒死
console.log(liyuanfang.next());
//最後李元芳打死主宰,獲得主宰之力

