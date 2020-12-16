const getAnswers = ({
    input = []
}) => {
    const data = input.map(entry => entry.split('\n'));
    // console.log( { input, data } );
    return data;
}

const getUniqueGroupAnswers = ({
    input = []
}) => {
    const data = input.map(entry => [...new Set(entry.replace(/\n/ig, '').split(''))]);
    // console.log( { input, data } );
    return data;
}

const sumUniqueAnswers = (answers) => {
    return answers.reduce((acc, curr) => {
        return acc + curr.length
    }, 0);;
}

const getGroupAnswerTotals = ({
    groups = []
}) => {
    return groups.map(group => group.join('').split('').reduce((answers, current) => {
        let groupSize = group.length;
        answers.groupSize = groupSize;
        if (!answers.totalSameAnswers) {
            answers.totalSameAnswers = 0;
        }
        if (!answers[current]) {
            answers[current] = 0
        }
        answers[current]++;
        if (groupSize === answers[current]) {
            answers.totalSameAnswers++;
        }

        // returns e.g:
        // [
        //     { groupSize: 1, a: 1, totalSameAnswers: 3, b: 1, c: 1 },
        //     { groupSize: 2, a: 2, b: 1, totalSameAnswers: 2, c: 1 },
        // ]
        return answers;
    }, {}))
}

const sumGroupAnswers = ( groupAnswerTotals=[] ) => {
    return groupAnswerTotals.reduce((acc, curr) => {
        return acc + curr.totalSameAnswers;
    }, 0);
}

export {
    getAnswers,
    getGroupAnswerTotals,
    getUniqueGroupAnswers,
    sumGroupAnswers,
    sumUniqueAnswers
};