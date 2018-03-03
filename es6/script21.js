let daji={
  getWeapom() {
    return "聖杯";
  }
};

let direnjie={
  getWeapom() {
    return "破甲弓";
  }
};

let zhenji={
  __proto__:daji,  //甄姬用__proto__在自己的塊裡引用了妲己的屬性
  getWeapom(){
    return super.getWeapom() + "博學者之帽"; //super引用了妲己的出裝並且又加了博學者之帽
  }

};

console.log(zhenji.getWeapom());//打印出甄姬的出裝
