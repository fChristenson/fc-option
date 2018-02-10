/**
 * $get
 * 
 * Ending function that will check if previous _savedProp is a function
 * and call said function with provided arguments list.
 * If _savedProp is any other value _savedProp will be returned as is.
 * 
 * @returns Any
 */
module.exports = function() {
  if (this._savedNonObject) return this._savedNonObject;

  if (typeof this._savedProp === "function") {
    return this._savedProp.apply(this._anyVal, arguments);
  }

  return this._savedProp;
};
