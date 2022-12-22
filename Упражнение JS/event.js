let image = document.getElementById("MS");
let posX=0,posY = 0;
image.onclick= function(){
    image.classList.toggle("bolshe");
}
document.onkeypress=function(event){
    if(event.code=="KeyW"){
        posY=posY-5;
      image.style.top= posY+"px";
    }
    if(event.code=="KeyA"){
        posX=posX-5;
        image.style.left= posX+"px";
    }
    if(event.code=="KeyD"){
        posX=posX+5;
        image.style.left= posX+"px";
    }
    if(event.code=="KeyS"){
        posY=posY+5;
        image.style.top= posY+"px";
    }
}
