import { findPairThatSumToTarget } from '../core/findAddendsOfSum.js';

const findInvalidNumber = ({
    input=[],
    size=25,
}) => {
    let base = 0;
    let currentIndex = base + size;
    let workingSet = input.slice(base, currentIndex);
    let target = input[size] * 1;
    let adderands = findPairThatSumToTarget( { input: workingSet, target } );

    while(adderands.length === 2) {
        base++;
        currentIndex = base + size;
        workingSet = input.slice(base, currentIndex);
        target = input[currentIndex] * 1;
        adderands = findPairThatSumToTarget( { input: workingSet, target } );
    }

    const invalidNumber = target * 1;

    return  { workingSet, target, invalidNumber };
};

const getWeakness = ( { input, invalidNumber } ) => {
    let runningTotal = 0;
    let lower = 0;
    let upper = 1;
    let range = [];
    let weakness = false;
    let target = invalidNumber * 1;

    while( runningTotal !== target && lower < input.length ) {
        upper = lower + 1;
        runningTotal = input[lower] * 1;
        // console.log( { runningTotal, target, lower, upper, range } );

        while( runningTotal < target && upper < input.length ) {
            runningTotal += input[upper] * 1;
            range = input.slice(lower, upper + 1);
            // console.log( { runningTotal, lower, upper, range } );
            upper++;
        }

        lower++;
    }

    let sorted = range.sort((a,b) => a-b);
    weakness = sorted[0] * 1 + sorted[sorted.length - 1] * 1;

    // console.log( { runningTotal, lower, upper, range, sorted } );

    return weakness;
}

export {
    findInvalidNumber,
    getWeakness,
};