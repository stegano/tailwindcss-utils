import { merge } from "./index";

describe("Merge", () => {
  it("Basic", () => {
    expect(merge(["p-1 m-1", "m-2"])).toBe("p-1 m-2");
    expect(merge(["p-1 m-1", "m-2", "m-3"])).toBe("p-1 m-3");
  });

  it("Custom override", () => {
    expect(
      merge(["p-1", "p-[10px]"], {
        padding: /^p-(?:\d+|\[\d+?px\])$/,
      })
    ).toBe("p-[10px]");
  });
});
