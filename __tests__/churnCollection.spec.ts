import ChurnCollection from "@core/churnCollection";

describe("ChurnCollection", () => {
  it("should compute churns per files", () => {
    const history = ["/path/to/file1.js", "/path/to/file2.js", "/path/to/file1.js"];
    const options = { directory: "" };
    const churnCollection = new ChurnCollection(history, options);
    expect(churnCollection.getByPath("/path/to/file1.js").getValue()).toBe(2);
    expect(churnCollection.getByPath("/path/to/file2.js").getValue()).toBe(1);
  });
});
