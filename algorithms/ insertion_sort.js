/**
 * Insertion sort
 * Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
 * we just move item left while it is not at right position is sorted sequence
 * ex.: [4, 5, 1] - 4 and 5 are in the right position, but 1 should be before 4
 * so we just move 1 and get [4, 1, 5]; and then again move 1 and get [1, 4, 5]
 * @param {Array} array - array to sort
 * @returns new sorted array
 */
function insertionSort(array) {
  // create array copy for not change the argument array
  const arrayCopy = [...array]
  for (let i = 0; i < arrayCopy.length; i++) {
    // point to current element
    let current = arrayCopy[i];
    // prev element index
    let j = i - 1;
    // if index is less then 0 - we have checked all items
    if (j >= 0) {
      // while prev element is less then current
      // we need to insert current before left element
      // so we move all items that are larger then current to the right
      while (arrayCopy[j] > current) {
        arrayCopy[j + 1] = arrayCopy[j];
        j--;
      }
      // place current value to its place
      arrayCopy[j + 1] = current;
    }
  }
}