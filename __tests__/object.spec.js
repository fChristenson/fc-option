const Option = require("../");

describe("object test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  it("can access a property one level deep", () => {
    const test = {
      foo: 1
    };
    const expected = 1;
    const actual = new Option(test).foo.$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined if level one property is not on object", () => {
    const test = {};
    const expected = undefined;
    const actual = new Option(test).foo.$get();
    expect(actual).toEqual(expected);
  });

  it("can access a property two levels deep", () => {
    const test = {
      foo: {
        bar: 1
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.bar.$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined if level two property is not on object", () => {
    const test = {};
    const expected = undefined;
    const actual = new Option(test).foo.bar.$get();
    expect(actual).toEqual(expected);
  });

  it("can access a property three levels deep", () => {
    const test = {
      foo: {
        bar: {
          baz: 1
        }
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.bar.baz.$get();
    expect(actual).toEqual(expected);
  });

  it("returns undefined if level three property is not on object", () => {
    const test = {};
    const expected = undefined;
    const actual = new Option(test).foo.bar.baz.$get();
    expect(actual).toEqual(expected);
  });
});

describe("function calls", () => {
  it("can call es5 function one level deep without parameters", () => {
    const test = {
      foo: function() {
        return 1;
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.$get();
    expect(actual).toEqual(expected);
  });

  it("can call es5 function two levels deep without parameters", () => {
    const test = {
      foo: {
        bar: function() {
          return 1;
        }
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.bar.$get();
    expect(actual).toEqual(expected);
  });

  it("can call es5 function three levels deep without parameters", () => {
    const test = {
      foo: {
        bar: {
          baz: function() {
            return 1;
          }
        }
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.bar.baz.$get();
    expect(actual).toEqual(expected);
  });

  it("can call es5 function one level deep with one parameter", () => {
    const test = {
      foo: function(a) {
        return a;
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.$get(1);
    expect(actual).toEqual(expected);
  });

  it("can call es5 function one level deep with two parameters", () => {
    const test = {
      foo: function(a, b) {
        return a + b;
      }
    };
    const expected = 2;
    const actual = new Option(test).foo.$get(1, 1);
    expect(actual).toEqual(expected);
  });

  it("can call es5 function one level deep with 'this' keyword", () => {
    const test = {
      val: 1,
      foo: function(a, b) {
        return a + b + this.val;
      }
    };
    const expected = 3;
    const actual = new Option(test).foo.$get(1, 1);
    expect(actual).toEqual(expected);
  });

  it("can call es5 function two level deep with 'this' keyword", () => {
    const test = {
      val: 1,
      foo: {
        bar: function(a, b) {
          return a + b + this.val;
        }
      }
    };
    const expected = 3;
    const actual = new Option(test).foo.bar.$get(1, 1);
    expect(actual).toEqual(expected);
  });

  it("can call and set es5 function one level deep with 'this' keyword", () => {
    const test = {
      val: 1,
      foo: function(a, b) {
        this.val = a + b;
      }
    };
    const actual = new Option(test).foo.$get(1, 1);
    expect(actual).toEqual(undefined);
    expect(test.val).toEqual(2);
  });

  it("can call and set es5 function two levels deep with 'this' keyword", () => {
    const test = {
      val: 1,
      foo: {
        bar: function(a, b) {
          this.val = a + b;
        }
      }
    };
    const actual = new Option(test).foo.bar.$get(1, 1);
    expect(actual).toEqual(undefined);
    expect(test.val).toEqual(2);
  });

  it("can call and set es5 function three levels deep with 'this' keyword", () => {
    const test = {
      val: 1,
      foo: {
        bar: {
          baz: function(a, b) {
            this.val = a + b;
          }
        }
      }
    };
    const actual = new Option(test).foo.bar.baz.$get(1, 1);
    expect(actual).toEqual(undefined);
    expect(test.val).toEqual(2);
  });

  it("can call es5 function three level deep with 'this' keyword", () => {
    const test = {
      val: 1,
      foo: {
        bar: {
          baz: function(a, b) {
            return a + b + this.val;
          }
        }
      }
    };
    const expected = 3;
    const actual = new Option(test).foo.bar.baz.$get(1, 1);
    expect(actual).toEqual(expected);
  });

  it("can call es6 function one level deep without parameters", () => {
    const test = {
      foo: () => {
        return 1;
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.$get();
    expect(actual).toEqual(expected);
  });

  it("can call es6 function two levels deep without parameters", () => {
    const test = {
      foo: {
        bar: () => {
          return 1;
        }
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.bar.$get();
    expect(actual).toEqual(expected);
  });

  it("can call es6 function three levels deep without parameters", () => {
    const test = {
      foo: {
        bar: {
          baz: () => {
            return 1;
          }
        }
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.bar.baz.$get();
    expect(actual).toEqual(expected);
  });

  it("can call es6 function one level deep with one parameter", () => {
    const test = {
      foo: a => {
        return a;
      }
    };
    const expected = 1;
    const actual = new Option(test).foo.$get(1);
    expect(actual).toEqual(expected);
  });

  it("can call es6 function one level deep with two parameters", () => {
    const test = {
      foo: (a, b) => {
        return a + b;
      }
    };
    const expected = 2;
    const actual = new Option(test).foo.$get(1, 1);
    expect(actual).toEqual(expected);
  });
});
