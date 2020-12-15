const keys = { 
    open: '.', 
    tree: '#'
};

// console.log( { keys } );

const howManyTrees = ({
    input = [],
    x = 1,
    y = 1
}) => {
    const inputWidth = input[0]?.length || 0;

    const numberOfTrees = input.reduce( (previous, current, index) => {
        const square = current[ x * index ];
        console.log( { previous, current, index, square } );
        return square === keys.tree ? previous : previous+=1;
    }, 0 );

    return numberOfTrees;
};

const b = () => [];

export {
    howManyTrees,
    b
};