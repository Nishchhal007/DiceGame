// Copyright Year

let a = new Date();
let yr = a.getFullYear();
document.getElementById("cr").innerHTML = " " + yr;

    
    var randomNumber1 = Math.floor(Math.random()*6+1);
    var randomNumber2 = Math.floor(Math.random()*6+1);
    
    var leftDiceImage  = document.getElementById("leftDice").setAttribute('src',`images/dice${randomNumber1}.png`);
    var rightDiceImage  = document.getElementById("rightDice").setAttribute('src',`images/dice${randomNumber2}.png`);
    
    if (randomNumber1>randomNumber2) {
        document.getElementById("result").innerText = "🚩 Player 1 Wins";
    }
    
    else if (randomNumber1<randomNumber2) {
        document.getElementById("result").innerText = "Player 2 Wins 🚩";
    }
    
    else{
        document.getElementById("result").innerText = "Match Draw!";
    
    }
    

// console.log(randomNumber1);