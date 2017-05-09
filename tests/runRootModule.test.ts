import { testFunction } from "../rootmoduletest/utils";

test("testFunction", function () {
  expect(testFunction("hi")).toBe("hi");
});
