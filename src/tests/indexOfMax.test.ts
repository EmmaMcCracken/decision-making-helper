import indexOfMax from "../utils/indexOfMax";

describe("indexOfMax function", () => {
  test("it should give the index of the maximum element in an array, if it exists", () => {
    expect(indexOfMax([10, -100, 80, 40])).toEqual(2);
  });
  test("it should give -1 if there is more than one maximum", () => {
    expect(indexOfMax([10, 7, 10])).toEqual(-1);
  });
});
