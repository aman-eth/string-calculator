const { add } = require("./calculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number itself for single number input", () => {
  expect(add("5")).toBe(5);
});

test("returns sum of two comma separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns sum of multiple comma-separated numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("handles newlines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom single-character delimiter", () => {
  expect(add("//;\n1;2\n3")).toBe(6);
});

test("throws exception for negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow("negatives not allowed: -2,-4");
});

test("ignores numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
});

test("supports custom delimiter of any length", () => {
  expect(add("//[***]\n1***2***4")).toBe(7);
});
