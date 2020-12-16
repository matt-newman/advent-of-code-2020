const getGroupAnswers = ( { input=[] } ) => {
    const data = input.map(entry => [... new Set(entry.replace(/\n/ig, '').split(''))] );
    // console.log( { input, data } );

    const output = data.reduce( (acc, curr) => { return acc + curr.length }, 0 );
    return output;
}

export { getGroupAnswers };