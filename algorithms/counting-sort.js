/**
 * sort array with counting sort algorithm
 * Counting sort algorithm works only with numbers;
 * @param {number[]} arr - array to sort
 * @returns {number[]} sorted array
 */
const countingSort = arr => {
  // example arr = [3, 1, 1, 5, 1, 2, 1]; 
  // Math.min() and Math.max() expect distinct variables and not an array.
  // in ES6 we can just use destructuring assignment
  // before ES6: Math.min.apply(Math, arr)
  const arrMinValue = Math.min(...arr);
  const arrMaxValue = Math.max(...arr);

  const countArray = [];
  const result = [];
  // fill countArray with 0 elements.
  // position of these elements in array are element of income arr
  for (let i = arrMinValue; i <= arrMaxValue; i++) {
    countArray[i] = 0;
  }

  // for each element in arr we count occurrences in initial array
  // and save this in count array under the key which is equal to item
  // for ex. - countArray[1] = 4 - because there four 1 items in example array
  for (let i = 0, length = arr.length; i < length; i++) {
    countArray[arr[i]]++;
  }

  // for each item in count array we add its key to result array the same amount of time as its key value;
  // in example for countArray[1] we will push 1 four times in result array
  // thus we will get sorted array^ because array keys are already sorted;
  for (let i = 0; i < arrMaxValue; i++) {
    while (countArray[i] > 0) {
      result.push(i);
      countArray[i]--;
    }
  }

  return result;
}