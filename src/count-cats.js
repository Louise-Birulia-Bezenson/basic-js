const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(martix) {
  let kat = 0;
  martix.forEach(element => {
    element.forEach(el=>{
      el === "^^"? kat++ : kat;
    })
  });
  return kat;
}

module.exports = {
  countCats
};
