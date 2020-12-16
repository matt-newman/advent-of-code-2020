const getBagData = ({
    input = []
}) => {
    let output = [];

    output = input.map(entry => {
        let data = entry.replace(/ bags?/g, '').split(' contain ');
        let bag = data[0].replace(/ /g, '_'); // just makes potentially using as a key name easier
        let inside = data[1].replace('.', '').replace(/ /g, '_').split(',_');
        // console.log( { inside } );
        let contents = inside.reduce( (acc, item) => {
            if ( item === 'no_other' ) {
                return acc;
            }

            let data = item.match(/^(\d+)_(.+)$/);
            // console.log( { data } );
            let bag = data[2];
            let number = data[1];
            acc.push( { bag, number } );
            return acc;
        }, []);
        return { bag, contents };
    });

    return output;
};

export {
    getBagData
};