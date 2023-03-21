# GitChurnJS
GitChurnJS is a library providing a JavaScript/TypeScript API for analyzing the churn rate of files in a Git repository. The churn rate represents the frequency at which files are changed within a project. By identifying files with a high rate of modifications, GitChurnJS helps pinpoint potential areas of code instability or technical debt, offering valuable insights for developers and project maintainers.

## Usage
```typescript
import GitChurnJS from 'git-churn-js';

const options = {
  directory: '/path/to/your/git/repo',
  since: '2022-01-01', // optional: analyze commits since this date
  until: '2022-12-31', // optional: analyze commits until this date
  filter: ['**/*.js', '**/*.ts'], // optional: only include JavaScript and TypeScript files
};

const gitChurn = new GitChurnJS(options);

// Get churn data for a specific file
const fileChurn = gitChurn.getByPath('/path/to/your/git/repo/some/file.ts');
console.log(`Changed ${fileChurn.getValue()} times`);

// List all analyzed files
console.log(gitChurn.files);
```

### `options` API:

```typescript
interface IGitChurnOptions {
  // The path to the Git repository directory that needs to be analyzed
  directory: string;

  // Optional: A date string representing the start of the time range to analyze commits (e.g., '2022-01-01')
  since?: string;

  // Optional: A date string representing the end of the time range to analyze commits (e.g., '2022-12-31')
  until?: string;

  // Optional: An array of glob patterns to filter the files to be analyzed (e.g., ['**/*.js', '**/*.ts'])
  filter?: string[]; 
}

```

## Output
The GitChurnJS library provides users with a simple way to analyze the churn rate of files in a Git repository. By analyzing the frequency of changes, users can identify areas of code that may require refactoring or additional attention to improve stability and maintainability.

## Development
In order to start contributing to `git-churn-js`, you can follow these steps: [CONTRIBUTING.md](CONTRIBUTING.md)

## CHANGELOG
If you want to see what changed between versions: [CHANGELOG.md](CHANGELOG.md)

## Inspiration
This solution was inspired by the churn collection implementation in - https://github.com/simonrenoult/code-complexity 
