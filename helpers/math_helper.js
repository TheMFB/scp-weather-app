
// TODO(MFB): Format and export these.
// Index.js contains the logic
// input.js exports the list of numbers.
// index should import the numbers from input.js

// Mean, median, mode should all be separate functions.
export const mean = (...numbers) => numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

/**
 * The "median" is the "middle" value in the list of numbers.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated median value from the specified numbers.
 */
export const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

/**
* The "mode" is the number that is repeated most often.
*
* For example, the "mode" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4].
*
* @param {Array} numbers An array of numbers.
* @return {Array} The mode of the specified numbers.
*/
export function mode(numbers) {
  // as result can be bimodal or multi-modal,
  // the returned result is provided as an array
  // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
  var modes = [], count = [], i, number, maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
      number = numbers[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
          maxIndex = count[number];
      }
  }

  for (i in count)
      if (count.hasOwnProperty(i)) {
          if (count[i] === maxIndex) {
              modes.push(Number(i));
          }
      }

  return modes;
}