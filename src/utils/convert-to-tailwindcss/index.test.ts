import { convertToTailwindcss } from "./index";

describe("ConvertToTailwindcss", () => {
  it("FontSize", () => {
    const result = convertToTailwindcss({
      fontSize: "14px",
    });
    expect(result.className).toBe("text-[14px]");
  });
  it("Padding", () => {
    const result = convertToTailwindcss({
      padding: "14px",
      paddingTop: "14px",
      paddingBottom: "14px",
      paddingLeft: "14px",
      paddingRight: "14px",
    });
    expect(result.className).toMatch("p-[14px]");
    expect(result.className).toMatch("pt-[14px]");
    expect(result.className).toMatch("pb-[14px]");
    expect(result.className).toMatch("pl-[14px]");
    expect(result.className).toMatch("pr-[14px]");
  });
  // it("BackgroundPosition");
  // it("BackgroundSize");
  // it('fontFamily')
});
