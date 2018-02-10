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

const isEndOfPropertyChainCommand = str => {
  return str === "$get";
};

module.exports.isEndOfPropertyChainCommand = isEndOfPropertyChainCommand;

const isReturnUndefinedPropertyArrayCommand = val => {
  return val === "$undefined";
};

module.exports.isReturnUndefinedPropertyArrayCommand = isReturnUndefinedPropertyArrayCommand;
