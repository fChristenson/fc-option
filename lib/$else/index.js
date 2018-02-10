const P = require("../predicates");

/**
 * $else
 * 
 * Ending function that must be called after $get.
 * $else will return the provided input if the previous property
 * is undefined.
 * 
 * @param {*} value Any value
 * @returns Any value
 */
module.exports = function(value) {
  const _savedNonObjectIsUndefined = P.isUndefined(this._savedNonObject);

  if (!_savedNonObjectIsUndefined) return this._savedNonObject;

  if (typeof this._savedProp === "function") {
    const result = this._savedProp.apply(this._anyVal, arguments);
    const resultIsUndefined = P.isUndefined(result);
    return resultIsUndefined ? value : result;
  }

  const _savedPropIsUndefined = P.isUndefined(this._savedProp);
  return _savedPropIsUndefined ? value : this._savedProp;
};
