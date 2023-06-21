
/**
 * images-to-video class
 * creater：qc
 * reference：1、https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
 * 2、https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
*/
class ImagesToVideo {
  // Canvas instance (DOM object)
  canvas = null // document.getElementById('myCanvas')
  // brush (rendering context)
  ctx = null

  // record media instance
  mediaRecord = null
  // store image stream container
  chunks = new Set()
  // poll the paint timer

  timer = null


  // configuration properties
  option = {
    intervals: 100, // video capture interval in milliseconds
    drawIntervals: filterFrequency, // Polling interval in milliseconds
    // Note that the object list of fileList has already been packaged and processed. It is not [Object File], but an object {file: file, name: file.name, src: URL.createObjectURL(file)}
    fileList: [], // List of selected local image objects
    fileDownload: { // Video download configuration
      fileType: `mp4`,
      fileName: `video`
    }
  }

  /**
   * Constructor
  */
  constructor(canvas, option = {}) {
    this.canvas = canvas
    this.canvas.width = w
    this.canvas.height = h
    this.ctx = canvas.getContext('2d')
    this.ctx.imageSmoothingEnabled = false;
    this.option = { ...this.option, ...option }
    console.log(" draw : " + this.option.drawIntervals)
    this.initMedia()
  }

  iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);


  /*  Initialize the recording media instance object  */
  initMedia() {
    console.log('initMedia start')
    // Get the canvasElement and set the frame rate (FPS)
    const videoTracks = this.canvas.captureStream(48).getVideoTracks();

    let audioTracks, mediaStream;

    if (this.iOS() && !this.chrome) {
      mediaStream = new MediaStream([videoTracks[0]]);
    } else {
      audioTracks = document.getElementById('audioElement').captureStream().getAudioTracks();
      mediaStream = new MediaStream([audioTracks[0], videoTracks[0]]);
    }

    // console.log('fdvdfvdfdddddvfsssdvfd', audioTracks, videoTracks);
    // audioElement.audioTrackList?.onaddtrack = (event) => {
    //   console.log('dfvfdvfdvfd', event);
    //   mediaStream.addTrack(event.track);
    // };
    // Core API, can record canvas, audio, video
    // PS: You can also record the browser screen, and you can get the screen content through MediaDevices.getDisplayMedia(), such as
    // const mediaStream = await navigator.mediaDevices.getDisplayMedia({video: true})
    this.mediaRecord = new MediaRecorder(mediaStream, {
      videoBitsPerSecond: 8500000
    })
    // Receive data
    this.mediaRecord.ondataavailable = (e) => {
      this.chunks.add(e.data)
    }
    console.log('initMedia end')
  }

  /**
   * draw the image to the canvas
  */
  async drawImage(file) {
    try {
      // console.log('drawImage file', file)
      const src = Object.prototype.toString.call(file) === '[object File]' ?
        URL.createObjectURL(file) : file.src
      // draw image stream
      await new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
          // this.ctx.drawImage(img, 0, 0, img.width, img.height)
          this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
          // resolve(true)
        }
        img.src = src
      })
    } catch (error) {
      console.log('drawImage error', error)
    } finally {
      console.log('drawImage finally')
    }
  }

  /**
     * Start recording the screen, call it in real time
    */
  async startRecord() {
    //The parameter is the crawl interval in milliseconds, the default is 100 milliseconds
    if (!this.iOS() || (this.iOS() && this.isChrome)) {
      const audioElement = document.getElementById('audioElement');
      audioElement.currentTime = 0;
    }
    this.mediaRecord && this.mediaRecord.start(this.option.intervals || 100)
    // poll drawing
    // let index = 0
    this.option.drawIntervals.push(1);

    this.option.fileList.push(this.option.fileList[this.option.fileList.length - 1]);

    this.timer && clearInterval(this.timer)
    return await new Promise((resolve) => {
      const file = this.option.fileList[0];
      this.drawImage(file);
      let totalInterval = 0;
      this.option.drawIntervals.map((interval, index) => {
        totalInterval += interval;
        // if(this.option.drawIntervals.length === index + 1) {
        //   totalInterval += 1;
        // }
        this.timer = setTimeout(() => {
          console.log(this.option.drawIntervals[index])
          const file = this.option.fileList[index + 1] || null
          file ? this.drawImage(file) : resolve(this.stopRecord())
        }, totalInterval * 1000)
      });
    })
  }

  /**
   * Stop recording the screen and return the video object
   * @returns Object {name, blob, src}
  */
  stopRecord() {
    this.timer && clearInterval(this.timer) 
    this.mediaRecord && this.mediaRecord.stop()
    const type = `${this.option.fileDownload.fileType || 'mp4'}`
    const name = `${this.option.fileDownload.fileName || 'video'}.${type}`
    const blob = new Blob(this.chunks, {
      type: `video/${type}`
    })
    const src = URL.createObjectURL(blob)
    return { name, blob, src }
  }
}
