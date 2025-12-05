# 🎄🎅 Advent of Code 2025 🎁❄️

Link: https://adventofcode.com/2025

This is my personal repo with solutions.
I’ll try to solve all days in TypeScript (Deno).
No AI help allowed :)

## ⭐⭐⭐ Current Stars: 7

## Daily Log

### Day 1 (https://adventofcode.com/2025/day/1)

- [x] Part 1 — Solved
- [ ] Part 2 —
- Notes:
  - Learned the `((x % N) + N) % N` normalization trick to avoid non negative-results and correctly wrap around

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

- [x] Part 1 — Solved
- [x] Part 2 — Solved
- Notes:
  - Solution is not optimal. We can optimize it further for performance. Current solution is optimized for DX :)

### Day 5 (https://adventofcode.com/2025/day/5)

- [x] Part 1 — Solved
- [] Part 2 —
- Notes:
  - I've solved very similar task for a project of mine with overlapping intervals for work-time of shops and stores
  - you have worktime ranges and you need to check if the store is open at current time
  - Normally you will order and dedupe the intervals and there is very optimal way to do it but this task allows simple bruteforce
  - So two nested loops solved Part 1 in less than a second.
