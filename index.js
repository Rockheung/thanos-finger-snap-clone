let canvas = document.querySelector("#root")
let ctx = canvas.getContext('2d')
var handIdle = new Image();
handIdle.src = 'thanos_idle.png'
handIdle.onload = ()=>{
  ctx.drawImage(handIdle,0,0,handIdle.width, handIdle.height)
}
handIdle.onerror=(e)=>{
  console.log(e)
}

const renderSnap = () => {
  let handSnap = new Image();
  handSnap.src = 'thanos_snap.png'
  handSnap.onload=()=>{
    window.requestAnimationFrame(()=>renderFrame(0,handSnap))
  }
}

const renderFrame = (i,img) => {
  if (i>img.width/80) {
    ctx.clearRect(0,0,80,80)
    ctx.drawImage(handIdle,0,0,handIdle.width, handIdle.height)
    return
  }
  ctx.clearRect(0,0,80,80)
  ctx.drawImage(img,i*80,0,80,80,0,0,80, 80)
  window.requestAnimationFrame(()=>renderFrame(i+1,img))
}
canvas.onclick = renderSnap