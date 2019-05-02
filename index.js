let canvas = document.querySelector("#root")
let ctx = canvas.getContext('2d')
console.log('sdgsdf')
var handIdle = new Image();
handIdle.src = 'thanos_idle.png'
handIdle.onload = ()=>{
  ctx.drawImage(hand,0,0,hand.width, hand.height)
  console.log('Complete')
}
handIdle.onerror=(e)=>{
  console.log(e)
}
ctx.strokeRect(10,15,50,60)