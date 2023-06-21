const metaData = [
    {
        id: "filter1",
        form: 'Kathakali',
        multiplier: 2,
        frequency: [4, 3, 2, 2, 2, 3, 2, 3, 2],
        scaledAudio: '/cdn/audio/kathak.mp3',
        finalAudio: '/cdn/audio/kathak.mp3',
        masks: ["./assets/masks/mask.jpg", "./assets/masks/mask1.jpg", "./assets/masks/mask2.jpg", "./assets/masks/mask3.jpg", "./assets/masks/mask4.jpg", "./assets/masks/mask5.jpg", "./assets/masks/mask6.jpg", "./assets/masks/mask7.jpg", "./assets/masks/mask8.jpg", "./assets/masks/mask8.jpg"],
        img: './assets/filters/image.svg',
        headText: 'Kerala, India | 16th Century',
        description: 'It is a "story play" genre of art, but one distinguished by the elaborately colourful make-up and costumes of the traditional male actor-dancers. It synthesizes music, vocal performers, choreography and hand and facial gestures together to express ideas.',
        descriptonImage: './assets/dances/kathak.png'
    },
    {
        id: "filter2",
        form: 'Theyyam',
        multiplier: 2,
        frequency: [3, 2, 2, 2, 1],
        scaledAudio: '/cdn/audio/kathak.mp3',
        finalAudio: '/cdn/audio/kathak.mp3',
        img: './assets/filters/image1.svg',
        masks: ["./assets/masks/mask.jpg", "./assets/masks/mask1.jpg", "./assets/masks/mask2.jpg", "./assets/masks/mask3.jpg", "./assets/masks/mask4.jpg", "./assets/masks/mask5.jpg", "./assets/masks/mask6.jpg", "./assets/masks/mask7.jpg", "./assets/masks/mask8.jpg", "./assets/masks/mask8.jpg"],
        headText: 'Kerala, India | 16th Century',
        description: 'It is a "story play" genre of art, but one distinguished by the elaborately colourful make-up and costumes of the traditional male actor-dancers. It synthesizes music, vocal performers, choreography and hand and facial gestures together to express ideas.',
        descriptonImage: './assets/dances/kathak.png'
    },
    {
        id: "filter3",
        form: 'YakshAgana',
        multiplier: 2,
        frequency: [3, 2, 2, 2, 1],
        scaledAudio: '/cdn/audio/kathak.mp3',
        finalAudio: '/cdn/audio/kathak.mp3',
        img: './assets/filters/image2.svg',
        masks: ["./assets/masks/mask.jpg", "./assets/masks/mask1.jpg", "./assets/masks/mask2.jpg", "./assets/masks/mask3.jpg", "./assets/masks/mask4.jpg", "./assets/masks/mask5.jpg", "./assets/masks/mask6.jpg", "./assets/masks/mask7.jpg", "./assets/masks/mask8.jpg", "./assets/masks/mask8.jpg"],
        headText: 'Kerala, India | 16th Century',
        description: 'It is a "story play" genre of art, but one distinguished by the elaborately colourful make-up and costumes of the traditional male actor-dancers. It synthesizes music, vocal performers, choreography and hand and facial gestures together to express ideas.',
        descriptonImage: './assets/dances/kathak.png'
    },
    {
        id: "filter4",
        form: 'Mudiyuttam',
        multiplier: 2,
        frequency: [3, 2, 2, 2, 1],
        scaledAudio: '/cdn/audio/kathak.mp3',
        finalAudio: '/cdn/audio/kathak.mp3',
        img: './assets/filters/image.svg',
        masks: ["./assets/masks/mask.jpg", "./assets/masks/mask1.jpg", "./assets/masks/mask2.jpg", "./assets/masks/mask3.jpg", "./assets/masks/mask4.jpg", "./assets/masks/mask5.jpg", "./assets/masks/mask6.jpg", "./assets/masks/mask7.jpg", "./assets/masks/mask8.jpg", "./assets/masks/mask8.jpg"],
        headText: 'Kerala, India | 16th Century',
        description: 'It is a "story play" genre of art, but one distinguished by the elaborately colourful make-up and costumes of the traditional male actor-dancers. It synthesizes music, vocal performers, choreography and hand and facial gestures together to express ideas.',
        descriptonImage: './assets/dances/kathak.png'
    },
    {
        id: "filter5",
        form: 'Kathakali',
        multiplier: 2,
        frequency: [3, 2, 2, 2, 1],
        scaledAudio: '/cdn/audio/kathak.mp3',
        finalAudio: '/cdn/audio/kathak.mp3',
        img: './assets/filters/image.svg',
        masks: ["./assets/masks/mask.jpg", "./assets/masks/mask1.jpg", "./assets/masks/mask2.jpg", "./assets/masks/mask3.jpg", "./assets/masks/mask4.jpg", "./assets/masks/mask5.jpg", "./assets/masks/mask6.jpg", "./assets/masks/mask7.jpg", "./assets/masks/mask8.jpg", "./assets/masks/mask8.jpg"],
        headText: 'Kerala, India | 16th Century',
        description: 'It is a "story play" genre of art, but one distinguished by the elaborately colourful make-up and costumes of the traditional male actor-dancers. It synthesizes music, vocal performers, choreography and hand and facial gestures together to express ideas.',
        descriptonImage: './assets/dances/kathak.png'
    },
    {
        id: "filter6",
        form: 'Kathakali',
        multiplier: 2,
        frequency: [3, 2, 2, 2, 1],
        scaledAudio: '/cdn/audio/kathak.mp3',
        finalAudio: '/cdn/audio/kathak.mp3',
        img: './assets/filters/image.svg',
        masks: ["./assets/masks/mask.jpg", "./assets/masks/mask1.jpg", "./assets/masks/mask2.jpg", "./assets/masks/mask3.jpg", "./assets/masks/mask4.jpg", "./assets/masks/mask5.jpg", "./assets/masks/mask6.jpg", "./assets/masks/mask7.jpg", "./assets/masks/mask8.jpg", "./assets/masks/mask8.jpg"],
        headText: 'Kerala, India | 16th Century',
        description: 'It is a "story play" genre of art, but one distinguished by the elaborately colourful make-up and costumes of the traditional male actor-dancers. It synthesizes music, vocal performers, choreography and hand and facial gestures together to express ideas.',
        descriptonImage: './assets/dances/kathak.png'
    }
]



