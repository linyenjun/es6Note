let cat="manekii";
let birthday="3/3";

let specialDay=heppyCat `今天是特別的日子,我家的貓咪 ${cat} 生日了,他的生日是 ${birthday}!`;

function heppyCat(string,...value){
  // console.log(string);
  // console.log(...value);
  let result="";
  for(var i=0; i<value.length; i++){
    result +=string[i];
    result +=value[i];
  }
  result +=string[string.length-1];

  console.log(result);
}


