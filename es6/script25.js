class hero{
  constructor(beat){
    this.beat=beat;
    //在建構函數裡初始化
    this.equip=[];
  }
  //返回設備值
  get addEquip(){
    return this.equip;
  }
  
  //設定設備,將參數push到建構函數的位置裡
  set addEquip(equip){
    this.equip.push(equip);
  }

  power(){
    console.log(this.beat);
  }
}

//設定曹操的裝備為反傷刺甲,魔女斗篷,破軍,並打印出來

let caochao =new hero();
console.log(caochao.addEquip='反傷刺甲');
console.log(caochao.addEquip='魔女斗篷');
console.log(caochao.addEquip='破軍');
console.log(caochao.addEquip);
