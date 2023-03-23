# Contributing

## Getting Started

```bash
git clone git@github.com:upgradejs/git-churn-js.git
cd git-churn-js
npm install
```

To be able to test running the project locally:

```bash
npm run build
npm link
```

## How it works

### Components
The library is divided into four main components:

1. GitChurnJS (`src/index.ts`): The main class that orchestrates the process of collecting and analyzing churn data.
2. GitLog (`src/gitLog.ts`): A class responsible for extracting the git commit history of a repository.
3. ChurnCollection (`src/churnCollection.ts`): A class that manages and computes the churn data for each file.
4. Churn (`src/churn.ts`): A class representing the churn information of an individual file.

### Workflow
1. A user initializes a GitChurnJS instance with the desired configuration options, such as the repository directory, time range, and file filters.
2. GitChurnJS creates a GitLog instance, which extracts the commit history from the repository. It filters out files that no longer exist and any files that do not match the provided filter patterns.
3. GitChurnJS also creates a ChurnCollection instance, which computes the churn rate for each file in the commit history.
4. Users can access the churn information by calling the getByPath method on the GitChurnJS instance, providing a file path as input. The method returns a Churn object containing the number of changes for the given file.
5. Users can also access a list of all analyzed files using the files getter on the GitChurnJS instance.


## When Submitting a Pull Request:

- If your PR closes any open GitHub issues, please include `Closes #XXXX` in your comment.
- Please include a line in the CHANGELOG.md so that it's easier to release new versions.
- Please include a summary of the change and which issue is fixed or which feature is introduced.
- If changes to the behavior are made, clearly describe what are the changes and why.
- If changes to the UI are made, please include screenshots of the before and after.