const mimicImages = ["./assets/mimic/mimic1.png",
    "./assets/mimic/mimic2.png",
    "./assets/mimic/mimic3.png",
    "./assets/mimic/mimic4.png",
    "./assets/mimic/mimic5.png",
    "./assets/mimic/mimic6.png",
    "./assets/mimic/mimic7.png",
    "./assets/mimic/mimic8.png",
    "./assets/mimic/mimic8.png",
    "./assets/mimic/mimic8.png",
]

let videoCanvas;
let filterFrequency;
let selectedFilter = null;
let recording = false;
var mask = null;
const filtersRow = document.getElementById('filters');
const message = document.getElementById('message');
const recordButtonContainer = document.getElementById('recordButtonContainer');
const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const stopButtonContainer = document.getElementById('stopButtonContainer');
const mimicContainer = document.getElementById('mimic');
const mimicImage = document.getElementById('mimicImage');
const capturing = document.getElementById('capturing');
const timerText = document.getElementById('timer');
const popUp = document.getElementById('popUp');
const title = document.getElementById('title');
const description = document.getElementById('description');
const descriptonImage = document.getElementById('danceImage');
const startDanceButton = document.getElementById('startButton');
const headText = document.getElementById('headText');
const cancleButton = document.getElementById('cancleButton');
const audio = document.getElementById('audioElement')
const cameraBody = document.getElementById("cameraSection")
const generateVideoBody = document.getElementById("generateVideo")
const downloadVideoSection = document.getElementById("downloadVideoSection")
const downloadVidButton = document.getElementById("downloadVidButton")
const topBar = document.getElementById("topBar")
const bottomBar = document.getElementById("bottomBar")
const mainCancleButtonContainer = document.getElementById("mainCancleButtonContainer")
const back = document.getElementById("back")
const restart = document.getElementById("restart")
let imagesLoaded = 0;
let selectedMasks = [];
//MAPPING ALL FILTERS TO DOM
metaData.map((filter) => {
    return (
        document.getElementById('filters').innerHTML += `
        <div id="${filter.id}" class="filter" onClick="handleClickOnFilter(${filter.id})" >
            <img class="filterImage" src="${filter.img}" alt="${filter.form}">
           <div class="filterName"> ${filter.form.toUpperCase()} </div>
        </div>
    `
    )
})

