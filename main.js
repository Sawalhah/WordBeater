// Initialize the Game
window.addEventListener('load', init);

// levels Array
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

//Globals
let time = levels.easy;
let score = 0;
let level = currentLevel;
let isPlaying;


//DOM elements
const bodyBG = document.body;
const wordText = document.querySelector("#word_text");
const currentWord = document.querySelector("#current_word");
const scoreDisplay = document.querySelector("#score");
const timeLeft = document.querySelector("#time_left");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");


const words = [
    'leather',
    'quack',
    'gleaming',
    'cure',
    'look',
    'queen',
    'care',
    'jewel',
    'chubby',
    'creature',
    'knee',
    'avoid',
    'blink',
    'line',
    'burly',
    'tedious',
    'suspect',
    'wax',
    'important',
    'irritate',
    'attractive',
    'regret',
    'pull',
    'stranger',
    'certain',
    'disgusting',
    'faint',
    'skirt',
    'dear',
    'report',
    'shoes',
    'adjustment',
    'slimy',
    'obese',
    'dynamic',
]


function init() {
    // function to display a random word
    showWord(words);


    //set current level to easy
    currentLevel();

    //set time interval 
    seconds.innerHTML = level;

    // start matching the inputs
    wordText.addEventListener('input', startMatching);

    // countdown
    setInterval(countdoun, 1000);

    //check game status
    setInterval(gameSatus, 50);

}

function startMatching() {
    if (wordMatch()) {
        isPlaying = true;
        time = level + 1;
        showWord(words);
        wordText.value = '';
        score++;
        currentLevel();
        seconds.innerHTML = level;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function wordMatch() {
    if (wordText.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!";
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function showWord(_words) {
    // Generate a random index
    const randIdx = Math.floor(Math.random() * _words.length);
    currentWord.innerHTML = _words[randIdx];
}

function countdoun() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeLeft.innerHTML = time;
}

function gameSatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "Game Over!";
        score = -1;
    }
}

function currentLevel() {
    if (score >= 0 && score < 10) {
        level = levels.easy;
        bodyBG.style.backgroundColor = "#343a40";
    } else if (score >= 10 && score < 20) {
        level = levels.medium;
        bodyBG.style.backgroundColor = "#6c757d";
    } else if (score >= 20) {
        level = levels.hard;
        bodyBG.style.backgroundColor = "#dc3545";
    }

    console.log(level);
    return level;
}