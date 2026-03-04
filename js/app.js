import { startClock } from "./clock.js"
import { launchFireworks, spawnXP } from "./effects.js"
import { startHeartbeat, stopHeartbeat, playLevelUp } from "./sound.js"


document.addEventListener("DOMContentLoaded", () => {

const tvScreen = document.querySelector(".tv-screen")
const flash = document.getElementById("flash-bang")
const scene3d = document.getElementById("scene-3d-container")
const sceneCard = document.getElementById("scene-card")
const dirtBg = document.getElementById("dirt-bg")
const sceneSurprise = document.getElementById("scene-surprise")

const giftBtn = document.getElementById("gift-btn")

let midnightTriggered = false


/* ===============================
   MIDNIGHT EVENT
================================ */

function triggerMidnight(){

if(midnightTriggered) return
midnightTriggered = true

stopHeartbeat()

flash.classList.add("flash")

setTimeout(()=>{

scene3d.style.display = "none"
dirtBg.style.display = "block"
sceneCard.style.display = "block"

playLevelUp()

},200)

}


/* ===============================
   START SYSTEMS
================================ */

startClock(triggerMidnight)

spawnXP()

startHeartbeat(() => new Date())


/* ===============================
   GIFT CLICK
================================ */

giftBtn.onclick = () => {

document.body.classList.add("shake")

setTimeout(()=>{
document.body.classList.remove("shake")
},500)

sceneCard.style.display = "none"
sceneSurprise.style.display = "block"

launchFireworks()

playLevelUp()

const diamond = document.querySelector(".diamond")

if(diamond){
diamond.classList.add("diamond-burst")
}

}
function triggerMidnight(){

if(midnightTriggered) return
midnightTriggered = true

stopHeartbeat()

/* TV POWER ON */

tvScreen.classList.add("tv-on")

setTimeout(()=>{

tvScreen.classList.add("tv-glitch")
tvScreen.textContent = "HAPPY BIRTHDAY BEASTY"

},400)


/* FLASH TRANSITION */

setTimeout(()=>{

flash.classList.add("flash")

scene3d.style.display = "none"
dirtBg.style.display = "block"
sceneCard.style.display = "block"

playLevelUp()

},1200)

}

})