import { IGitChurnOptions, IChurnCollection, IGitChurnJS } from "./types";
import GitLog from "./gitLog";
import ChurnCollection from "./churnCollection";
import Churn from "./churn";

class GitChurnJS implements IGitChurnJS {
  options: IGitChurnOptions;
  history: string[];
  churnCollection: IChurnCollection;

  constructor(options: IGitChurnOptions) {
    this.options = options;
    const gitLog = new GitLog(options);
    this.history = gitLog.getHistory();
    this.churnCollection = new ChurnCollection(this.history, options);
  }

  getByPath(path: string): Churn {
    return this.churnCollection.getByPath(path);
  }

  get files(): string[] {
    return this.churnCollection.files;
  }
}

export default GitChurnJS;
