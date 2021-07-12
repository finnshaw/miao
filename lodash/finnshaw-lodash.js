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

  //concat
  function concat(arr, vals) {
    let res = arr.slice()
    for(let i = 1; i < arguments.length; i++) {
      let item = arguments[i]
      if(Array.isArray(item)) {
        res.push(...item)
      } else {
        res.push(item)
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

  //flatten
  function flatten(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++) {
      let e = arr[i]
      if(Array.isArray(e)) {
        for(let j = 0; j < e.length; j++) {
          res.push(e[j])
        }
      } else {
        res.push(e)
      }
    }
    return res
  }
  //flattenDeep
  function flattenDeep(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++) {
      let e = arr[i]
      if(Array.isArray(e)) {
        e = flattenDeep(e)
        for(let j = 0; j < e.length; j++) {
          res.push(e[j])
        }
      } else {
        res.push(e)
      }
    }
    return res
  }
  //flattenDepth
  function flattenDepth(arr, depth = 1) {
    if(depth === 0) {
      return arr.slice()
    } 
    let res = []
    for(let i = 0; i < arr.length; i++) {
      let e = arr[i]
      if(Array.isArray(e)) {
        e = flattenDepth(e, depth - 1)
        for(let j = 0; j < e.length; j++) {
          res.push(e[j])
        }
      } else {
        res.push(e)
      }
    }
    return res
  }

   //forEach
   function forEach(coll, action) {
    for(let key in coll) {
      action(coll[key], key)
    }
    return coll
  }

  //map
  function map(coll, f) {
    let mapped = []
    if(typeof f === 'function') {
      forEach(coll, (item, key) => {
        mapped.push(f(item))
      })
    } else {
      forEach(coll,(item, key) => {
        mapped.push(item)
      })
    }
    return mapped
  }



  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    uniq: uniq,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    forEach: forEach,
    map: map,
  }
}()
