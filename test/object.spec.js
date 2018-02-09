const Option = require("../");

describe("Object test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  describe("Number access", () => {
    it("can access a number property one level deep", () => {
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

    it("can access a number property two levels deep", () => {
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

    it("can access a number property three levels deep", () => {
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
});
