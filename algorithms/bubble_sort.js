/**
 * method sort elements in the array with bubble sort algorithm
 * Bubble Sort is the simplest sorting algorithm that works
 * by repeatedly swapping the adjacent elements if they are in wrong order.
 * @param {Array} arr - array to sort
 * @returns {Array} new sorted array
 */
function bubbleSort(array) {
  // in case not to modify the incoming array
  // spread the elements of the incoming array to new array
  const arr = [...array];
  // variable that shows if any of the array element are swapped between each other
  let elementsSwapped;

 // we need to repeat going through the array
 // while any pair of array element are swapping
  do {
    // set the elementsSwapped variable to false
    // to go out from the do/while cycle
    elementsSwapped = false;

    for (let i = 0; i < arr.length; i++) {
      // if there is next array element and it is less than current
      // them need to be swapped
      if (arr[i+1] && arr[i+1] < arr[i]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        // set the elementsSwapped variable to true to repeat cycle one more time
        elementsSwapped = true;
      }
    }
  } while(elementsSwapped);

  return arr;
}
