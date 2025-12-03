const input = Deno.readTextFileSync('./input.txt').trim();

const ranges = input.split(",").map((range) => range.split("-").map(BigInt));
let sum = BigInt(0);
ranges.forEach((range) => {
  for (let i = range[0]; i <= range[1]; i++) {


    const strLen = i.toString().length;

    if (BigInt(strLen) % BigInt(2) !== BigInt(0)) {
      continue
    }

    const firstHalf = BigInt(i.toString().slice(0, strLen / 2));
    const secondHalf = BigInt(i.toString().slice(strLen / 2));


    if (firstHalf === secondHalf) {
      sum += BigInt(i);
    }
  }
});
console.log('Result:', sum);