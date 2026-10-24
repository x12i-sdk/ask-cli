# @x12i/ask-cli usage example

Deterministic natural-language-like command resolver for CLIs.

This consuming application demonstrates **resolve a natural-language phrase into a command plan** using the published npm package, pinned to `1.2.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Resolve supported natural-language-like input into a deterministic CLI command.
- Show an explicit command match before handing it to the host's execution path.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/ask-cli)
- [Implementation monorepo](https://github.com/x12i/ask-cli)
- [Reviewed package source](https://github.com/x12i/ask-cli/tree/ec2612a1d1abf8e4b4ab5a665e3c88ace5cc1156/.)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The records, callers, inference outputs and backend responses in these examples are synthetic. The example checks a local consumer workflow; no database, semantic model, remote promotion, or real similarity index is contacted. A generated mapping proposal still needs human review before production use.
