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


let lvban={
  __proto__:daji  //小學生魯班用__proto__來參考妲己的出裝
};

console.log(lvban.getWeapom()); //打印出小學生魯班的出裝
console.log(Object.getPrototypeOf(lvban)===daji);//打印出小學生魯班是不是參照了妲己的出裝

lvban.__proto__=direnjie; //小學生魯班決定要和狄仁傑學習出裝
console.log(lvban.getWeapom()); //打印出小學生魯班的參考狄仁傑的出裝
console.log(Object.getPrototypeOf(lvban)===direnjie);//打印出小學生魯班是不是參照了狄仁傑的出裝






