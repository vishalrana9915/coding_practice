/**
 * Function to sort an array using selection sort algo
 * @param {*} arr, array to sort
 * Worst case time complexity of O(n2)
 * Simply compare each i with every j and replacing the i with small from j
 * @returns Sorted array
 */
function selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest;
    let index;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        if (!lowest) {
          lowest = arr[j];
          index = j;
        } else if (arr[j] < lowest) {
          lowest = arr[j];
          index = j;
        }
      }
    }
    if (lowest) {
      let value = arr[i];
      arr[i] = lowest;
      arr[index] = value;
    }
  }

  return arr;
}

console.log(selection([64, 25, 12, 22, 11]));
console.log(selection([64, 25, 14, 21, 55, 101, 12, 22, 11]));