const filtersImages = document.getElementsByClassName("filterImage");

const onImageLoad = () => {
    console.log("loaded")
    imagesLoaded++;

    if (imagesLoaded === filtersImages.length) {
        document.getElementById("loading").style.display = "none";
        document.getElementById("filters").style.display = "flex";
    }
    else {
        document.getElementById("loading").style.display = "flex";
        document.getElementById("filters").style.display = "none";
    }
};

for (const image of filtersImages) {
    image.addEventListener("load", onImageLoad);
}

//FILTER CLICKED
const handleClickOnFilter = (filter) => {
    if (filter.id == "filter1") {
        handleFilterChange(filter);
    }
    else if (filter.id == "filter2") {
        handleFilterChange(filter);
    }
    else if (filter.id == "filter3") {
        handleFilterChange(filter);
    }
    else if (filter.id == "filter4") {
        handleFilterChange(filter);
    }
    else if (filter.id == "filter5") {
        handleFilterChange(filter);
    }
    else if (filter.id == "filter6") {
        handleFilterChange(filter);
    }
}

//FILTER CHANGE HANDLER
const handleFilterChange = (filterClicked) => {
    if (filterClicked.classList.contains("selectedFilter")) { //UNSELECTIONG FILTER AND HIDIING POPUP IF FILTER IS ALREADY SELECTED
        filterClicked.classList.remove("selectedFilter"); //REMOVING SELECTED FILTER CLASS
        selectedFilter = null; //SETTING SELECTED FILTER TO NULL
        filterFrequency = null; //SETTING FILTER FREQUENCY TO NULL
        mask = null
        message.style.display = "block"; //SHOWING MESSAGE
        mainCancleButtonContainer.style.display = "flex" //SHOWING MAIN CANCLE BUTTON
        popUp.style.display = "none" //HIDING POPUP
        window.innerWidth > 600 ? bottomBar.style.height = '200px' : bottomBar.style.height = '250px'; //MAKE BACKGROUND LESS DARK
        window.innerWidth > 600 ? topBar.style.height = '150px' : topBar.style.height = '250px'; //MAKE BACKGROUND LESS DARK
        selectedMasks = []
    }
    else {  //SELETING FILTER AND SHOWING POPUP  IF NO FILTER IS SELECTED
        message.style.display = "none"; //HIDING MESSAGE
        filterClicked.classList.add("selectedFilter"); //ADDING SELECTED FILTER CLASS
        selectedFilter = document.getElementById(filterClicked.id); //SETTING SELECTED FILTER
        filterFrequency = metaData.filter((filter) => filter.id == filterClicked.id)[0].frequency; //SETTING FILTER FREQUENCY
        // mask = metaData.filter((filter) => filter.id == filterClicked.id)[0].mask
        // 
        selectedMasks = metaData.filter((filter) => filter.id == filterClicked.id)[0].masks
        changeFilterMask(selectedMasks[0])
        changeDescription(filterClicked.id) //CHANGING POPUP DATA

        for (let i = 1; i < metaData.length + 1; i++) {   //REMOVING SELECTED CLASS FROM OTHER FILTERS 
            if (document.getElementById(`filter${i}`).id != filterClicked.id) {
                document.getElementById(`filter${i}`).classList.remove("selectedFilter");
            }
        }
    }
}

