import { validateUrl } from "../src/client/js/urlValidator";

describe("Testing the submit functionality", () => {
  test("Testing the validateUrl() function", () => {
    expect(validateUrl).toBeDefined();
  });

  test("Testing the validateUrl function with Url", () => {
    expect(validateUrl("https://github.com/")).toBe(true);
  });

  test("Testing the validateUrl function with Non-Url", () => {
    expect(validateUrl("xyz")).toBe(false);
  });
});
