const mainContainer = document.getElementById("corpsJeu");

let cercleRed = document.getElementById("cercle_n1");
let cercleOrange = document.getElementById("cercle_n2");
let cercleGreen = document.getElementById("cercle_n3");
let totalScore = document.getElementById("score");
let totalChance = document.getElementById("chance");
let sBouton = document.getElementById("startBouton");
let cBouton = document.getElementById("checkBouton");

let score = 0;
let chance = 3;
let interval;

totalScore.innerHTML = score; // on le fait ça pour afficher le message au moin 1x
totalChance.innerHTML = chance; // idem

function checkClick() {

    if (cercleGreen.style.background === "green") {
        score++;
        totalScore.innerHTML = score;

    } else {
        
        chance--;
        totalChance.innerHTML = chance;
    }

    if(chance === 0) {
        clearInterval(interval); // permet de stop l'interval
        mainContainer.innerHTML = "<video autoplay muted loop><source src='img/Game-Over.mp4' type='video/mp4' /></video>" /*" <div class=gameOver> Vous avez perdu !!! </div> "*/


    }
}

function startGame() {
    sBouton.disabled = true;
    cBouton.disabled = false;

    interval = setInterval(function () { // interval qui va englober 'setInterval' pour la clear voir ligne()
        changeCercleColor();
    }, 1000);

}

function changeCercleColor() {
    // console.log("yo");

    setTimeout(function () {
        cercleRed.style.background = "red"
    }, 400 /* 1000 = 1se*/ );

    setTimeout(function () {
        cercleOrange.style.background = "orange"
    }, 600);

    setTimeout(function () {
        cercleGreen.style.background = "green"
    }, 800);

    setTimeout(function () {
        cercleRed.style.background = "black"
        cercleOrange.style.background = "black"
        cercleGreen.style.background = "black"
    }, 1000);
}