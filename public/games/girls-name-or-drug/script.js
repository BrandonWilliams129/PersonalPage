// Word lists (updated and refined)
const drugNames = [
    "Abilify", "Adempas", "Adlyxin", "Aldara", "Amaryl", "Anoro", "Austedo", "Breo", "Bydureon",
    "Cimzia", "Cosentyx", "Daliresp", "Entresto", "Farxiga", "Gilenya", "Invokana", "Jardiance", "Kevzara",
    "Kisqali", "Latuda", "Linzess", "Movantik", "Nucala", "Otezla", "Ozempic", "Praluent", "Qsymia",
    "Rybelsus", "Skyrizi", "Stelara", "Taltz", "Tecfidera", "Trulicity", "Turalio", "Tymlos", "Verzenio",
    "Victoza", "Xeljanz", "Xtandi", "Yervoy", "Zeposia"
];

const girlNames = [
    "Amira", "Anisa", "Aria", "Aubri", "Briella", "Calia", "Camila", "Delina", "Diona", "Elara",
    "Emira", "Fiora", "Giana", "Ivyra", "Janina", "Kaia", "Liora", "Livia", "Mira", "Nira",
    "Olina", "Palina", "Rhea", "Selina", "Talia", "Veda", "Xena", "Yara", "Zaina", "Zariah",
    "Aurelia", "Bryna", "Cressa", "Darina", "Ellara", "Fayna", "Gracia", "Helina", "Izara", "Jalia",
    "Kenara", "Liva", "Malia", "Nila", "Orina", "Prena", "Ravina", "Sarina", "Tivona", "Zorina",
    "Avelyn", "Calyra", "Delora", "Ezira", "Fenyra", "Galina", "Halia", "Imyra", "Jovina", "Kalira",
    "Levara", "Melora", "Navina", "Olyra", "Pylina", "Quessia", "Rylana", "Synera", "Teyara", "Vysera"
];

// Game variables
let score = 0;
let lives = 3;
let currentWord = "";
let currentCategory = "";
let leaderboard = [];
let currentStreak = 0;
let bestStreak = 0;

// DOM elements
const wordDisplay = document.getElementById("wordDisplay");
const girlNameBtn = document.getElementById("girlNameBtn");
const drugNameBtn = document.getElementById("drugNameBtn");
const scoreDisplay = document.getElementById("score");
const streakDisplay = document.getElementById("streak");
const livesDisplay = document.getElementById("lives");
const livesBarFill = document.querySelector(".lives-bar-fill");
const feedbackMessage = document.getElementById("feedbackMessage");
const gameOverScreen = document.getElementById("gameOver");
const gameScreen = document.getElementById("game");
const finalScoreDisplay = document.getElementById("finalScore");
const leaderboardDisplay = document.getElementById("leaderboard");
const newHighScoreSection = document.getElementById("newHighScore");
const playerNameInput = document.getElementById("playerName");
const submitScoreBtn = document.getElementById("submitScoreBtn");
const restartBtn = document.getElementById("restartBtn");
const confettiContainer = document.querySelector(".confetti-container");

// Initialize game
function initGame() {
    score = 0;
    lives = 3;
    currentStreak = 0;
    updateScore();
    updateLives();
    updateStreak();
    feedbackMessage.textContent = "";
    feedbackMessage.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    gameOverScreen.classList.add("hidden");
    newHighScoreSection.classList.add("hidden");
    playerNameInput.value = "";
    loadLeaderboard();
    nextWord();
}

// Update score and lives display
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function updateLives() {
    livesDisplay.textContent = `Lives Left: ${lives}`;
    const percentage = (lives / 3) * 100;
    livesBarFill.style.width = `${percentage}%`;
}

function updateStreak() {
    streakDisplay.textContent = `Current Streak: ${currentStreak}`;
    if (currentStreak > 0) {
        streakDisplay.style.display = 'block';
    } else {
        streakDisplay.style.display = 'none';
    }
}

// Word switch animation
function switchWordWithAnimation(newWord) {
    wordDisplay.classList.remove("word-switch-enter");
    void wordDisplay.offsetWidth; // Trigger reflow
    wordDisplay.classList.add("word-switch-enter");
    wordDisplay.textContent = newWord;
}

// Shake animation for wrong answers
function shakeGame() {
    gameScreen.classList.remove("shake");
    void gameScreen.offsetWidth; // Trigger reflow
    gameScreen.classList.add("shake");
}

