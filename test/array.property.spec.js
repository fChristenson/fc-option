const Option = require("../");

describe("Object test", () => {
  it("has a module", () => {
    expect(Option).toBeDefined();
  });

  describe("array property access", () => {
    it("can get an element from an array", () => {
      const test = [1];
      const expected = 1;
      const actual = new Option(test)[0].$get();
      expect(actual).toEqual(expected);
    });
  });
});
