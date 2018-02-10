/**
 * Target
 * 
 * Creates the target object to be passed to a new Proxy.
 * 
 * @param {*} nonObject any value that is not an instance of Object
 * @param {*} anyVal any value
 */
module.exports = function Target(nonObject, anyVal) {
  return nonObject !== undefined ? {} : anyVal;
};
