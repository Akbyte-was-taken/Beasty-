let speedMultiplier = 1
let simulatedTime = new Date()

export function startClock(midnightCallback){

const secondHand = document.getElementById("second-hand")
const minuteHand = document.getElementById("minute-hand")
const hourHand = document.getElementById("hour-hand")
const digitalClock = document.getElementById("digital-clock")

let midnightTriggered = false


function update(){

/* advance simulated time */
simulatedTime = new Date(simulatedTime.getTime() + (16 * speedMultiplier))

const seconds = simulatedTime.getSeconds() + simulatedTime.getMilliseconds()/1000
const minutes = simulatedTime.getMinutes() + seconds/60
const hours = simulatedTime.getHours()%12 + minutes/60

/* rotate analog hands */

secondHand.style.transform = `rotate(${seconds * 6}deg)`
minuteHand.style.transform = `rotate(${minutes * 6}deg)`
hourHand.style.transform = `rotate(${hours * 30}deg)`


/* DIGITAL CLOCK */

const h = simulatedTime.getHours().toString().padStart(2,"0")
const m = simulatedTime.getMinutes().toString().padStart(2,"0")
const s = simulatedTime.getSeconds().toString().padStart(2,"0")

digitalClock.textContent = `${h}:${m}:${s}`


/* MIDNIGHT TRIGGER */

if(!midnightTriggered &&
simulatedTime.getHours() === 0 &&
simulatedTime.getMinutes() === 0 &&
simulatedTime.getSeconds() === 0){

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

/* F8 — Toggle clock speed */

if(e.key === "F8"){

if(speedMultiplier === 1){

speedMultiplier = 60
console.log("⚡ Dev Mode: Clock Fast Forward")

}else{

speedMultiplier = 1
console.log("⏱ Clock Normal Speed")

}

}


/* F9 — Force midnight */

if(e.key === "F9"){

console.log("🚀 Forced Midnight")

simulatedTime.setHours(0)
simulatedTime.setMinutes(0)
simulatedTime.setSeconds(0)

}

})