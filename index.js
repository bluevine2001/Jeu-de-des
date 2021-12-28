var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log("Player 1: " + randomNumber1);

var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", "images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("Player 2: " +randomNumber2);

var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", "images/dice"+randomNumber2+".png");

var title = document.querySelector("h1");
if(randomNumber1 > randomNumber2)
{
    title.innerHTML = "Player 1 Wins";
}
else if(randomNumber2 > randomNumber1)
{
    title.innerHTML = "Player 2 Wins";
}
else{
    title.innerHTML = "Draw";
}