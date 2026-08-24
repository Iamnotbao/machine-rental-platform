# Development rules

Use focused branches and conventional, imperative commits when commits are requested. Before a pull request, run `npm run lint`, `npm run typecheck`, `npm run build:client`, and formatting checks when relevant.

Keep documentation synchronized whenever architecture, folders, routing, data flow, business foundations, or workflow changes. PRs should be scoped, describe validation, and avoid unrelated changes.

Never use `git reset --hard`, `git clean -fd`, `git push --force`, or rewrite Git history without explicit instruction. Always inspect `git status` and `git diff` before committing.
