let speedMultiplier = 1

export function startClock(midnightCallback){

const secondHand = document.getElementById("second-hand")
const minuteHand = document.getElementById("minute-hand")
const hourHand = document.getElementById("hour-hand")
const digitalClock = document.getElementById("digital-clock")

let midnightTriggered = false

// Start clock at March 4, 11:59:55 PM (23:59:55) in local time
const targetStart = new Date()
targetStart.setMonth(2) // March (0=Jan)
targetStart.setDate(4)
targetStart.setHours(23, 59, 55, 0)

// Offset to make "virtual" now equal to targetStart at initialization
const offsetMs = targetStart.getTime() - Date.now()

function update(){

// Virtual time (starts at targetStart and advances in real time)
const now = new Date(Date.now() + offsetMs)

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