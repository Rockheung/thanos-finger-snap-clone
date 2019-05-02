let canvas = document.querySelector("#root")
let ctx = canvas.getContext('2d')
console.log('sdgsdf')
var hand = new Image();
hand.src = 'static/thanos_idle.png'
hand.onload = ()=>{
  ctx.drawImage(hand,0,0,hand.width, hand.height)
  console.log('Complete')
}
hand.onerror=(e)=>{
  console.log(e)
}
ctx.strokeRect(10,15,50,60)