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
  // checking if array is not empty
  if (!unSortedArray.length) return [];
  // selecting the pivit from the array
  let pivotElement = unSortedArray[unSortedArray.length - 1];
  // array to store lesser values
  let leftArray = [];
  // array to store greater values
  let rightArray = [];
  //iterating through length-2 elements
  for (let i = 0; i < unSortedArray.length - 1; i++) {
    if (unSortedArray[i] < pivotElement) {
      leftArray.push(unSortedArray[i]);
    } else {
      rightArray.push(unSortedArray[i]);
    }
  }

  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
};

console.log(quickSort([-6, 20, 8, 4, -2]));

/**
 * Checking if the array is empty or not, if it is empty then return
 * Selecting a pivot element, in our case it is the last element in the array
 * Initialise an empty left array variable(to store less values) and right array variable(to store greater values).
 * Initializing a loop to the length-1 of the array, so that we can compare element if they are less than or greater than the pivot
 * Inside the loop, check if current value is less or greater than pivot, if less than put in left array else in right array.
 * So now, we have left array(that has less value), we have pivot that is the middle (as it is greater than less values and less than greater values)
 * We need to use the recursion to call the function , until we reach empty array and return the output
 */
