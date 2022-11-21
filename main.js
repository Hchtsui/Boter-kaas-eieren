let btnref = document.querySelectorAll("buttion-option");
let popupref = document.querySelector(".popup");
 let newgame =  document.getElementById("new-game"); 
 let restartbtn = document.getElementById ("restart");
 let msgref = document.getElementById ("message");
 //winning patern array
  let winingpatern = [
[0 ,1 ,2]
[0 ,3 ,6]
[2 ,5 ,8]
[6 ,7 ,8]
[3 ,4 ,5]
[1 ,4 ,7]
[0 ,4 ,8]
[2 ,4 ,6]
  ];
//player `x` plays first

let xTurn = true;
 let count =0;

 // display X/O on click