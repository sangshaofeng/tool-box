/**
 * 图片压缩
 */
export function ImageCompress(file) {
  return new Promise(resolve => {
    // 将图片文件转成base64格式
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
      let result = this.result
      let img = new Image()
      img.src = result
      img.onload = () => {
        let data = Compress(img)
        let blob = DataURItoBlob(data)
        resolve(blob)
      }
    }
  })
}

/**
 * canvas压缩
 * 辅助函数
 */
export function Compress(img) {
  let canvas = document.createElement("canvas")
  let ctx = canvas.getContext("2d")
  let width = img.width
  let height = img.height
  canvas.width = width;
  canvas.height = height
  // 铺底色
  ctx.fillStyle = "#fff"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(img, 0, 0, width, height)

  //进行最小压缩
  let ndata = canvas.toDataURL("image/jpeg", 0.1)
  return ndata
}

/**
 * base64转成blob对象
 * 辅助函数
 * @param {*} base64Data
 */
export function DataURItoBlob(base64Data) {
  var byteString
  if (base64Data.split(",")[0].indexOf("base64") >= 0) {
    byteString = atob(base64Data.split(",")[1])
  } else {
    byteString = unescape(base64Data.split(",")[1])
  }
  var mimeString = base64Data.split(",")[0].split(":")[1].split(";")[0]
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ia], { type: mimeString })
}
