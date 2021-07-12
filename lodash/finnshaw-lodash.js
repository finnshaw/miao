var finnshaw = function () {
  //chunk
  function chunk(arr, size) {
    let res = []
    let chunkArr = []
    for (let i = 1; i <= arr.length; i++) {
      chunkArr.push(arr[i - 1])
      if (i % size === 0) {
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
  function compact(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++) {
      let e = arr[i]
      if(e !== 0 && e !== null && e !== false && e !== '' && e !== undefined && (e == e)) {
        res.push(e)
      }
    }
    return res
  }

  //uniq
  function uniq(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++) {
      let e = arr[i]
      let l = res.length - 1
      let isRepeat = false
      while(l >= 0) {
        if(e === res[l]) {
          isRepeat = true
          break
        } else {
          l--
        }
      }
      if(!isRepeat) {
        res.push(e)
      }
    }
    return res
  }

  //flatenDeep
  function flatenDeep(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++) {
      let e = arr[i]
      if(Array.isArray(e)) {
        e = flatenDeep(e)
        for(let j = 0; j < e.length; j++) {
          res.push(e[j])
        }
      } else {
        res.push(e)
      }
    }
    return res
  }




  return {
    chunk: chunk,
    compact: compact,
    uniq: uniq,
    flatenDeep: flatenDeep,
  }
}()
