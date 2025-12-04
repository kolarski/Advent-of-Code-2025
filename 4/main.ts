const input = Deno.readTextFileSync('./input.txt').trim();
// Convert to matrix
let lines = input.split('\n').map(line => line.trim().split(''))

// It can be 1 or Infinity for part 1 or part 2
const maxRuns = +Infinity;

const pos: Array<Array<string>> = [];
let total = 0;
let didWeRemoveRollPapers = false;
let runs = 0;


do {
    runs += 1
    didWeRemoveRollPapers = false;
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
        if (!pos[lineIndex]) {
            pos[lineIndex] = [];
        }
        for (let posIndex = 0; posIndex < lines[lineIndex].length; posIndex += 1) {
            const current = lines[lineIndex][posIndex];
            if (current === '.' || current === 'x') {
                pos[lineIndex][posIndex] = '.';
                continue;
            }
            const top = lines[lineIndex - 1]?.[posIndex] === '@' ? 1 : 0;
            const bottom = lines[lineIndex + 1]?.[posIndex] === '@' ? 1 : 0;
            const left = lines[lineIndex][posIndex - 1] === '@' ? 1 : 0;
            const right = lines[lineIndex][posIndex + 1] === '@' ? 1 : 0;
            const topLeft = lines[lineIndex - 1]?.[posIndex - 1] === '@' ? 1 : 0;
            const topRight = lines[lineIndex - 1]?.[posIndex + 1] === '@' ? 1 : 0;
            const bottomLeft = lines[lineIndex + 1]?.[posIndex - 1] === '@' ? 1 : 0;
            const bottomRight = lines[lineIndex + 1]?.[posIndex + 1] === '@' ? 1 : 0;

            const papersAround = top + bottom + left + right + topLeft + topRight + bottomLeft + bottomRight;
            if (papersAround < 4) {
                pos[lineIndex][posIndex] = 'x';
                didWeRemoveRollPapers = true;
                total += 1;
            } else {
                pos[lineIndex][posIndex] = '@';
            }
        }
    }
    lines = pos;
} while (didWeRemoveRollPapers === true && runs < maxRuns);
const solution = pos.map(line => line.join('')).join('\n');

console.log(solution)
console.log(`Total: ${total}`)