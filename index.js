const P = require("./lib/predicates");
const Target = require("./lib/target");
const $get = require("./lib/$get");
const $else = require("./lib/$else");
const _saveValue = require("./lib/_saveValue");

/**
 * Option is intended to wrap any value in a Proxy to
 * allow the caller to safely do an arbitrary amount of
 * property reads without risk of throwing an "is undefined error".
 * 
 * Proxy: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 * 
 * @param {*} target Any value
 * @returns A Proxy instance with the provided value or an empty object
 * if the provided value is not an instance of Object.
 */
function Option(anyVal) {
  const handler = {
    // private fields
    _savedNonObject: P.isNotArrayOrObject(anyVal) ? anyVal : undefined,
    _savedProp: undefined,
    _anyVal: P.isNotDefined(anyVal) ? {} : anyVal,
    _missingProps: [],
    _stored$get: undefined,

    // ending function that gets the previous property
    // and can handle function input
    $get,

    // ending function that returns a default value
    $else,

    // function to store _savedProp and _missingProps
    _saveValue,

    get: function(target, prop) {
      if (P.is$get(prop) && this._savedNonObject) {
        return () => this.$get(this._savedNonObject);
      }

      if (P.is$get(prop)) {
        return this.$get.bind(target);
      }

      if (P.is$else(prop) && this._savedNonObject) {
        return () => this.$else(this._savedNonObject);
      }

      if (P.is$else(prop)) {
        return this.$else.bind(target);
      }

      if (P.isReturnUndefinedPropertyArrayCommand(prop)) {
        return this._missingProps;
      }

      const val = target[prop];
      this._saveValue(prop, val);

      if (P.isObject(val) || Array.isArray(val)) {
        return new Proxy(val, this);
      }

      return new Proxy(this, this);
    }
  };

  const target = new Target(handler._savedNonObject, handler._anyVal);
  return new Proxy(target, handler);
}

// alternative method to "new Option()"
Option.from = function(val) {
  return new Option(val);
};

//TODO: add pretty print inspect for Option

module.exports = Option;
