export interface IGitChurnOptions {
  directory: string;
  since?: string;
  until?: string;
  filter?: string[];
}

export interface IChurn {
  path: string;
  changes: number;

  increment(): IChurn;
  getValue(): number;
}

export interface IGitChurnJS {
  options: IGitChurnOptions;
  history: string[];
  churnCollection: IChurnCollection;

  getByPath(path: string): IChurn;

  readonly files: string[];
}

export interface IGitLog {
  options: IGitChurnOptions;

  getHistory(): string[];
  buildGitLogCommand(): string;
  pathStillExists(fileName: string): boolean;
  filterMatches(file: string): boolean;
}

export interface IChurnCollection {
  options: IGitChurnOptions;
  history: string[];
  churnByPath: Map<string, IChurn>;

  computeChurnsPerFiles(): Map<string, IChurn>;
  getByPath(path: string): IChurn;

  readonly files: string[];
}
