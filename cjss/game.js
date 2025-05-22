var userScore = 0;
var compScore = 0;
var uScoreText = document.getElementById("userScore");
var cScoreText = document.getElementById("compScore");
var resultShow = document.querySelector(".result > p");
var rockChoice = document.getElementById("r");
var paperChoice = document.getElementById("p");
var scissorsChoice = document.getElementById("s");
var reset = document.getElementById("reset");

function getCompChoice(){
	var choices = ['r', 'p', 's'];
	var random = Math.floor(Math.random()*3);
	return choices[random];
}

function convert(letter){
	if (letter==="r"){
		return "Rock";
	}
	else if (letter==="s"){
		return "Scissors";
	}
	else if (letter==="p"){
		return "Paper";
	}
}

function userWin(user, comp){
	userScore++;
	uScoreText.innerHTML = userScore;
	cScoreText.innerHTML = compScore;
	resultShow.innerHTML = convert(user) + " beats " + convert(comp) +". You Win!!!";
	glow(user, "green");
}

function compWin(user, comp){
	compScore++;
	uScoreText.innerHTML = userScore;
	cScoreText.innerHTML = compScore;
	resultShow.innerHTML = convert(comp) + " beats " + convert(user) +". You Lose!!!";
	glow(user, "red");
}

function draw(user, comp){
	resultShow.innerHTML = convert(user) + " matches " + convert(comp) +". Draw.";
}

function glow(user, arg){
	userGlow = document.getElementById(user).classList;
	switch(arg){
		case "green":
			userGlow.add('greenGlow');
			setTimeout(function(){ userGlow.remove('greenGlow'); }, 300);
			break;
		case "red":
			userGlow.add('redGlow');
			setTimeout(function(){ userGlow.remove('redGlow'); }, 300);
			break;
	}
}


function game(user){
	var compChoice = getCompChoice();
	switch (user+compChoice){
		case "rs":
		case "pr":
		case "sp":
			userWin(user, compChoice);
			//glowGreen(user);
			break;

		case "rp":
		case "ps":
		case "sr":
			compWin(user, compChoice);
			//glowRed(user);
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(user, compChoice);
			break;
	}
}

function main(){
	rockChoice.addEventListener('click', function(){
		game("r");
	})

	paperChoice.addEventListener('click', function(){
		game("p");
	})

	scissorsChoice.addEventListener('click', function(){
		game("s");
	})

	reset.addEventListener('click', function(){
		userScore = 0;
		compScore = 0;
		uScoreText.innerHTML = userScore;
		cScoreText.innerHTML = compScore;
	})
}

main();
