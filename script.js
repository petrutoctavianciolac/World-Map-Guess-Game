let countriesGuessed = 0;
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
let intervalId;
let timeNeeded = 900;

const popupOverlay = document.getElementById('popupOverlay');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');

startButton.addEventListener('click', function() {

    document.getElementById('countryName').disabled = false;
    const date = new Date();
    const startingTime = date.getTime();
    intervalId = setInterval(() => timeUpdate(startingTime), 1000);
})

resetButton.addEventListener('click', function() {
    
    clearInterval(intervalId);
    location.reload();
})


addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        
        const countryName = document.getElementById("countryName").value;
        document.getElementById("countryName").value = "";

        let lands = document.getElementsByName(`${countryName}`);
        if(lands.length == 0) lands = document.getElementsByClassName(`${countryName}`);

        for(let i = 0; i < lands.length; i++)
            lands[i].style.setProperty("fill", "#4caf50");

        if(lands.length > 0) countriesGuessed++;


        document.getElementById('score').innerHTML = `Countries Guessed: ${countriesGuessed}/197`;
    }
})

function timeUpdate(startingTime){

    const date = new Date();
    const currentTime = date.getTime();

    let timeDisplayed = 900 - Math.floor((currentTime - startingTime) / 1000);

    if(timeDisplayed == 0)  gameOver();
    if(countriesGuessed == 197) isWin(timeDisplayed);

    let minutes = Math.floor(timeDisplayed / 60);
    let seconds = timeDisplayed % 60;

    if(minutes < 10) minutes = '0' + minutes;

    if(seconds > 9)
        timeDisplayed = minutes + ':' + seconds;
    else timeDisplayed = minutes + ':0' + seconds;

    document.getElementById('cronos').innerHTML = `Time remained: ${timeDisplayed}`;
}

function gameOver(){

    document.getElementById('countryName').disabled = true;
    clearInterval(intervalId);
    popupOverlay.style.display = 'block';    

}

submitButton.addEventListener('click', function() {

    let playerName = nameInput.value;

    if(playerName)
    {
        let players = localStorage.getItem('scoreboard');
        players = players ? JSON.parse(players) : [];
        players.push({name: playerName, score: countriesGuessed, time: timeNeeded});
        localStorage.setItem('scoreboard', JSON.stringify(players));
    }

    popupOverlay.style.display = 'none';
    location.reload();
})

function isWin(timeDisplayed){

    timeNeeded = 900 - timeDisplayed;
    document.getElementById('countryName').disabled = true;
    clearInterval(intervalId);
    popupOverlay.style.display = 'block';
}