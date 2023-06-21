// import something here
/**
 * picture to video
 */

const startRecord = (canvas, fileList) => {
    try {
      console.log('fvfgvbgfbfgbvfg', canvas, fileList);
      const intance = new ImagesToVideo(canvas, { fileList })
      return intance.startRecord()
    } catch (error) {
      console.log('startRecord error', error)
    } finally {
      console.log('startRecord finally')
    }
    return null
  }
  /**
   * download video
   */
  const downloadVideo = ({ name, blob }) => {
    try {
      if ('download' in document.createElement('a')) {
        getSeekableBlob(blob, function (seekableBlob) {
          console.log('fdvdfvfdvfd');
          const url = window.URL.createObjectURL(seekableBlob);
          const anchor = document.createElement('a')
          document.body.appendChild(anchor)
          anchor.style = 'display: none'
          anchor.href = url
          anchor.download = name
          anchor.click()
          window.URL.revokeObjectURL(url)
          document.body.removeChild(anchor)
        });
      } else {
        navigator.msSaveBlob(blob, name)
      }
    } catch (error) {
      console.log('downloadVideo error', error)
    } finally {
      console.log('downloadVideo finally')
    }
  }
  