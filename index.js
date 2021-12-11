const groupBy = (arr, key) => {
  if(!arr) {
    return new Error('Array is not provided')
  }
  if(!key) {
    return new Error('Key is not provided')
  }
  if(!Array.isArray(arr)) {
    return new Error('Is not array')
  }

  const resultObj = arr.reduce((acc, value) => {
    if(value[key]) {
      if(!acc[value[key]]){
        acc[value[key]] = [];
      }
      acc[value[key]].push(value);
    }
    return acc;
  }, {})

  if(!Object.keys(resultObj).length){
    return new Error('Provided key does not exist')
  }

  return resultObj
}

groupBy([
  { id: 1, universe: "marvel", name: "Spider Man" },
  { id: 2, universe: "marvel", name: "Iron Man" },
  { id: 3, universe: "dc", name: "Aqua Man" },
  { id: 4, universe: "dc", name: "Bat Man" },
  { id: 5, universe: "marvel", name: "Hulk" }
], 'universe')
