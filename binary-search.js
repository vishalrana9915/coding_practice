/**
 * Searching for an element in an sorted array using the famous binary search algo
 * Time complexity is O(log(n))
 * If an element exist in an array
 */

const binarySearch = (array, element) => {
  let min = 0;
  let max = array.length - 1;

  let index = -1;
  while (index == -1) {
    if (array[max] === element) {
      index = max;
    } else {
      let mid = Math.floor((min + max) / 2);
      if (array[mid] > element) {
        max = mid;
      } else if (array[mid] < element) {
        min = mid;
      } else {
        index = mid;
      }
    }
  }

  return index;
};

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5)
);
