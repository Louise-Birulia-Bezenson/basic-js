const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  var lens = '';
      counter = 1;

  for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
          counter++;
      } else if(counter >1){
        lens+= counter+ str[i];
        counter = 1;
      }else{
        lens+=  str[i];
        counter = 1;
        }       
 }
  return lens;
}

module.exports = {
  encodeLine
};
