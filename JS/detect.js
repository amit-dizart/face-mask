const videoElement = document.getElementById('video');
let canvas = document.getElementById('canvas');
let filterCanvas = document.getElementById('faceCanvas');
let finalPictures = []; //FINAL PICTURES TO BE RENDERED
let screenWidth = videoElement.clientWidth //WIDTH OF THE CANVAS BASED ON SCREEN SIZE
let screenheight = videoElement.clientHeight //HEIGHT OF THE CANVAS BASED ON SCREEN SIZE


//CLICK PICTURE 
async function takepicture(video, maskImage) { //TAKE PICTURE
  var context = canvas.getContext('2d');
  context.imageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;

  if (video) {
    canvas.width = w
    canvas.height = h
    let filterImage = new Image();
    filterImage.src = filterCanvas.toDataURL('image/png');

    filterImage.onload = async function  () {
      await renderPredictions();
      console.log('filterImage', filterCanvas.toDataURL('image/png'))
      context.drawImage(video, 0, 0, w, h); //DRAW IMAGE ON CANVAS
      context.drawImage(filterCanvas, 0, 0, w, h); //DRAW FILTERS ON CANVAS
      console.log(maskImage)
      var data = canvas.toDataURL('image/png');     //CONVERT CANVAS TO IMAGE
      finalPictures.push(data)
      document.getElementById('clickedImg').src = data; //SET IMAGE TO THE PREVIEW
    }
  } else {
    console.log("video not found!!")
  }
}

if (window.innerWidth < 620) { screenheight = screenWidth * 1.7 } 
let model, faceCanvas, w, h;
async function renderPredictions(t, animate, filter, change) {
 if (animate) {
    requestAnimationFrame(() => renderPredictions(null, true));
 }

 videoElement.width = videoElement.videoWidth / 2;
 videoElement.height = videoElement.videoHeight / 2;
  const predictions = await model.estimateFaces(videoElement);
  if (predictions.length > 0 && mask != null) {
    document.getElementById('faceCanvas').style.display= "block"
    const positionBufferData = predictions[0].scaledMesh.reduce((acc, pos) => acc.concat(pos), []);
    if (!faceCanvas) {
      let props = {
        id: 'faceCanvas',
        textureFilePath: mask,
        w,
        h
      }
      faceCanvas = new FacePaint(props);
      return;
    }
    faceCanvas.render(positionBufferData);
    if(change){
      console.log('change')
      faceCanvas.updateTexture(filter, false);
    }
  }
  else{
    document.getElementById('faceCanvas').style.display= "none"
  }
}

async function changeFilterMask(filter) {
  mask = filter;
  await renderPredictions(null, false, filter, true);
}

async function main() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    videoElement.srcObject = stream;
    await new Promise(function (res) {
      videoElement.onloadedmetadata = function () {
        w = videoElement.videoWidth;
        h = videoElement.videoHeight;
        res();
      }
    });

    videoElement.setAttribute('autoplay', true);
    videoElement.setAttribute('muted', true);
    videoElement.setAttribute('playsinline', true);
    videoElement.play();

    // Load the MediaPipe facemesh model.
    model = await facemesh.load({
      maxContinuousChecks: 5,
      detectionConfidence: 0.9,
      maxFaces: 1,
      iouThreshold: 0.3,
      scoreThreshold: 0.75
    });

  await  renderPredictions(null, true);

  if(!stream) {
    document.getElementById('video').style.display = 'none';
    document.getElementById('bottomSection').style.display = 'none';
  }else{
    document.getElementById('video').style.display = 'block';
    document.getElementById('camLoader').style.display = 'none'
    document.getElementById('bottomSection').style.display = 'block';
  }

  } catch (e) {
    document.getElementById('camLoader').style.display = 'block'
    document.getElementById('camLoader').innerText = 'Please allow camera access and refresh the page'
    console.error(e);
  }
}
tf.env().set('WEBGL_CPU_FORWARD', false);
main()