import Churn from "src/churn";

describe("Churn", () => {
  it("should increment changes by 1", () => {
    const churn = new Churn("/path/to/file.js");
    churn.increment();
    expect(churn.getValue()).toBe(1);
  });
});
