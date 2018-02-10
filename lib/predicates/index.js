const isNull = val => {
  return val === null;
};

const isObject = val => {
  return typeof val === "object" && !Array.isArray(val);
};

module.exports.isObject = isObject;

const isUndefined = val => {
  return val === undefined;
};

module.exports.isUndefined = isUndefined;

const isDefined = val => {
  return !isNull(val) && !isUndefined(val);
};

module.exports.isDefined = isDefined;

const isNotDefined = val => {
  return !isDefined(val);
};

module.exports.isNotDefined = isNotDefined;

const is$get = str => {
  return str === "$get";
};

module.exports.is$get = is$get;

const is$else = str => {
  return str === "$else";
};

module.exports.is$else = is$else;

const isReturnUndefinedPropertyArrayCommand = val => {
  return val === "$undefined";
};

module.exports.isReturnUndefinedPropertyArrayCommand = isReturnUndefinedPropertyArrayCommand;

const isArrayOrObject = val => {
  return Array.isArray(val) || isObject(val);
};

module.exports.isArrayOrObject = isArrayOrObject;

const isNotArrayOrObject = val => {
  return !isArrayOrObject(val);
};

module.exports.isNotArrayOrObject = isNotArrayOrObject;
