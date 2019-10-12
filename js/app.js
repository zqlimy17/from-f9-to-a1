// MASTER OPTIONS
let time = 30;
let difficultyMode = 'easy';
let activeGameMode = "Timed";
let timeLeft = time;
let operation = "";
let currentHighScore = 500;
let ans = 0;
let isPaused = false;
let scoreCounter = 0;


// SELECTORS
const startMenu = $('#start-menu');
const countdown = $('#countdown');
const inGame = $('#in-game');
const endGame = $('#end-game');
const scoreBoard = $('#score-board');
const startGame = $('#start-game');
const userInput = $('#user-input');
const timeBar = $('#time-bar');
const endGameScore = $('#end-game-score');
const pausedScreen = $('#paused-screen');
const masterTime = $('#master-time')
const operationButton = $('.operation-button');
const startCountdown = $('#start-countdown');
const gameSpace = $('#mathable');
const mainMenuHighScore = $('#main-menu-high-score')
const highScore = $('.high-score');
const currentScore = $('#current-score');

// BUTTON SELECTORS
const restartGameButton = $('#restart-game');
const mainMenuButton = $('.back-to-main-menu');
const additionButton = $('#addition');
const subtractionButton = $('#subtraction');
const multiplicationButton = $('#multiplication');
const divisionButton = $('#division');
const randomButton = $('#random');
const pauseButton = $('#pause-button');
const inGameEndGame = $('#in-game-end-game');
const resumeButton = $('#resume-button');
const pausedMainMenu = $('#paused-main-menu');
const gameMode = $('.game-mode');
const difficultyOptions = $('.difficulty-options');

// FUNCTIONS
let game = () => {
    userInput.focus();
    switch (operation) {
        case "addition":
            addition();
            break;
        case "subtraction":
            subtraction();
            break;
        case "multiplication":
            multiplication();
            break;
        case "division":
            division();
            break;
        default:
            random();
    }
};

let addition = () => {
    switch (difficultyMode) {
        case "easy":
            var a = Math.ceil(Math.random() * 45) + 5;
            var b = Math.ceil(Math.random() * 47) + 3;
            ans = a + b;
            gameSpace.text(a + '+' + b);
            break;
        case "medium":
            var a = Math.ceil(Math.random() * 45) + 5;
            var b = Math.ceil(Math.random() * 47) + 3;
            ans = a + b;
            gameSpace.text(a + '+' + b);
            break;
        default:
            var a = Math.ceil(Math.random() * 45) + 5;
            var b = Math.ceil(Math.random() * 47) + 3;
            var c = Math.ceil(Math.random() * 45) + 5;
            var d = Math.ceil(Math.random() * 47) + 3;
            ans = a + b + c + d;
            gameSpace.text(`${a} + ${b} + ${c} + ${d}`);
    }
};

let subtraction = () => {
    switch (difficultyMode) {
        case "easy":
            var a = Math.ceil(Math.random() * 45) + 5;
            var b = Math.ceil(Math.random() * 47) + 3;
            ans = a - b;
            gameSpace.text(a + '-' + b);
            break;
        case "medium":
            var a = Math.ceil(Math.random() * 25) + 25;
            var b = Math.ceil(Math.random() * 47) + 3;
            var c = Math.ceil(Math.random() * 45) + 5;
            ans = a - b - c;
            gameSpace.text(`${a} - ${b} - ${c}`);
            break;
        default:
            var a = Math.ceil(Math.random() * 80) + 20;
            var b = Math.ceil(Math.random() * 47) + 3;
            var c = Math.ceil(Math.random() * 45) + 5;
            var d = Math.ceil(Math.random() * 47) + 3;
            ans = a - b - c - d;
            gameSpace.text(`${a} - ${b} - ${c} - ${d}`);
    }
}


