# Advent of Code 2025

Personal repo with my solutions. I’ll try to solve all days in TypeScript (Deno).

## ⭐⭐⭐ Current Stars: 3

## Progress

- Day 1: ☐ Attempt to solve
- Day 2: ☑ Part 1 — Solved; ☐ Part 2 — Attempt to solve
- Day 3: ☑ Part 1 — Solved; ☑ Part 2 — Solved

## How to Run (Deno)

```bash
deno run --allow-read src/day03/part1.ts inputs/day03.txt
```

## Daily Log

### Day 1 (https://adventofcode.com/2025/day/1)

- [ ] Attempt to solve

### Day 2 (https://adventofcode.com/2025/day/2)

- [x] Part 1 — Solved
- [ ] Part 2 — Attempt to solve (just noticed there are Part 2 problems)

### Day 3 (https://adventofcode.com/2025/day/3)

- [x] Part 1 — Solved
- [x] Part 2 — Solved
- Notes:
  - I tried to solve it linearly by parsing char by char which meant avoiding `.split('\n')` for the input as well.
  - The solution complexity is near-linear `O(n*~totalBatteries)`. // totalBatteries = 12
  - The solution is also dynamic we can change `totalBatteries` to 2, 12 or whatever
  - The two inner loops and a `.every(...)` are edge cases and very small
- Performance:
  - There are still things we can optimize like the lookaheads for when a line ends and etc.
  - Part 2 takes: 0m0,033s on my machine so I didn't bother to futher optimize it further

### Day 4 (https://adventofcode.com/2025/day/4)

- [ ] Part 1 — Solved
- [ ] Part 2 — Solved

Link: https://adventofcode.com/2025
