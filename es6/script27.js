class Hero{
   constructor(kind,momey){
     this.kind=kind;
     this.momey=momey;
   }
   
   about(){
     console.log(`這是 ${this.kind} 英雄,他/她有 ${this.momey} 的經濟`) ;
   }

}

class Warrior extends Hero{
  constructor(kind,momey){
     super(kind,momey); 
  }
}

//Hero類裡面裡設定的kind,momey兩個變數,並在about裡面打印出來,
//Warrior繼承Hero裡面的所有東西,初始化的構造函數裡的兩參數也用super來繼承
//新創對象花木蘭,實例化Warrior這個類,並設定參數為戰士,20000
//因為Warrior已經繼承了Hero,所以可以直接使用屬性about打印出需要的訊息
let huamulan = new Warrior('戰士','20000');
huamulan.about();