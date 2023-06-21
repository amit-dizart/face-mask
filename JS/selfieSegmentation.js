const backgroundCanvasElement = document.getElementById('backgroundCanvasElement');
const backgroundCanvasCtx = backgroundCanvasElement.getContext('2d');
const videoEle = document.getElementById('video');
function onResults(results) {
    backgroundCanvasElement.width = videoEle.videoWidth;
    backgroundCanvasElement.height = videoEle.videoHeight;

    backgroundCanvasCtx.imageSmoothingEnabled = false;
    backgroundCanvasCtx.mozImageSmoothingEnabled = false;
    backgroundCanvasCtx.webkitImageSmoothingEnabled = false;
    backgroundCanvasCtx.msImageSmoothingEnabled = false;
    console.log("background removal");

    const image = new Image();
    image.src = './assets/bg.jpg';
    image.onload = function () {
        backgroundCanvasCtx.save();
        backgroundCanvasCtx.drawImage(results.image, 0, 0, backgroundCanvasElement.width, backgroundCanvasElement.height);
        backgroundCanvasCtx.globalCompositeOperation = 'destination-atop';
        backgroundCanvasCtx.drawImage(results.segmentationMask, 0, 0, backgroundCanvasElement.width, backgroundCanvasElement.height);
        backgroundCanvasCtx.globalCompositeOperation = 'destination-over';
        backgroundCanvasCtx.drawImage(image, 0, 0, backgroundCanvasElement.width, backgroundCanvasElement.height);
        backgroundCanvasCtx.restore();
        let dataURL = backgroundCanvasElement.toDataURL('image/png');
        console.log(dataURL);
        imagesWithoutBackground.push(dataURL);
    }
}

const selfieSegmentation = new SelfieSegmentation({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`;
    }
});
selfieSegmentation.setOptions({
    modelSelection: 1,
});


let imagesWithoutBackground = [];

const removeBackground = async (ImagesList, index) => {
    if (index >= ImagesList.length) {
        if (ImagesList.length === imagesWithoutBackground.length) {
            console.log("done", imagesWithoutBackground.length);
            const lastElement = imagesWithoutBackground.shift();
            imagesWithoutBackground.push(lastElement);
            console.log(imagesWithoutBackground[0]);
            fileChange(imagesWithoutBackground);
        }else{
            imagesWithoutBackground= null; 
            imagesWithoutBackground = [];
            removeBackground(ImagesList, 0);
        }
    } else {
        let filterimage = new Image();
        filterimage.src = ImagesList[index];
        filterimage.onload = async function () {
            setTimeout(() => {
                selfieSegmentation.send({ image: filterimage }).then(() => {
                    selfieSegmentation.onResults(onResults);
                    removeBackground(ImagesList, index + 1);
                });
            }, 1000);
        }
    }
}
