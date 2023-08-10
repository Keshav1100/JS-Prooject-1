const userInput = document.querySelector("#user-guess")
const formSubmitBtn = document.querySelector(".user-input")
const userGuessList = document.querySelector(".user-guess-list")
const userGuessCount = document.querySelector(".user-guess-count")
const guessComment = document.querySelector(".guess-comment")

let userPlay = true
let num = parseInt(Math.random() * 100 + 1)
let guessCount = 10
let guessList = []
userGuessCount.innerHTML = `${guessCount}`

formSubmitBtn.addEventListener("submit", (e) => {
    e.preventDefault()
    if (userPlay) {
        gameStart(Number(userInput.value))
    }
    else {
        gameEnd("lost")
    }
})
function userGuessValidate(guess) {
    if (guess === "" || guess > 100 || guess <= 0 || isNaN(guess)) {
        guessComment.innerHTML = "Please enter valid guess."
        return false
    }
    else {
        return true
    }
}

function guessCheck(guess) {
    if (guess > num) {
        guessList.push(guess)
        guessCount = guessCount - 1
        msgDisplay("Your guess is greater.")
        userInput.value = ""
    }
    else if (guess < num) {
        guessList.push(guess)
        guessCount = guessCount - 1
        msgDisplay("Your guess is smaller.")
        userInput.value = ""
    }
    else if (guess === num) {
        guessList.push(guess)
        userInput.value = ""
        gameEnd("win")
    }
}

function gameStart(guess) {
    if (guessCount === 0) {
        msgDisplay("No guess left. Game over 💀.")
    }
    else if (userGuessValidate(guess)) {
        guessCheck(guess)

    }

}

function gameEnd(why) {
    if (why === "lost") {
        msgDisplay(`Game over 💀.\n  The number was ${num}.`)
    }
    else if (why === "win") {
        msgDisplay("🎉 Congratulations! Your guess is correct. 🎉 Game will restart in 5 seconds.")
    }
    setInterval(() => {
        gameReset()
    }, 5000)



}

function msgDisplay(message) {
    userGuessList.innerHTML = `${guessList}`
    guessComment.innerHTML = `${message}`
    userGuessCount.innerHTML = `${guessCount}`
    // display on the page
}

function gameReset() {
    num = parseInt(Math.random() * 100 + 1)
    guessCount = 10
    guessList = []
    userGuessCount.innerHTML = `${guessCount}`
    msgDisplay("")
}