// +0 === -0  或是 +0 == -0 在調適器顯示都是true
// NaN ==NaN 顯示則是false,但是兩個是一樣的東西不能判斷
// 使用 Object.is(+0,-0)顯示是false
// 使用 Object.is('NaN','NaN')顯示是true
