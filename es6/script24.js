class hero{
  constructor(beat){
    this.beat=beat;
  }

  power(){
    console.log(this.beat);
  }
}

let caochao = new hero('噬血梟雄');
caochao.power();

//在類裡面定義一個建構函數,把攻擊模式beat傳入,
//並且自創一個方法power,把攻擊模式beat打印出來
//新建一個對象曹操,實力化英雄這個類,並定義攻擊模式為噬血梟雄
//曹操直接使用屬性power打印出噬血梟雄
