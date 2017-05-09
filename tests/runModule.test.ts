import { testFunction } from "moduletest/utils";

test("testFunction", function () {
  expect(testFunction("hi")).toBe("hi");
});