// Create confetti
function createConfetti() {
    // Clear any existing confetti
    confettiContainer.innerHTML = '';
    
    // Create more confetti pieces
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        confetti.className = 'confetti';
        
        // Random colors from our theme
        const colors = ['#FF4B6E', '#4776E6', '#FFD700', '#FF8090', '#8E54E9'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random initial position
        const leftPos = Math.random() * 100;
        
        // Slower fall duration between 2 and 3 seconds
        const fallDuration = 2 + Math.random();
        
        // Random size between 8px and 12px
        const size = 8 + Math.random() * 4;
        
        confetti.style.cssText = `
            background: ${randomColor};
            left: ${leftPos}vw;
            width: ${size}px;
            height: ${size}px;
            animation: confetti-fall ${fallDuration}s linear forwards;
        `;
        
        confettiContainer.appendChild(confetti);
        
        // Remove this confetti piece after animation
        setTimeout(() => {
            confetti.remove();
        }, fallDuration * 1000);
    }
    
    // Clear all confetti after 4 seconds
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 4000);
}

// Get random word
function nextWord() {
    feedbackMessage.classList.add("hidden");
    const isDrug = Math.random() < 0.5;
    if (isDrug) {
        currentWord = drugNames[Math.floor(Math.random() * drugNames.length)];
        currentCategory = "Drug";
    } else {
        currentWord = girlNames[Math.floor(Math.random() * girlNames.length)];
        currentCategory = "Girl's Name";
    }
    switchWordWithAnimation(currentWord);
}

// Check answer
function checkAnswer(guess) {
    const isCorrect = (guess === "Girl's Name" && girlNames.includes(currentWord)) ||
                     (guess === "Drug" && drugNames.includes(currentWord));

    if (isCorrect) {
        score += 10;
        currentStreak++;
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
        }
        feedbackMessage.textContent = currentStreak >= 3 ? 
            `Correct! ${currentStreak} in a row! 🔥` : 
            "Correct! ✅";
        feedbackMessage.style.color = "#2ecc71";
        
        // Trigger confetti for high streak or score milestones
        if (currentStreak === 5 || score % 100 === 0) {
            createConfetti();
        }
    } else {
        lives--;
        currentStreak = 0;
        feedbackMessage.textContent = `Wrong! It was a ${currentCategory} ❌`;
        feedbackMessage.style.color = "#e74c3c";
        shakeGame();
    }

    updateScore();
    updateLives();
    updateStreak();
    feedbackMessage.classList.remove("hidden");

    if (lives <= 0) {
        endGame();
    } else {
        setTimeout(() => {
            nextWord();
        }, 1500);
    }
}

// End game
function endGame() {
    gameScreen.classList.add("hidden");
    gameOverScreen.classList.remove("hidden");
    finalScoreDisplay.textContent = score;
    
    // Add streak to final display
    const streakText = bestStreak > 2 ? 
        `\nBest Streak: ${bestStreak} 🔥` : 
        "";
    finalScoreDisplay.textContent = `${score}${streakText}`;
    if (isHighScore(score)) {
        newHighScoreSection.classList.remove("hidden");
    }
    displayLeaderboard();
}

// Leaderboard functions
function loadLeaderboard() {
    const storedLeaderboard = localStorage.getItem("leaderboard");
    if (storedLeaderboard) {
        leaderboard = JSON.parse(storedLeaderboard);
    }
}

function saveLeaderboard() {
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function isHighScore(score) {
    if (leaderboard.length < 10) {
        return true;
    }
    return score > leaderboard[leaderboard.length - 1].score;
}

function addHighScore(name, score) {
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    if (leaderboard.length > 10) {
        leaderboard.pop();
    }
    saveLeaderboard();
    displayLeaderboard();
}

function displayLeaderboard() {
    const sortedScores = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
    leaderboardDisplay.innerHTML = sortedScores.map((entry, index) => `
        <li>
            ${index < 3 ? '<i class="fas fa-trophy trophy"></i>' : ''}
            ${entry.name}: ${entry.score}
        </li>
    `).join('');
}

// Event listeners
girlNameBtn.addEventListener("click", () => {
    checkAnswer("Girl's Name");
});

drugNameBtn.addEventListener("click", () => {
    checkAnswer("Drug");
});

submitScoreBtn.addEventListener("click", () => {
    const name = playerNameInput.value.trim() || "Anonymous";
    addHighScore(name, score);
    newHighScoreSection.classList.add("hidden");
});

restartBtn.addEventListener("click", () => {
    initGame();
});

// Start the game when the page loads
window.onload = () => {
    initGame();
};