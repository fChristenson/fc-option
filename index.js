const P = require("./lib/predicates");

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
    _savedProp: undefined,
    _anyVal: P.isNotDefined(anyVal) ? {} : anyVal,
    _missingProps: [],

    $get: function() {
      if (typeof this._savedProp !== "function") return this._savedProp;
      return this._savedProp.apply(this._anyVal, arguments);
    },

    _saveValue: function(val) {
      if (P.isUndefined(val)) {
        this._missingProps.push(val);
      }

      this._savedProp = val;
    },

    get: function(target, prop) {
      if (P.isEndOfPropertyChainCommand(prop)) {
        return this.$get.bind(target);
      }

      if (P.isReturnUndefinedPropertyArrayCommand(prop)) {
        return this._missingProps;
      }

      const val = target[prop];

      if (P.isObject(val)) {
        return new Proxy(val, this);
      }

      this._saveValue(val);

      return new Proxy(this, this);
    }
  };

  return new Proxy(handler._anyVal, handler);
};
