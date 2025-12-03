const input = Deno.readTextFileSync('./input.txt').trim();

const totalBatteries = 12;
let maxNum = Array(totalBatteries).fill(0);
let sum = 0
let charIndex = 0;


// Solutions does not use .split('\n')
// Solutions should have near linear complexity - O(n * ~totalBatteries) 
// The 2 inner  loops and .every are edge cases and very small. 

for (let i = 0; i < input.length; i++) {
    if (input[i] === '\n') {
        if (maxNum.every(i => i !== 0)) {
            const total = parseInt(maxNum.join(''), 10);
            sum += total;
            maxNum = Array(totalBatteries).fill(0);
        }
        charIndex = 0
        continue;

    }
    const num = parseInt(input[i], 10);
    let restChars = 0;
    for (let k = i + 1; k < input.length && input[k] !== '\n'; k++) {
        restChars++;
    }
    let replaced = false;
    for (let index = 0; index < maxNum.length; index += 1) {
        const ii = maxNum[index];
        const fit = maxNum.length - (index + 1);
        if (replaced === true) {
            maxNum[index] = 0;
        }

        if (ii < num && restChars >= fit && replaced === false) {
            maxNum[index] = num;
            replaced = true;
        }
    }

    charIndex += 1;
}

if (maxNum.every(i => i !== 0)) {
    const total = parseInt(maxNum.join(''), 10);
    sum += total;
}

console.log(sum);