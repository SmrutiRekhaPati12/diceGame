var randomNumber1=(Math.floor(Math.random()*6)) +1;
var img1="dice"+ randomNumber1 +".png";
var sr1="images/"+img1;

document.querySelector(".img1").setAttribute("src",sr1);

var randomNumber2=(Math.floor(Math.random()*6)) +1;
var img2="dice"+ randomNumber2 +".png";
var sr2="images/"+img2;

document.querySelector(".img2").setAttribute("src",sr2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }