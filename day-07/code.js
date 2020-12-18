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

const getBagsContainingBag = ( { bagData=[], target='' } ) => {
    return bagData.filter( bag => {
        return bag.contents.some(item=>item.bag===target)
    } );
}

const getNestedContents = ( { bags, start='shiny_gold'} ) => {

    const findBag = ( key ) => {
        return bags.find( bag => {
            return bag.bag === key
        } );
    }
    
    let thisBag = findBag( start );

    console.log( { thisBag } );

    thisBag?.contents?.forEach( bag => {
        let next = bag.bag;
        let inside = getNestedContents( { bags, start: next } ).contents;
        bag.contents = inside;
    } );

    return thisBag;
}

const getListOfPossibleContainersOfBag = ( { bagData=[], target='' } ) => {
    let containers = [];

    getBagsContainingBag( { bagData, target } ).map( bag => {
        let type = bag.bag;
        if (!containers.includes(type)) {
            // console.log({bag});
            containers.push(type);
            getListOfPossibleContainersOfBag( { bagData, target: type } )
        }
    });

    return containers;
}

export {
    getBagData,
    getBagsContainingBag,
    getListOfPossibleContainersOfBag,
    getNestedContents,
};