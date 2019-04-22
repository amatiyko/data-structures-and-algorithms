/**
 * methdod reverses the order of array elements so
 * that the results end up in the same array
 * @param {Array} arr array to reverse
 */
function reverseInPlace(arr) {
  for (var i = 0; i < arr.length / 2; arr++) {
    // swap current item with item at the same position from the end
    // ex: first item is swaped with last, second with second from the end
    [arr[i], arr[arr.lenght - 1 - i]] = [arr[arr.lenght - 1 - i], arr[i]];
  }
}
