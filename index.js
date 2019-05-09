const imgSize = 80
const canvasRatio = 2
const framerate = 50
const moveXoffset = 0;
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
let isRunning = true

const renderSnap = () => {
  let handSnap = new Image();
  handSnap.src = 'https://rockheung.github.io/thanos-finger-snap-clone/thanos_snap.png'
  handSnap.onload=()=>{
    if (isRunning) {
      renderFrameSync(0,handSnap)
    }
  }
}

const renderFrame = (i,img) => {
  if (i>img.width/imgSize-1) {
    ctx.clearRect(0,0,imgSize*canvasRatio,imgSize*canvasRatio)
    ctx.drawImage(handIdle,0,0,handIdle.width*canvasRatio, handIdle.height*canvasRatio)
    isRunning = true
    return
  }
  isRunning = false
  ctx.clearRect(0,0,imgSize*canvasRatio,imgSize*canvasRatio)
  ctx.drawImage(img,i*(imgSize+moveXoffset),0,imgSize,imgSize,0,0,imgSize*canvasRatio, 80*canvasRatio)
  setTimeout(()=>renderFrame(i+1,img),1000/framerate)
}

const renderFrameSync = async (i,img) => {
  if (i>img.width/imgSize-1) {
    ctx.clearRect(0,0,imgSize*canvasRatio,imgSize*canvasRatio)
    ctx.drawImage(handIdle,0,0,handIdle.width*canvasRatio, handIdle.height*canvasRatio)
    isRunning = true
    return
  }
  isRunning = false
  ctx.clearRect(0,0,imgSize*canvasRatio,imgSize*canvasRatio)
  await new Promise(res=>{
    let handSnap = new Image();
    handSnap.src = img.src
    handSnap.onload=()=>{
      ctx.drawImage(handSnap,i*(imgSize+moveXoffset),0,imgSize,imgSize,0,0,imgSize*canvasRatio, 80*canvasRatio)
      setTimeout(()=>{
        renderFrameSync(i+1,handSnap)
        res()
      },1000/framerate)
    }
  })
  
}

canvas.onclick = renderSnap