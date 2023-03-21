import { execSync } from "child_process";
import { existsSync } from "fs";
import { join, resolve } from "path";
import { IGitChurnOptions, IGitLog } from "./types";

class GitLog implements IGitLog {
  options: IGitChurnOptions;

  constructor(options: IGitChurnOptions) {
    this.options = options;
  }

  getHistory(): string[] {
    const gitLogCommand = this.buildGitLogCommand();
    const stdout = execSync(gitLogCommand, {encoding: 'utf8', maxBuffer: 32_000_000});

    return [...new Set(stdout.split('\n'))]
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
    const fullPathFile = join(this.options.directory, file);
    if (this.options.filter && this.options.filter.length) {
      return this.options.filter.every(f => fullPathFile.includes(f));
    }

    return true;
  }
}

export default GitLog;
