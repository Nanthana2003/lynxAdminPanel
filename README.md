# lynx-admin-panel

## What's used:

1. React JS

## Setup Locally:

1. Git Clone lynx-admin-panel

2. CD to lynx-admin-panel

3. Install dependencies

```bash
npm install
```

4. Create an .env file and reference the parameters from .env.example file

## Run Locally:

1. Run the dev server

```bash
npm start
```

2. Open localhost:3000 in browser.

## Cool Dev Features

### 1. Formatting with Prettier:-

Prettier is configured to format all the JS and JSX files with it's default configuration in the Scripts section of package.json file. Use

```bash
npm run format:write
```

in CLI to format all the files in the project. The option is given so that all the devs not using VSCode also can format the code before making PRs.

For VSCode Users:-

1.  Install Extension named 'Prettier' by Prettier organisation.
2.  In VSCode settings turn on 'Format on save' in Editor section (Search it).
3.  Also, Turn on 'Prettier: Require Config' and 'Prettier: Use Editor Config' in Prettier section of settings.

This will ensure that the file is formatted each time you save it.

Always make sure to run the format command to format the project before making PRs.

### 2. Linting with ESLint:-

ESLint is configured for use with latest ECMA. It will not interfere with the formatting of prettier as prettier is given preference over it. Use

```bash
npm run lint:check
```

to find files that contain linting errors. Then fix the problems.

### 3.Recommended VSCode Extensions:-

1. ES7 React/Redux/GraphQL/React-Native snippets by dsznajder
2. ESLint by Microsoft
3. Prettier by Prettier
4. Prettier ESLint by Rebecca Vest
5. Draw.io Integration by Henning Dieterichs
6. glean by Wix
