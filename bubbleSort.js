/**
 * Bubble sort algo to sort an array
 * O(n2)
 */

const bubbleSort = (array) => {
  // comparing the adjacent element and swap them
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

console.log(bubbleSort([16, 12, 3, 4, 5, 6, 7, 2, 9, 10, 11, 12, 13, 14, 15]));
