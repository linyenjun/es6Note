function aboutYou(name,age,...others){
  console.log(name,age,others)
}

aboutYou("亞瑟","20","坦克","物理攻擊");

//坦克,物理攻擊加在others數組中,並且沒有展開,在參數的...代表剩餘符!

function aboutHer(name,age,...others){
  console.log(name,age,...others)
}

aboutHer("王昭君","17","法師","魔法攻擊","蹲草叢");
//console.log的...others把others數組裡的東西展開來了