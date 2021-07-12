var finnshaw = function () {

  function chunk(arr, size) {
    let res = []
    let chunkArr = []
    for (let i = 0; i < arr.length; i++) {
      chunkArr.push(arr[i])
      if (i % (size - 1) === 0) {
        res.push(chunkArr)
        chunkArr = []
      }
    }
    return res
  }


  return {

  }
}()
