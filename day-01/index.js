let target = 9;
let input = [4, 3, 2, 1, 5];

let output = [];

input.map((item, index) => {
    let remainder = target - item;

    if (remainder !== 0 && output.length === 0) {
        matchFound = input.indexOf(remainder, index + 1) !== -1;

        if (matchFound) {
            output.push(item)
            output.push(remainder);
        }
    }
});

console.log(output);