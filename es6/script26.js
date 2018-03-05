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

  //將函數加上static為靜態函數,不需要實例化就可以使用,timi裡傳值company
  
  static timi(company){
   console.log(company);
  }
}

//值接用類把靜態方法的屬性設定為天美
hero.timi("天美");