//CHANGING POPUP DATA ON FILTER CLICK
const changeDescription = (filterId) => {
    popUp.style.display = "flex"; //SHOWING POPUP
    let filter = metaData.filter((filter) => filter.id == filterId); //FILTERING FILTER DATA
    title.innerHTML = filter[0].form; //CHANGING TITLE
    description.innerHTML = filter[0].description; //CHANGING DESCRIPTION
    descriptonImage.src = filter[0].descriptonImage; //CHANGING IMAGE
    headText.innerHTML = filter[0].headText; //CHANGING HEAD TEXT
    mainCancleButtonContainer.style.display = "none" //HIDING MAIN CANCLE BUTTON`
    bottomBar.style.height = '50vh'; //
    topBar.style.height = '50vh';
}

/////////////////////////////// POPUP CLICKS  ///////////////////////////////

//START DANCE BUTTON TO START RECORDING
startDanceButton.addEventListener('click', () => {
    mainCancleButtonContainer.style.display = "flex" //HIDE CANCLE BUTTON
    filtersRow.style.display = "none"; //HIDE FILTERS
    popUp.style.display = "none"; //HIDE POP-UP
    recordButtonContainer.style.display = "flex"; //SHOW RECORD BUTTON
    stopButtonContainer.style.display = "none"; //HIDE STOP BUTTON
    window.innerWidth > 600 ? bottomBar.style.height = '200px' : bottomBar.style.height = '250px'; //MAKE BACKGROUND LESS DARK
    window.innerWidth > 600 ? topBar.style.height = '150px' : topBar.style.height = '250px'; //MAKE BACKGROUND LESS DARK

});

//CANCEL BUTTON TO HIDE POP-UP AND SHOW FILTERS AND UNSELECT FILTER
cancleButton.addEventListener('click', () => {
    mainCancleButtonContainer.style.display = "flex" //SHOW CANCLE BUTTON
    popUp.style.display = "none"; //HIDE POP-UP
    recordButtonContainer.style.display = "none"; //HIDE RECORD BUTTON
    stopButtonContainer.style.display = "none"; //HIDE STOP BUTTON
    selectedFilter.classList.remove("selectedFilter");   //UNSELECT FILTER
    message.style.display = "block" //SHOW MESSAGE
    selectedFilter = null; //UNSELECT FILTER
    mask = null
    selectedMasks = []
    changeFilterMask(mask)
    window.innerWidth > 600 ? bottomBar.style.height = '200px' : bottomBar.style.height = '250px'; //MAKE BACKGROUND LESS DARK
    window.innerWidth > 600 ? topBar.style.height = '150px' : topBar.style.height = '250px'; //MAKE BACKGROUND LESS DARK
});

////////////////////  RECCORD BUTTON CLICKS //////////////////////

//RECORD BUTTON CLICKED
recordButton.addEventListener('click', async () => {
    recordButtonContainer.style.display = "none"; //HIDING RECORD BUTTON
    stopButtonContainer.style.display = "flex";//SHOWING STOP BUTTON
    mimicContainer.style.display = "flex"; //SHOWING MIMIC IMAGE
    mainCancleButtonContainer.style.display = "none" //HIDING CANCLE BUTTON
    audio.play() //AUDIO PLAYING ON TIMER START
    await changeMimicImage(0, filterFrequency[0] * 1) //CALLING CHANGE MIMIC IMAGE FUNCTION TO CHANGE MIMIC IMAGE AND CAPTURE IMAGE
});

