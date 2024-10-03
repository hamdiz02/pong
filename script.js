const audio1 = new Audio("btn.mp3")
const audio2 = new Audio("pointg.mp3")
const audio3 = new Audio("ball.mp3")
const audio4 = new Audio("br.mp3")

p = document.querySelector('.p')
p1 = document.querySelector('.p1')
p2 = document.querySelector('.p2')
btn = document.querySelector('.btn')
obj = document.querySelector('.obj')
let topv = 40
let topv2 = 40
function up1(){
    if (topv != 0 ){
        topv = topv - 10 ; 
        p1.style.top = topv + '%' ;
    }else{
        p1.style.top = 0 + '%' ;
    }
    audio1.play();
}
function down1(){
    if (topv != 80 ){
        topv = topv + 10;
        p1.style.top = topv + '%' ;
    }else{
        p1.style.bottom = 0 + '%' ;
    }
    audio1.play();     
}
function up2(){
    if (topv2 != 0 ){
        topv2 = topv2 - 10 ; 
        p2.style.top = topv2 + '%' ;
    }else{
        p2.style.top = 0 + '%' ;
    }
    audio1.play();
}
function down2(){
    if (topv2 != 80 ){
        topv2 = topv2 + 10;
        p2.style.top = topv2 + '%' ;
    }else{
        p2.style.bottom = 0 + '%' ;
    }  
    audio1.play();
}
document.addEventListener('keydown' , (e)=>{
    if (e.key == "z"){up1()}
    if (e.key == "s"){down1()}
})
document.addEventListener('keydown' , (e2)=>{
    if (e2.key == "ArrowUp"){up2()}
    if (e2.key == "ArrowDown"){down2()}
})

let x = 50;
let y = 50;
let velx = 1;
let vley = 2; 
maxt=98;
maxw=99;
let s1=document.querySelector('.scorep1')
let s2=document.querySelector('.scorep2')
let sc1 = 0
let sc2 = 0
function move (){
    y+=vley;
    x+=velx;
    obj.style.top = y + '%';
    obj.style.left = x + '%';  

    if( y == maxt || y == 0 ){
        vley = -vley;
    }
    if(x == maxw || x == 0){
        velx =-velx;
    }
    const ballRect = obj.getBoundingClientRect();
    const p1r = p1.getBoundingClientRect();
    const p2r = p2.getBoundingClientRect();
    if (
        ballRect.right >= p1r.left &&
        ballRect.left <= p1r.right &&
        ballRect.bottom >= p1r.top &&
        ballRect.top <= p1r.bottom
    ) {velx = -velx;audio3.play();}
    if (
        ballRect.right >= p2r.left &&
        ballRect.left <= p2r.right &&
        ballRect.bottom >= p2r.top &&
        ballRect.top <= p2r.bottom
      ) {velx = -velx;audio3.play();}
    
    if (x==0){
        sc1=sc1+1
        s2.textContent = sc1
        x = 50
        y = 50
        audio2.play();
    }
    if (x==maxw){
        sc2=sc2+1
        s1.textContent = sc2
        x = 50
        y = 50
        audio2.play();
    }
}
let speed = 16
let interval
function spup(){
    speed = speed - 5
    clearInterval(interval);
    interval = setInterval(move,speed);
    audio1.play();
}
function spdown(){
    speed = speed + 5
    clearInterval(interval);
    interval = setInterval(move,speed);
    audio1.play();
}
function br(){
    audio4.play()
    audio4.loop = true
    audio4.volume= 0.1;
}
function start(){
    interval = setInterval(move,speed);
    audio1.play();
    br();
}
function pause(){
    clearInterval(interval);
    audio1.play();
}

