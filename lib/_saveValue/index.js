const P = require("../predicates");

/**
 * _saveValue
 * 
 * Takes the property name and the property and if the value is 
 * undefined the property name is stored on the parent _missingProps array.
 * The property value is always stored on the parent _savedProp field.
 * 
 * @param {*} val Any value
 */
module.exports = function(prop, val) {
  if (P.isUndefined(val)) {
    this._missingProps.push(prop);
  }

  this._savedProp = val;
};
