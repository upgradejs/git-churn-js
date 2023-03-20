import Churn from "./churn";
import { join } from "node:path";
import { IGitChurnOptions, IChurn, IChurnCollection } from "./types";

class ChurnCollection implements IChurnCollection {
  options: IGitChurnOptions;
  history: string[];
  churnByPath: Map<string, IChurn>;

  constructor(history: string[], options: IGitChurnOptions) {
    this.options = options;
    this.history = history;
    this.churnByPath = this.computeChurnsPerFiles();
  }

  computeChurnsPerFiles(): Map<string, IChurn> {
    return this.history.reduce((map, subPath) => {
      const path = join(this.options.directory, subPath);
      const churn = map.get(path) || new Churn(path);
      map.set(path, churn.increment());
      return map;
    }, new Map());
  }

  getByPath(path: string): IChurn {
    const churn = this.churnByPath.get(path);
    if (!churn) {
      throw new Error(`churn not found for path: ${path}`);
    }
    return churn;
  }

  get files(): string[] {
    return [...this.churnByPath.keys()];
  }
}

export default ChurnCollection;
