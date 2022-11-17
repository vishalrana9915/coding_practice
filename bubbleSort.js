/**
 * Bubble sort algo to sort an array
 * O(n2)
 */

const bubbleSort = (array) => {
  // Starting an initial loop from the last element and with each iteration eliminating the last element
  for (let i = array.length; i > 0; i--) {
    // starting a loop to run from start till the end of upper loop limit
    for (let j = 0; j < i - 1; j++) {
      // comparing if the value is greater than the next element
      if (array[j] > array[j + 1]) {
        // swapping the values.
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  // returning the sorted array
  return array;
};

console.log(bubbleSort([16, 12, 3, 4, 5, 6, 7, 2, 9, 10, 11, 12, 13, 14, 15]));
