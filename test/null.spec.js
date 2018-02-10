const Option = require("../");

describe("Object test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  describe("null", () => {
    it("returns undefined if passed null", () => {
      const test = null;
      const expected = undefined;
      const actual = new Option(test).foo.$get();
      expect(actual).toEqual(expected);
    });

    it("returns undefined if passed null with two level property read", () => {
      const test = null;
      const expected = undefined;
      const actual = new Option(test).foo.bar.$get();
      expect(actual).toEqual(expected);
    });

    it("returns undefined if passed null with three level property read", () => {
      const test = null;
      const expected = undefined;
      const actual = new Option(test).foo.bar.baz.$get();
      expect(actual).toEqual(expected);
    });
  });
});
