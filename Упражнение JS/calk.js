let kalkulate= document.getElementById("calckulator")
let a,b;
kalkulate.addEventListener("click",function(){
   a=Number( prompt("введите a"));
   b=Number(prompt ("введите b"));
   let dey =  prompt("введите действие");
   if(dey=="+"||dey=="сложить"||dey=="add"){
    alert(a+"+"+b+"="+add(a,b));
   }
   if(dey=="-"||dey=="вычесть"=="minus"){
    alert(a+"-"+b+"="+minus(a,b));
   } 
   if(dey=="*"||dey=="умножить"||dey=="multiplacate"){
    alert(a+"*"+b+"="+multiplacate(a,b));
   } 
   if(dey=="/"||dey=="делить"||dey=="slash"){
    alert(a+"/"+b+"="+slash(a,b));
   } 
})
function add(x,y){  return x+y;}
function minus (x,y){ return x-y}
function multiplacate(x,y){ return x*y}
function slash(x,y){return x/y}
