/**
 * Sorting algo with starting from 1 element and comparing and swapping
 */

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let lastIndex = i - 1;

    while (lastIndex >= 0 && array[lastIndex] > currentElement) {
      array[lastIndex + 1] = array[lastIndex];
      lastIndex--;
    }
    array[lastIndex + 1] = currentElement;
  }

  return array;
};

console.log(
  insertionSort([16, 12, 3, 4, 5, 6, 7, 2, 9, 10, 11, 12, 13, 14, 15])
);
