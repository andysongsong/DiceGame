//dice1
randomNumber1 = Math.floor(Math.random() * 6) + 1;// 1-6

randomDiceImage = "dice" + randomNumber1 + ".png";//dice1.png-dice6.png

randomImageSource = "images/" + randomDiceImage;//images/dice1.png-images/dice6.png

image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//dice2
randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomDiceImage = "dice" + randomNumber2 + ".png";

randomImageSource = "images/" + randomDiceImage;

image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

//title
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if ( randomNumber2 >randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

