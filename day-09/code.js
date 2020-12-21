import { findPairThatSumToTarget } from '../core/findAddendsOfSum.js';

const runProgram = ({
    input=[],
    size=25,
}) => {
    let base = 0;
    let currentIndex = base + size;
    let workingSet = input.slice(base, currentIndex);
    let target = input[size] * 1;
    let weakness = -2;

    let output = findPairThatSumToTarget( { input: workingSet, target } );

    while(output.length === 2) {
        base++;
        currentIndex = base + size;
        workingSet = input.slice(base, currentIndex);
        target = input[currentIndex] * 1;
        output = findPairThatSumToTarget( { input: workingSet, target } );
    }

    const invalidNumber = target * 1;

    // TODO: 

    return  { workingSet, target, weakness };
};

export {
    runProgram
};