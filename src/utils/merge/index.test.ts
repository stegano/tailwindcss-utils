import { merge } from "./index";

describe("Merge", () => {
  it("BaseRules", () => {
    expect(merge(["p-1 m-1 m-3"])).toBe("p-1 m-3");
    expect(merge(["p-1 m-1", "m-2"])).toBe("p-1 m-2");
    expect(merge(["p-1 m-1", "m-2", "m-3"])).toBe("p-1 m-3");
    expect(merge(["p-1 m-1", "m-[10px]"])).toBe("p-1 m-[10px]");
    expect(merge(["p-1 m-1", "-m-2"])).toBe("p-1 -m-2");
  });
  it("CustomRules", () => {
    const customRules = {
      p: /^p-(?:\d+?|\[\d+px\])$/,
    };
    expect(merge(["p-1", "p-[10px]"], customRules)).toBe("p-[10px]");
    expect(merge(["p-1", "p-5"], customRules)).toBe("p-5");
  });
});