let multiplication = () => {
    let randoming = Math.random();
    switch (difficultyMode) {
        case "easy":
            var a = Math.ceil(Math.random() * 9) + 3;
            var b = Math.ceil(Math.random() * 9) + 3;
            ans = a * b;
            gameSpace.text(a + 'x' + b);
            break;
        case "medium":
            randoming = Math.random();
            var a = Math.ceil(Math.random() * 8)+4;
            var b = Math.ceil(Math.random() * 4)+1;
            if (randoming < 0.5) {
                ans = a * a * b;
                gameSpace.text(`${a}² x ${b}`);
            } else {
                ans = a * b * b;
                gameSpace.text(`${a} x ${b}²`);
            }
            break;
        default:
            randoming = Math.random();
            var a = Math.ceil(Math.random() * 4)+2;
            var y = (Math.ceil(Math.random() * 4)+2);
            switch (true) {
                case (randoming < 0.33):
                    var b = y * y;
                    var c = Math.ceil(Math.random() * 4)+2;
                    ans = a * a * Math.sqrt(b) * c;
                    gameSpace.text(`${a}² x √${b} x ${c}`);
                    break;
                case (randoming < 0.67):
                    var c = y * y;
                    var b = Math.ceil(Math.random() * 4)+2;
                    ans = a * b * b * Math.sqrt(c);
                    gameSpace.text(`${a} x ${b}² x √${c}`);
                    break;
                default:
                    var d = (Math.ceil(Math.random() * 4)+2);
                    var b = (Math.ceil(Math.random() * 4)+2);
                    var c = (Math.ceil(Math.random() * 4)+2);
                    ans = a * b * c * d;
                    gameSpace.text(`${a} x ${b} x ${c} x ${d}`);
            }
    }
};

let division = () => {
    switch (difficultyMode) {
        case "easy":
            var b = Math.ceil(Math.random() * 9) + 3;
            var a = b * (Math.ceil(Math.random() * 9) +3);
            ans = a / b;
            gameSpace.text(a + '÷' + b);
            break;
        case "medium":
            var b = Math.ceil(Math.random() * 2) + 3;
            var y = b * (Math.ceil(Math.random() * 7));
            var a = y * y;
            ans = y / b
            gameSpace.text(`√${a} ÷ ${b}`);
            break;
        default:
            var z = Math.ceil(Math.random() * 2) + 2;
            var b = z * z;
            var y = b * (Math.ceil(Math.random() * 3));
            var a = y * y;
            ans = y/z;
            gameSpace.text(`√${a} ÷ √${b}`);
    }
};

let random = () => {
    let r = "";
    r = Math.floor(Math.random() * 4);
    switch (true) {
        case (r === 0):
            addition();
            break;
        case (r === 1):
            subtraction();
            break;
        case (r === 2):
            multiplication();
            break;
        default:
            division();
    }
};

let enter = (event) => {
    let answer = event.target.value;
    if (answer == ans) {
        userInput.addClass('flash')
        setTimeout(function() {
            userInput.removeClass('flash')
        }, 400);
        correct();
        game();
    } else {
        userInput.addClass('shake')
        setTimeout(function() {
            userInput.removeClass('shake')
        }, 400);
        wrong();
    };
};

userInput.on('keydown', function (event) {
    if (event.keyCode === 13) {
        enter(event);
    } else if (event.keyCode === 32) {
        game();
    }
});

const correct = () => {
    if (difficultyMode === "easy") {
        if (operation === "addition") {
            scoreCounter++;
        } else if (operation === "subtraction") {
            scoreCounter = scoreCounter + 2 ;
        } else if (operation === "multiplication") {
            scoreCounter = scoreCounter + 3;
        } else if (operation === "division") {
            scoreCounter = scoreCounter + 4;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 2;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 4;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 6;
            } else {
                scoreCounter = scoreCounter + 8;
            }
        }
        currentScore.text(scoreCounter);
        userInput.val("");
    } else if (difficultyMode === "medium") {
        if (operation === "addition") {
            scoreCounter = scoreCounter + 10;
        } else if (operation === "subtraction") {
            scoreCounter = scoreCounter + 20 ;
        } else if (operation === "multiplication") {
            scoreCounter = scoreCounter + 30;
        } else if (operation === "division") {
            scoreCounter = scoreCounter + 40;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 20;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 40 ;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 60;
            } else {
                scoreCounter = scoreCounter + 80;
            }
        }
        currentScore.text(scoreCounter);
        userInput.val("");
    } else {
        if (operation === "addition") {
            scoreCounter = scoreCounter + 100;
        } else if (operation === "subtraction") {
            scoreCounter = scoreCounter + 200 ;
        } else if (operation === "multiplication") {
            scoreCounter = scoreCounter + 300;
        } else if (operation === "division") {
            scoreCounter = scoreCounter + 400;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 200;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 400;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 600;
            } else {
                scoreCounter = scoreCounter + 800;
            }
        }
        currentScore.text(scoreCounter);
        userInput.val("");
    }
};

