let hero={};
let nickname="onther name";

hero.name="莊周";
// hero.other name ="鯤"; 
//屬性名稱不接受有空格
//所以先設定一個變量才可使用


hero[nickname]="鯤";

//或是寫成字符串

hero["onther name"]="鯤"

console.log(hero);
