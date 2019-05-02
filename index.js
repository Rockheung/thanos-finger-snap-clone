let canvas = document.querySelector("#root")
let ctx = canvas.getContext('2d')
var handIdle = new Image();
handIdle.src = 'thanos_idle.png'
handIdle.onload = ()=>{
  ctx.drawImage(hand,0,0,handIdle.width, handIdle.height)
}
handIdle.onerror=(e)=>{
  console.log(e)
}

const renderSnap = () => {
  let handSnap = new Image();
  handSnap.src = 'thanos_snap.png'
  handSnap.onload=()=>{
    for (var i=0; i<handSnap.width/80; i++) {
      ctx.drawImage(handSnap,i*80,0,80,80,0,0,80,80)
    }
  }
  
}
canvas.onclick = renderSnap