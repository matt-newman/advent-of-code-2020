const findItemsThatSumToTarget = (input=[], target=2020) => {
    let output = [];
    let numericList = input.map( x => parseInt(x) );
    
    numericList.forEach((item, index) => {
        let remainder = target - item;

        if (remainder !== 0 && output.length === 0) {
            let matchFound = numericList.indexOf(remainder, index + 1) !== -1;

            if (matchFound) {
                output.push(item);
                output.push(remainder);
            }
        }
    });

    return output;
}

export { findItemsThatSumToTarget };