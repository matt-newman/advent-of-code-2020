const keys = {
    open: '.',
    tree: '#'
};

// console.log( { keys } );

const howManyTrees = ({
    input = [],
    x = 3,
    y = 1
}) => {
    const inputWidth = input[0]?.length || 0;

    const workingMapForY = input.filter( ( item, index ) => index % y === 0 );

    const numberOfTrees = workingMapForY.reduce((previous, current, index) => {
        let relativeX = (x * index) % inputWidth;
        let square = current[relativeX];

        // console.log({
        //     previous,
        //     current,
        //     index,
        //     relativeX,
        //     square
        // });

        return (square === keys.tree) ? previous += 1 : previous;
    }, 0);

    return numberOfTrees;
};

export {
    howManyTrees,
};