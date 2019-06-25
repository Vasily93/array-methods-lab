// [red, green, blue, yellow]
// color => color.toUpperCase()
function map(arr, callback) {
    const mapped = [];
    for(let i = 0; i < arr.length; i++) {
      // mapped = ['RED', 'GREEN', 'BLUE', 'YELLOW']
      // arr[3] = 'yellow'
      // 'yellow'.toUpperCase();
      mapped[i] = callback(arr[i]);
    }
    return mapped;
  }
  
  // [1, 2, 3, 4]
  // number => number % 2 === 0
  function filter(arr, callback) {
    const filtered = [];
    // i is 3
    // filtered is [2]
    for(let i = 0; i < arr.length; i++) {
      // callback(arr[3]) is true
      if(callback(arr[i])) {
        // filtered[1] = arr[3]
        filtered[filtered.length] = arr[i];
      }
    }
    return filtered;
  }

  function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) return i;
    }
    return -1;
    }

    function reduce(arr, callback, initialValue) {
        let acc = initialValue;
        for(let i = 0; i < arr.length; i++) {
            acc = callback(acc, arr[i]);
        }
        return acc;
    }

  
  module.exports = {
    map,
    filter,
    findIndex,
    reduce
  };
  