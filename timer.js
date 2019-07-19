let timeInput = document.getElementById("timeInput")
let startButton = document.getElementById("startButton")
let timeDisplay = document.getElementById("timeDisplay")


startButton.addEventListener('click', () => {

    let timeNeeded = parseInt(timeInput.value) * 1000

    timeDisplay.innerHTML = timeNeeded

    setInterval(function() {

        console.log("at least this works")}, 1000)
    
})