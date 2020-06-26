//mapArray : 決定地圖中每個格子的元素
//ctx : HTML5 Canvas使用
//currentImaMainX, currentImgMainY : 決定主角所在座標
//imaMountain, imgMain, imgEnemy : 障礙物、主角、敵人的圖片物件

let mapArray, ctx, currentImgMainX=385, currentImgMainY=200, targetImgMainX=385, targetImgMainY=200;
let imgMountain, imgMain, imgEnemy;

let gravity = 1.98 , inertia = 0.9, friction=0.9,  velX=0, velY=0;
let jumping = false, onGround = true;


imgMain= new Image(); 
imgMain.src = "simple-rpg/images/GM.png";

controller = {

    left:false,
    right:false,
    up:false,
    keyListener:function(event) {
    event.preventDefault();
      var key_state = (event.type == "keydown")?true:false;
  
      switch(event.keyCode) {
  
        case 37:// left key
          controller.left = key_state;
        break;
        case 38:// up key
          controller.up = key_state;
        break;
        case 39:// right key
          controller.right = key_state;
        break;
  
      }
  
    }
  
};

//當網頁元件載入完成要做的事情
$(document).ready(function(){

        ctx = $("#myCanvas")[0].getContext("2d");

        //擺障礙物與敵人
        /*
        imgMountain = new Image();
        imgMountain.src = "simple-rpg/images/material.png";
        imgEnemy = new Image();
        imgEnemy.src = "simple-rpg/images/Enemy.png";
        imgMountain.onload = function(){
            imgEnemy.onload = function(){
                for(let x in mapArray){
                    if(mapArray[x]==1){
                        ctx.drawImage(imgMountain,32,65,32,32,x%3*200, Math.floor(x/3)*200, 200, 200);
                    }else if(mapArray[x]==3){
                        ctx.drawImage(imgEnemy,7,40,104,135,x%3*200, Math.floor(x/3)*200, 200, 200);
                    }
                }
            }
        };*/
        drawLevel();
});

function drawLevel(){
    //擺主角
    
    ctx.clearRect(currentImgMainX, currentImgMainY, 50, 100);
    currentImgMainX = targetImgMainX;
    currentImgMainY = targetImgMainY;
    ctx.drawImage(imgMain,0,0,80,130,targetImgMainX, targetImgMainY, 50, 100);
    //$("#talkBox").text(targetImgMainX);
    if (controller.up && jumping == false) {

        velY -= 20;
        jumping = true;
    
      }
    
      if (controller.left) {
    
        velX -= 0.5;
    
      }
    
      if (controller.right) {
    
        velX += 0.5;
    
      }
    
      velY += 1.98;// gravity
      targetImgMainX += velX;
      targetImgMainY += velY;
      velX *= 0.9;// friction
      velY *= 0.9;// friction
    
      // if rectangle is falling below floor line
    if(targetImgMainY > 452 - 16 - 32) {
    
        jumping = false;
        targetImgMainY = 452 - 16 - 32;
        velY = 0;
    }
    
    if( targetImgMainX > 830){
        targetImgMainX = -30;
    }else if(targetImgMainX < -30){
        targetImgMainX = 830;
    }
        
    
    
    requestAnimationFrame(drawLevel);
    
}


window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
requestAnimationFrame(drawLevel);