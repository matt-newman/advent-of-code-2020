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

    // console.log( { thisBag } );

    thisBag?.contents?.forEach( bag => {
        let next = bag.bag;
        let inside = getNestedContents( { bags, start: next } ).contents;
        bag.contents = inside;
    } );

    return thisBag;
}

var getNestedSum = ( {bag} ) => {
    let total = 0;

    if(!bag.number) {
        bag.number = 1;
    }

    bag?.contents?.forEach( inner => {
        let innerTotal = getNestedSum( { bag: inner } );
        total += innerTotal + (inner.number * 1);
    } );

    total = total * (bag.number || 1);

    // console.log( { total });
    return total;
}

const getListOfPossibleContainersOfBag = ( { bagData=[], target='' } ) => {
    let containers = [];
    const getContainers = ( inner=target ) => {
        getBagsContainingBag( { bagData, target: inner } ).map( bag => {
            let type = bag.bag;
            if (!containers.includes(type)) {
                // console.log({type});
                containers.push(type);
                getContainers( type );
            }
        });
    }

    getContainers( target );

    return containers;
}

export {
    getBagData,
    getBagsContainingBag,
    getListOfPossibleContainersOfBag,
    getNestedContents,
    getNestedSum,
};