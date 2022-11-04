//  pivot
/**
 * You choose an pivot from the array and put less than values in left array and put greater value in right array
 * pivot element can be any
 * starting element
 * last element (let suppose if we go with this)
 * middle element
 * median of the array
 *
 *
 * NOTE: we need to use recussion to achieve this
 */

const quickSort = (unSortedArray) => {
  if (!unSortedArray.length) return [];
  let pivotElement = unSortedArray[unSortedArray.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < unSortedArray.length - 1; i++) {
    if (unSortedArray[i] < pivotElement) {
      leftArray.push(unSortedArray[i]);
    } else {
      rightArray.push(unSortedArray[i]);
    }
  }
  console.log({ leftArray, rightArray, pivotElement });
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
};

console.log(quickSort([-6, 20, 8, 4, -2]));
