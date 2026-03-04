let xpInterval = null

export function launchFireworks() {

const count = 80

for (let i = 0; i < count; i++) {

const p = document.createElement("div")

p.className = "firework"

p.style.position = "absolute"
p.style.left = "50%"
p.style.top = "50%"
p.style.transform = "translate(-50%, -50%)"

const angle = Math.random() * Math.PI * 2
const distance = 200 + Math.random() * 200

const x = Math.cos(angle) * distance
const y = Math.sin(angle) * distance

p.style.setProperty("--x", `${x}px`)
p.style.setProperty("--y", `${y}px`)

/* random color for fireworks */
const colors = ["#55FFFF","#FFFF55","#FF5555","#55FF55","#FF88FF"]
p.style.background = colors[Math.floor(Math.random()*colors.length)]

document.body.appendChild(p)

setTimeout(() => {
p.remove()
}, 2000)

}

}



export function spawnXP() {

if (xpInterval) return   // prevent multiple intervals

xpInterval = setInterval(() => {

const xp = document.createElement("div")

xp.className = "xp"

xp.style.position = "absolute"
xp.style.left = Math.random() * window.innerWidth + "px"

document.body.appendChild(xp)

setTimeout(() => {
xp.remove()
}, 4000)

}, 300)

}



export function stopXP(){

if(xpInterval){
clearInterval(xpInterval)
xpInterval = null
}

}