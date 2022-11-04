/**
 * Divide the array until we reach last element in the array, an array with one element is considered sorted array.
 * Then we need to work on merging the array but we need to compare if the value are sorted or not
 * we divide the array in left and right,
 */

// Simply work on merging the elements to form a sorted array
const merge = (leftArray, rightArray) => {
  let tempArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      tempArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      tempArray.push(rightArray[0]);
      rightArray.shift();
    }
  }

  return [...tempArray, ...leftArray, ...rightArray];
};

//Mainly work on split the array to its last element
const mergeSort = (unSortedArray) => {
  if (unSortedArray.length < 2) return unSortedArray; // return if the array has only one element
  let divideArray = Math.floor(unSortedArray.length / 2);
  let leftArray = unSortedArray.slice(0, divideArray);
  let rightArray = unSortedArray.slice(divideArray);
  // once we have split array to last element , we need to merge it up
  console.log({ leftArray, rightArray });
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

console.log(mergeSort([-6, 20, 8, 4, -2]));
