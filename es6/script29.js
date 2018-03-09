//Map可以用來組織鍵值對的對象

let timi = new Map();
console.log(timi);

let hero={},warrior=function(){},beat="技能";

timi.set(hero,"楊戩"); //在Map裡添加鍵值,hero是上面定義的對象
console.log(timi);

timi.set(warrior,"戰士");
console.log(timi);

timi.set(beat,"放狗咬人");
console.log(timi);

console.log(timi.size);//可以查看裡面有幾個對象

console.log(timi.get(hero));//可以經過鍵得到值

timi.delete(beat);//可以刪除Map裡的對象

console.log(timi.has(beat));

timi.forEach((value,key) =>{
   console.log(`${value},${key}`);
});

timi.clear();

console.log(timi);

