
let ran1=Math.floor((Math.random()*6)+1);
let ran2=Math.floor((Math.random()*6)+1);

ranImg1="images/dice"+ran1+".png";
ranImg2="images/dice"+ran2+".png";



if(ran1>ran2){
document.querySelector(".container h1").textContent= "Player 1 Wins! 😉";
}
else if(ran2>ran1){
    document.querySelector(".container h1").textContent= "Player 2 Wins! 😉";
}
else{

    document.querySelector(".container h1").textContent= "two players are equal, Try again! 🙆";
    document.querySelector(".container h1").style.fontSize = "5rem";

}
document.querySelector(".img1").setAttribute("src",ranImg1);
document.querySelector(".img2").setAttribute("src",ranImg2);
