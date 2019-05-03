const imgSize = 80
const canvasRatio = 2
const framerate = 15
let canvas = document.querySelector("#root");
let ctx = canvas.getContext('2d')
var handIdle = new Image();
handIdle.src = 'https://rockheung.github.io/thanos-finger-snap-clone/thanos_idle.png'
handIdle.onload = ()=>{
  ctx.drawImage(handIdle,0,0,handIdle.width*canvasRatio, handIdle.height*canvasRatio)
}
handIdle.onerror=(e)=>{
  console.log(e)
}

const renderSnap = () => {
  let handSnap = new Image();
  handSnap.src = 'https://rockheung.github.io/thanos-finger-snap-clone/thanos_snap.png'
  handSnap.onload=()=>{
    renderFrame(0,handSnap)
  }
}

const renderFrame = (i,img) => {
  if (i>img.width/80) {
    ctx.clearRect(0,0,imgSize*canvasRatio,imgSize*canvasRatio)
    ctx.drawImage(handIdle,0,0,handIdle.width*canvasRatio, handIdle.height*canvasRatio)
    return
  }
  let newImg = new Image()
  newImg.src = img.src
  ctx.clearRect(0,0,imgSize*canvasRatio,imgSize*canvasRatio)
  ctx.drawImage(newImg,i*80,0,80,80,0,0,80*canvasRatio, 80*canvasRatio)
  setTimeout(()=>renderFrame(i+1,img),1000/framerate)
}
canvas.onclick = renderSnap