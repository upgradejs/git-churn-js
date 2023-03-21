import GitChurn from "@core/index";

describe("GitChurn", () => {
  it("should get churn by path", () => {
    const options = { directory: "." };
    const gitChurn = new GitChurn(options);
    expect(gitChurn.getByPath(".editorconfig").getValue()).toBe(1);
  });

  it("should get files", () => {
    const options = { directory: "." };
    const gitChurn = new GitChurn(options);
    expect(gitChurn.files).toContain("package.json");
    expect(gitChurn.files).toContain("tsconfig.json");
  });
});
