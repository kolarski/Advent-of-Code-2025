const input = Deno.readTextFileSync('./input.txt').trim();
const totalClicks = 100;

const lines = input.split('\n')
let currentPosition = 50;
let zeroCount = 0

lines.forEach(line => {
    const clicks = parseInt(line.slice(1), 10);
    const direction = line[0] === 'R' ? 1 : -1;
    currentPosition = ((currentPosition + direction * clicks) % totalClicks + totalClicks) % totalClicks;
    console.log(currentPosition);
    if (currentPosition === 0) { zeroCount += 1 }
})

console.log(`Zero count: ${zeroCount}`);