const wrong = () => {
    scoreCounter--;
    currentScore.text(scoreCounter);
    userInput.val("");
};

const gameStart = () => {
    countdown.hide();
    inGame.show();
    game();
    startTimer();
};

let startTimer = () => {
    if (activeGameMode === "Timed") {
        timeBar.show();
        timeBar.addClass('colorchange');
        timeLeft = time;
        let x = setInterval(function() {
            if (!isPaused) {
                timeLeft = timeLeft - 0.01;
                timeBar.width(((timeLeft/time)*100)+'%');
            }
            if (timeLeft <= 0.01) {
                clearInterval(x);
                gameEnd();
            }
        },10);
        pausedMainMenu.on('click', () => {
            clearInterval(x);
            isPaused = false;
        })
        inGameEndGame.on('click', () => {
            clearInterval(x);
        })
    } else if (activeGameMode === "Casual") {
        timeBar.hide();
    }
};

const startGameButtonClicked = () => {
    scoreCounter = 0;
    currentScore.text(scoreCounter);
    let counter = 3;
    startMenu.hide();
    countdown.show();
    startCountdown.text(counter);

    let count = setInterval(function(){
        counter--;
        startCountdown.text(counter);
        if(counter === 0) {
            startCountdown.text('Go!');
            clearInterval(count);
        }
    },1000);
    setTimeout(function(){
        gameStart();
    }, 4000);
};

const gameEnd = () => {
    inGame.hide();
    endGame.show();
    endGameScore.append(scoreCounter);
    mainMenuHighScore.show();
    if (currentHighScore < scoreCounter) {
        currentHighScore = scoreCounter;
        highScore.text(currentHighScore);
    };
    if (currentHighScore >= 25) {
        $('#medium-tooltip').tooltip('dispose');
        $('#medium-button').css('pointer-events', '');
        difficultyOptions.eq(1).attr('disabled', false);
    };
    if (currentHighScore >= 250) {
        $('#hard-tooltip').tooltip('dispose')
        $('#hard-button').css('pointer-events', '');
        difficultyOptions.eq(2).attr('disabled', false);
    }
};

// BUTTONS

startGame.attr('disabled', true);

startGame.on('click', () => {
    startGameButtonClicked();
});

restartGameButton.on('click', () => {
    startGameButtonClicked();
    endGame.hide();
    endGameScore.text("");
});

operationButton.on('click', (event) => {
    $('#start-tooltip').tooltip('dispose');
    let x = event.target.id;
    operationButton.removeClass('active');
    $(event.currentTarget).addClass('active');
    operation = x;
    startGame.attr('disabled', false);
});

gameMode.on('click', (event) => {
    gameMode.removeClass('active');
    $(event.currentTarget).addClass('active');
    masterTime.text($(event.currentTarget).attr('value'));
    activeGameMode = $(event.currentTarget).text();
});

difficultyOptions.on('click', (event) => {
    difficultyOptions.removeClass('active');
    $(event.currentTarget).addClass('active');
    difficultyMode = $(event.currentTarget).attr('value');
});

inGameEndGame.on('click', () => {
    gameEnd();
});

mainMenuButton.on('click',() => {
    pausedScreen.hide();
    countdown.hide();
    inGame.hide();
    endGame.hide();
    startMenu.show();
    endGameScore.text("");
});

pauseButton.on('click', () => {
    timeBar.css('animation-play-state', 'paused');
    isPaused = true;
    pausedScreen.show();
    inGame.hide();
});

resumeButton.on('click', () => {
    timeBar.css('animation-play-state', '');
    isPaused = false;
    pausedScreen.hide();
    inGame.show();
});

// TOOLTIPS
$('[data-toggle="tooltip"]').tooltip();

// SHOW/HIDE SECTIONS
mainMenuHighScore.hide();
countdown.hide();
inGame.hide();
endGame.hide();
pausedScreen.hide();
masterTime.text(time + ' seconds');