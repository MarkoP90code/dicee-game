
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomDice1 = "dice" + randomNumber1 + ".png";
// var randomDice2 = "dice" + randomNumber2 + ".png";

// document.querySelector(".img1").setAttribute("src", "./images/" + randomDice1);
// document.querySelector(".img2").setAttribute("src", "./images/" + randomDice2);

// // "./images/" + randomDice1 ovo sam mogao drugacije. radnomDice1 je moglo biti 
// // "./images/dice" + randomNumber1 + ".png" i onda bi umesto "./images/" + randomDice1 pisalo samo 
// // randomDice1

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
// } else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
// } else {
//     document.querySelector("h1").innerHTML = "Draw!";
// }


/*
OVO JE VERZIJA ZA PARCEL - zato sto slike morem ovako ubaciti
ovo sam uradio prvo npm i parcel-plugin-static-files-copy
pa napravio file .parcelrc i onda dodao ono sto sad ima u tom filu kad ga stisnem
I u html sam ubacio type="module".
*/

import * as images from 'url:./images/*.png';

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNumber1;
var randomDice2 = "dice" + randomNumber2;

document.querySelector(".img1").setAttribute("src", images[randomDice1]);   //Ovde mora bracket notation jer je randomDice1 promenljiva.
document.querySelector(".img2").setAttribute("src", images[randomDice2]);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
