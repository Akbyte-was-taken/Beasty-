let speedMultiplier = 1

export function startClock(midnightCallback){

const secondHand = document.getElementById("second-hand")
const minuteHand = document.getElementById("minute-hand")
const hourHand = document.getElementById("hour-hand")
const digitalClock = document.getElementById("digital-clock")

let midnightTriggered = false


function update(){

const now = new Date()

/* extract time */

let seconds = now.getSeconds() + now.getMilliseconds()/1000
let minutes = now.getMinutes() + seconds/60
let hours = (now.getHours()%12) + minutes/60


/* rotate analog hands */

secondHand.style.transform = `rotate(${seconds*6}deg)`
minuteHand.style.transform = `rotate(${minutes*6}deg)`
hourHand.style.transform = `rotate(${hours*30}deg)`


/* update digital clock */

const hh = String(now.getHours()).padStart(2,'0')
const mm = String(now.getMinutes()).padStart(2,'0')
const ss = String(now.getSeconds()).padStart(2,'0')

digitalClock.textContent = `${hh}:${mm}:${ss}`


/* MIDNIGHT TRIGGER */

if(!midnightTriggered &&
now.getHours() === 0 &&
now.getMinutes() === 0 &&
now.getSeconds() === 0){

midnightTriggered = true
midnightCallback()

}

requestAnimationFrame(update)

}

update()

}


/* ===================================
DEV SHORTCUTS
=================================== */

document.addEventListener("keydown",(e)=>{

if(e.key === "F8"){

speedMultiplier = speedMultiplier === 1 ? 60 : 1

console.log(
speedMultiplier === 1
? "⏱ Clock Normal Speed"
: "⚡ Dev Mode: Fast Forward"
)

}

})


document.addEventListener("keydown",(e)=>{

if(e.key === "F9"){

console.log("🚀 Forced Midnight Trigger")
location.reload()

}

})
