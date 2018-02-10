const Option = require("../");

describe("Object test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
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
});
