function hiro(name,age,{type,KDA}={}){
  console.log(name,age,type,KDA);

}

//將type,KDA設定為對象,在對象裡面設定值,作為參數解構

hiro('安琪拉','12',{type:'法師',KDA:'3.0'});