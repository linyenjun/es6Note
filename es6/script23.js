//因為李元芳打主宰太久了,蘭陵王偷襲對面魯班七號比較容易贏,所以改用generaters來生成攻擊狀態,
//並且用yield來返回next() return的結果

let hero = function*(beat){
  for(var i=0;i<beat.length;i++){
    yield beat[i];
  }
}

let lanlingwang =hero(["隱身","2技能","平A","平A","1技能"]);

console.log(lanlingwang.next());
console.log(lanlingwang.next());
console.log(lanlingwang.next());
console.log(lanlingwang.next());
console.log(lanlingwang.next());
console.log(lanlingwang.next());