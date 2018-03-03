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

let houyi=Object.create(direnjie); //新建一個后羿參考狄仁傑的出裝
console.log(houyi.getWeapom());//打印出后羿的出裝
console.log(Object.getPrototypeOf(houyi)===direnjie);
//用Object.getPrototypeOf來確定后羿是不是參考了狄仁傑的出裝

Object.setPrototypeOf(houyi,daji);
//坑貨后羿用Object.setPrototypeOf來參考了妲己的出裝
console.log(houyi.getWeapom());//打印出坑貨后羿的出裝
console.log(Object.getPrototypeOf(houyi)===daji);
//用Object.getPrototypeOf來確定坑貨后羿是不是參考了狄仁傑的出裝

