const findItemsThatSumToTarget = (input=[], target=2020) => {
    let output = [];

    input.map((item, index) => {
        let remainder = target - item;

        if (remainder !== 0 && output.length === 0) {
            let matchFound = input.indexOf(remainder, index + 1) !== -1;

            if (matchFound) {
                output.push(item)
                output.push(remainder);
            }
        }
    });

    console.log(output);
    return output;
}

export { findItemsThatSumToTarget };