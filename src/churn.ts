import { IChurn } from "./types";

class Churn implements IChurn {
  path: string;
  changes: number;

  constructor(path: string) {
    this.path = path;
    this.changes = 0;
  }

  increment(): IChurn {
    this.changes += 1;
    return this;
  }

  getValue(): number {
    return this.changes;
  }
}

export default Churn;