const changeMimicImage = async (length, time) => { //CHNAGING MIMIC IMAGE AND CAPTURING IMAGE 
    timerText.innerHTML = `${time}S`; //CHANGING TIMER TEXT

    if (length == filterFrequency.length) { //IF ALL IMAGES ARE CAPTURED
        generateVideoBody.style.display = "flex" //SHOWING GENERATING VIDEO BODY
        cameraBody.style.display = "none" //HIDING CAMERA BODY
        audio.pause() //AUDIO PAUSING ON TIMER END
        await removeBackground(finalPictures, 0) //CALLING REMOVE BACKGROUND FUNCTION TO REMOVE BACKGROUND FROM IMAGES //CALLING FILE CHANGE FUNCTION TO GENERATE VIDEO
        return 0
    }
    else {
        document.getElementById('shutter').style.display = 'flex';
        await changeFilterMask(selectedMasks[length])
        setTimeout(() => {
            document.getElementById('shutter').style.display = 'none';
        }, 300)

        mimicImage.src = mimicImages[length]  //CHANGING MIMIC IMAGE
        mimicImage.onload = function () {  //STARTING TIME FOR CLICKING IMAGE AS IMAGE IS LOADED
            capturing.style.display = "none"; //HIDING CAPTURING TEXT
            mimicContainer.style.display = "flex"; //SHOWING MIMIC IMAGE

            let interval = setInterval(() => { //TIMER FOR CLICKING IMAGE BASED ON FILTER FREQUENCY
                if (time == 0) {
                    clearInterval(interval);
                    mimicContainer.style.display = "none"; //HIDING MIMIC IMAGE
                    capturing.style.display = "flex"; //SHOWING CAPTURING TEXT
                    takepicture(videoElement, selectedMasks[length]) //CAPTURING IMAGE
                    setTimeout(async () => {// WAITING FOR 1 SEC TO CHANGE MIMIC IMAGE
                        length++
                        changeMimicImage(length, filterFrequency[length] * 1) //CALLING FUNCTION TO CHANGE MIMIC IMAGE
                    }, 1000)
                } else {
                    timerText.innerHTML = `${time}S`; //CHANGING TIMER TEXT
                    time--;
                }
            }, 1000);
        }
    }
}

//VIDEO RECORDING 
const fileChange = async (input) => {
    const fileList = input.map(src => { //CONVERTING IMAGE SRC TO FILE
        return {
            file: {},
            name: "image",
            src
        }
    })
    audio.play()
    audio.currentTime = 0
    audio.volume = 0.001
    // audio.muted = true
   setTimeout(async () => {
    videoCanvas = await startRecord(document.getElementById('videoCanvas'), fileList) //CALLING VIDEO RECORDING FUNCTION
    document.getElementById('myVideo').src = videoCanvas?.src //SETTING VIDEO SRC
    generateVideoBody.style.display = "none" //HIDING GENERATE VIDEO BODY
    audio.pause()
    downloadVideoSection.style.display = "flex" //SHOWING DOWNLOAD VIDEO SECTION
    document.getElementById('myVideo').style.display = `block` //SHOWING VIDEO
   }, 3000)
}

/////////////////  DOWNLOAD VIDEO BUTTON CLICKED ////////////////
downloadVidButton.addEventListener('click', () => {
    if (!video) return
    downloadVideo({ name: videoCanvas.name, blob: videoCanvas.blob }) //CALLING DOWNLOAD VIDEO FUNCTION
})


mainCancleButtonContainer.addEventListener('click', () => { //CANCLE BUTTON CLICKED
    if (selectedFilter) { //IF FILTER IS SELECTED THEN SHOW FILTERS AND UNSELECT FILTER
        filtersRow.style.display = "flex"
        recordButtonContainer.style.display = "none"
        message.style.display = "block"
        selectedFilter = null
        for (let i = 1; i < metaData.length + 1; i++) {
            document.getElementById(`filter${i}`).classList.remove("selectedFilter");
        }
    } else { //IF FILTER IS NOT SELECTED THEN GO TO HOME PAGE
        window.location.href = "/"
    }
})

stopButton.addEventListener('click', () => { //STOP RECORDING AND GO TO HOME PAGE
    window.location.reload();
})

restart.addEventListener('click', () => {  //RESTART RECORDING
    window.location.reload();
})

back.addEventListener('click', () => { //GO TO HOME PAGE
    window.location.href = "/"
})
