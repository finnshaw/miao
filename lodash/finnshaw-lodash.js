var finnshaw = function () {
  //chunk
  function chunk(arr, size) {
    let res = []
    let chunkArr = []
    for (let i = 1; i <= arr.length; i++) {
      chunkArr.push(arr[i - 1])
      if (i % (size) === 0) {
        res.push(chunkArr)
        chunkArr = []
      }
    }
    if(chunkArr.length) {
      res.push(chunkArr)
    }
    return res
  }
  //compact


  return {
    chunk: chunk,
  }
}()
