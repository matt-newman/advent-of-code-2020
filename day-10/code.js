const getAllJoltageAdapters = ( { input } ) => {
    const output = [];
    let oneJoltCount = 0;
    let twoJoltCount = 0;
    let threeJoltCount = 1; // starts at 1 due to the final adaptor always being 3
    const sorted = input.slice().sort((a,b)=>a-b);

    console.log( {sorted} );

    let currentJolt = 0;

    sorted.forEach(adaptor => {
        let adaptorMax = (adaptor * 1) + 3;

        // console.log( { currentJolt, adaptor, adaptorMax } );

        if (adaptorMax >= currentJolt) {
            output.push(adaptor);
        }

        if ( adaptor - currentJolt === 1 ) {
            oneJoltCount++;
        } else {
            threeJoltCount++;
        }

        currentJolt = adaptor;
    });

    return { one: oneJoltCount, two: twoJoltCount, three: threeJoltCount };
};

const getPossibleArrangements = ( {input} ) => {
    const sorted = input.slice().sort((a,b)=>a-b);

    console.log({sorted});

    let clusters = [];
    let currentIndex = 0;
    let currentItem = 0;
    let previousItem = 0;
    let clusterLength = 1;

    while( sorted[currentIndex] ) {
        currentItem = sorted[currentIndex] * 1;
        previousItem = sorted[currentIndex - 1] * 1;
        if( currentItem - previousItem === 1 ) {
            clusterLength++;
        } else {
            clusters.push(clusterLength);
            clusterLength = 1;
        }
        currentIndex++;
    }

    if (clusterLength !== 1) {
        clusters.push(clusterLength);
    }
    
    // console.log({clusters});
    clusters = clusters.filter( item => item > 2 );

    return clusters;
}

export { 
    getAllJoltageAdapters,
    getPossibleArrangements,
};