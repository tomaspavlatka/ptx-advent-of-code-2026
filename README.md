# Advent of Code, 2026

Solutions for [advent of code 2026](https://adventofcode.com/2026), using TypeScript.

## Setup

Requires Node.js 24.

```sh
npm install
```

## Layout

- `src/dayN.ts`: solution for day N. Exports `part1(sample)` and `part2(sample)`.
- `tests/dayN.spec.ts`: tests for day N, for the sample and the real input.
- `resources/dayN`: puzzle input.
- `resources/dayN.sampleP`: sample input for part P.
- `src/shared/`: helpers (input reader, grid, maze, queue, set, combinations).
- `src/templates/`: templates for a new day.

## Commands

```sh
npm test                          # run all tests
npm run test:watch                # run tests on each save
npx jest tests/day1.spec.ts       # run one day
npx jest -t "part 2"              # run tests whose name matches
npx tsc --noEmit                  # type-check
```

Tests run through `@swc/jest`, which does not type-check. Run `npx tsc --noEmit` for type errors.
