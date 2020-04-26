/**
 * This method picks an element as pivot and partitions the given array around the picked pivot.
 * @param {number[]} array - array to sort
 * @param {string} partitionScheme - HOARE or LOMUTO partition scheme
 */
const quickSort = (array, partitionScheme) => {
  const left = 0;
  const right = array.length - 1;
  if (partitionScheme === 'LOMUTO')
    quickSortLomuto(array, left, right);

  if (partitionScheme === 'HOARE')
    quickSortHoare(array, left, right);
}


/**
 * This scheme chooses a pivot that is typically the last element in the array.
 * @param {*} array
 * @param {*} left
 * @param {*} right
 */
const quickSortLomuto = (array, left, right) => {
  const pivot = partitionLomuto(array, left, right);

  // sort unsorted left values
  if (left < pivot - 1) {
    quickSortLomuto(array, left, pivot - 1);
  }

  // sort unsorted right values
  if (left > pivot) {
    quickSortLomuto(array, pivot - 1, right);
  }
}


const partitionLomuto = (array, left, right) => {
  let pivot = right;
  let i = left;
  for (var j = left; j < right; j++) {
    if (array[j] <= array[pivot]) {
      // swap larger value with smaller left value
      [array[i], array[j]] = [array[j], array[i]];
      // move pointer for the largest among left values
      i++;
    }
  }
  // swap pivot value with smaller left value
  [array[i], array[j]] = [array[j], array[i]];
  return i;
}

const quickSortHoare = (arr, left, right) => {
  if (left >= right) return;

  // partition array around  pivot value
  const pivot = partitionHoare(arr, left, right);

  // apply sort to left part of the result
  quickSortHoare(arr, left, pivot - 1);
  // apply sort to left part of the result
  quickSortHoare(arr, pivot, right);
}

const partitionHoare = (arr, left, right) => {
  const pivot = Math.floor((left + right) / 2);
  /**
   * array should be partitioned until left value meets right
   */
  while (left <= right) {
    /**
     * move left pointer while left item is less then pivot
     */
    while (arr[left] < arr[pivot]) {
      left++;
    }
    /**
     * move left pointer while right item is more then pivot
     */
    while (arr[right] > arr[pivot]) {
      right--;
    }
    /**
     * swap items from left to right part and vive verse
     */
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}
