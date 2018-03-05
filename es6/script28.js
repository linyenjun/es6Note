let chaoyun =new Set(["制裁之刃","霸者重裝"]);
//Set是一種集合,類似於數組,不可以有重複的內容

console.log(chaoyun);
console.log(chaoyun.size);//size判斷Set裡面的個數


chaoyun.add("急速戰靴");//在Set裡添加內容
console.log(chaoyun);
console.log(chaoyun.size);

chaoyun.add("制裁之刃");//在Set裡添加的內容有重複則不添加
console.log(chaoyun);
console.log(chaoyun.size);

console.log(chaoyun.has("暗影戰斧"));

chaoyun.delete("制裁之刃");//在Set裡刪除制裁之刃
console.log(chaoyun);
console.log(chaoyun.size);

chaoyun.clear();//將Set清空
console.log(chaoyun);
console.log(chaoyun.size);

