const tickSound = new Audio("assets/sounds/tick.mp3")
const levelSound = new Audio("assets/sounds/levelup.mp3")

tickSound.volume = 0.5
levelSound.volume = 0.8

let tickInterval = null

export function startHeartbeat(getTime){

tickInterval = setInterval(()=>{

const time = getTime()

const minutesLeft = 60 - time.getMinutes()

let speed = 1000

if(minutesLeft < 10) speed = 700
if(minutesLeft < 5) speed = 400
if(minutesLeft < 2) speed = 200

tickSound.currentTime = 0
tickSound.play()

clearInterval(tickInterval)

tickInterval = setInterval(()=>{

tickSound.currentTime = 0
tickSound.play()

},speed)

},1000)

}


export function stopHeartbeat(){

if(tickInterval){
clearInterval(tickInterval)
}

}


export function playLevelUp(){

levelSound.currentTime = 0
levelSound.play()

}