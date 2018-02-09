module.exports = function Option(object) {
  const handler = {
    _savedProp: undefined,

    _missingProps: [],

    $get: function() {
      if (typeof this._savedProp !== "function") return this._savedProp;
      return this._savedProp.apply(object, arguments);
    },

    _isObject: function(prop) {
      return typeof prop === "object" && !Array.isArray(prop);
    },

    _hasMissingProp: function(prop) {
      return prop === undefined;
    },

    get: function(target, prop) {
      const val = target[prop];

      if (prop === "$get") return this.$get.bind(target);
      if (prop === "$undefined") return this._missingProps;
      if (this._hasMissingProp(val)) this._missingProps.push(prop);

      this._savedProp = val;

      if (this._isObject(val)) return new Proxy(val, this);

      return new Proxy(this, this);
    }
  };

  return new Proxy(object, handler);
};
