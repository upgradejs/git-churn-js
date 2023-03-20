import GitLog from "src/gitLog";

describe("GitLog", () => {
  it("should get history of files", () => {
    const options = { directory: "." };
    const gitLog = new GitLog(options);
    const history = gitLog.getHistory();
    expect(history).toContain("src/churn.ts");
    expect(history).toContain("src/churnCollection.ts");
    expect(history).toContain("src/churnCollection.ts");
    expect(history).toContain("src/gitLog.ts");
    expect(history).toContain("src/index.ts");

  });
});
