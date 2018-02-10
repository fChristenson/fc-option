const P = require("./lib/predicates");
const $get = require("./lib/$get");
const _saveValue = require("./lib/_saveValue");

/**
 * Option is intended to wrap any value in a Proxy to
 * allow the caller to safely do an arbetrary amount of
 * property reads without risk of throwing an "is undefined error".
 * 
 * Proxy: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 * 
 * @param {Any} target Any value
 * @returns A Proxy instance with the provided value or an empty object
 * if the provided value is null or undefined.
 */
module.exports = function Option(anyVal) {
  const handler = {
    // private fields
    _savedProp: undefined,
    _anyVal: P.isNotDefined(anyVal) ? {} : anyVal,
    _missingProps: [],

    // ending function that executes property index chain
    $get,

    // function to store _savedProp and _missingProps
    _saveValue,

    get: function(target, prop) {
      if (P.isEndOfPropertyChainCommand(prop)) {
        return this.$get.bind(target);
      }

      if (P.isReturnUndefinedPropertyArrayCommand(prop)) {
        return this._missingProps;
      }

      const val = target[prop];

      if (P.isObject(val) || Array.isArray(val)) {
        return new Proxy(val, this);
      }

      this._saveValue(prop, val);

      return new Proxy(this, this);
    }
  };

  return new Proxy(handler._anyVal, handler);
};
