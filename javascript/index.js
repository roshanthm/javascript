//window.alert(`important`);
/*

let name="fruuu";
let age="23";

document.getElementById("head").textContent=`hrlooo welcome ${age}`;
document.getElementById("para").textContent=`hrlooo welcome ${name}`;



//easy way

let name=window.prompt("what is ur name:");
console.log(name);




let name;
document.getElementById("mysubmit").onclick=function(){
    name=document.getElementById("mytext").value;
    console.log(name);
}



let name;
document.getElementById("mysubmit").onclick=function(){
    name=document.getElementById("mytext").value;

    document.getElementById("head").textContent=`hrlooo welcome ${name}`;
}

*/
let count = 0;
    const countnum = document.getElementById("countnum");

    document.getElementById("increase").onclick = function () {
      count++;
      countnum.textContent = count;
    };

    document.getElementById("decrease").onclick = function () {
      count--;
      countnum.textContent = count;
    };

    document.getElementById("reset").onclick = function () {
      count = 0;
      countnum.textContent = count;
    };