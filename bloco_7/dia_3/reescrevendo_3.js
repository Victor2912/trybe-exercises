const assert = require('assert');

const greaterThanTen = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
const output = greaterThanTen(parameter);

assert.deepStrictEqual(output, result);