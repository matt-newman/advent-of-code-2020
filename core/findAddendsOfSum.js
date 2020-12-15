const findPairThatSumToTarget = ({
    input = [],
    target = 2020
}) => {
    let output = [];
    const numericInput = input.map(x => parseInt(x));

    numericInput.forEach((item, index) => {
        let remainder = target - item;

        if (remainder !== 0 && output.length === 0) {
            let matchFound = numericInput.indexOf(remainder, index + 1) !== -1;

            if (matchFound) {
                output.push(item);
                output.push(remainder);
            }
        }
    });

    return output;
}

const findThreeThatSumToTarget = ({
    input = [],
    target = 2020
}) => {
    let output;
    const numericInput = input.map(x => parseInt(x));

    numericInput.forEach((item) => {
        let remainder = (target - item);

        numericInput.filter(x => x < remainder).forEach(innerItem => {
            let thirdNumber = remainder - innerItem;
            let found = numericInput.includes(thirdNumber);

            if (found) {
                output = [item, innerItem, thirdNumber];
            }
        });
    });

    return output;
}

export {
    findPairThatSumToTarget,
    findThreeThatSumToTarget
};