import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import micromatch from "micromatch";
import { IGitChurnOptions, IGitLog } from "./types";

class GitLog implements IGitLog {
  options: IGitChurnOptions;

  constructor(options: IGitChurnOptions) {
    this.options = options;
  }

  getHistory(): string[] {
    const gitLogCommand = this.buildGitLogCommand();
    const stdout = execSync(gitLogCommand, {encoding: 'utf8', maxBuffer: 32_000_000});

    return stdout
      .split('\n')
      .filter(line => line.trim().length > 0 &&
        this.pathStillExists(line) &&
        this.filterMatches(line))
      .sort();
  }

  buildGitLogCommand(): string {
    const isWindows = process.platform === 'win32';
    const format = isWindows ? '' : "''";
    const wildcard = isWindows ? '*' : "'*'";
    const since = this.options.since ? `--since="${this.options.since}"` : '';
    const until = this.options.until ? `--until="${this.options.until}"` : '';

    return `git -C ${this.options.directory} log --follow --format=${format} --name-only ${since} ${until} ${wildcard}`;
  }

  pathStillExists(fileName: string): boolean {
    return existsSync(resolve(this.options.directory, fileName));
  }

  filterMatches(file: string): boolean {
    if (this.options.filter && this.options.filter.length) {
      return this.options.filter.every(f => micromatch.isMatch(file, f));
    }

    return true;
  }
}

export default GitLog;
