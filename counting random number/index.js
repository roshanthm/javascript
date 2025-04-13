const button=document.getElementById("button");

const mylabel=document.getElementById("mylabel");

let randnum;

button.onclick=function(){
 
    randnum=Math.floor(Math.random() * 10) + 1;

    mylabel.textContent=randnum;

}