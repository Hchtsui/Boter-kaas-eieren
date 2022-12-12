let btnref = document.querySelectorAll(".button-option.grid");
let popupref = document.querySelector(".popup");
 let newgame =  document.querySelector(".new-game"); 
 let restartbtn = document.querySelector(".restart");
 let msgref = document.querySelector (".message");




 //winning patern array
  let winingpatern = [
[0 ,1 ,2],
[0 ,3 ,6],
[2 ,5 ,8],
[6 ,7 ,8],
[3 ,4 ,5],
[1 ,4 ,7],
[0 ,4 ,8],
[2 ,4 ,6],
];
//player `x` plays first

let xTurn = true;
 let count =0;

 const disabledbuttons = () => {
  btnref.forEach ((element) => element.disabled = true);
  popupref.classList.remove("hide");
 }

 //enable all buttons

 const enablebuttons = (letter) => {
  btnref.forEach ((element) => {
    element.innerText =""
    element.disabled = "flase";
  });
  popupref.classList.add("hide");
 }

 // this function is executed when a player wins
 const winFunction = (letter) => {
  disabledbuttons ();
  if (letter == "x"){
    msgref.innerHTML = "&#x1F389; <br> 'x' wins"
  } else {
    msgref.innerHTML = "&#x1F389; <br> 'o' wins"
  }
 };

 newgame.addEventListener ("click", () => {
  count = 0;
  enablebuttons ();
  location.reload();
 });

 restartbtn.addEventListener("click" , () => {
  count = 0;
  enablebuttons ();
  location.reload();
 });
 
const  nothing = () => {
  disabledbuttons();

};

 //win logic 
const Winchecker = () => {
for (let i of winingpatern ) {
let [ element1, element2, element3 ] =  [
btnref[i[0]] .innerText, 
btnref[i[1]] .innerText,
btnref[i[2]] .innerText,
];
//check if element are filled 
//if 3 items are same and would give win as would
if (element1 != "" && (element2 != "") & (element3 !="")){
if (element1 == element2 && element2 == element3) {
  
  winFunction (element1);
}
}
}

}


 //display X/O on click 
 btnref.forEach((element)=>{
element.addEventListener("click",() => {
  if (xTurn) {
    xTurn = false;
    //display X 
    element.innerText = "X";
    element.disabled = false;
  }
  else {
    xTurn = true
    //display O
    element.innerText = ("O");
    element.disabled = false;

  } 
  count =+ 1;
  if(count === 9){
     //its a draw since there there are totale of 9 boxes 
  } 
  //check for win
  Winchecker (); 
})
})
