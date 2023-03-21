import Churn from "@core/churn";

describe("Churn", () => {
  it("should increment changes by 1", () => {
    const churn = new Churn("/path/to/file.js");
    churn.increment();
    expect(churn.getValue()).toBe(1);
  });
});
