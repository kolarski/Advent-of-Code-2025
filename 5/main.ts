const input = Deno.readTextFileSync('./input.txt').trim();

const data = input.split('\n\n');
const ranges = data[0].split('\n').map(i => i.split('-').map(t => parseInt(t, 10)))
const ingredientIds = data[1].split('\n').map(t => parseInt(t, 10))
let totalFreshIngridients = 0;

ingredientIds.forEach(ingredientId => {
    let foundIt = false;
    ranges.forEach(range => {
        if (range[0] <= ingredientId && range[1] >= ingredientId && foundIt == false) {
            totalFreshIngridients += 1;
            foundIt = true;
        }
    })
})

console.log(totalFreshIngridients);