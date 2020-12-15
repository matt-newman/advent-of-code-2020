// let input = [
//     '1-3 a: abcde',
//     '1-3 b: cdefg',
//     '2-9 c: ccccccccc'
// ];  

const isValidByOldPolicy = (input) => {  
    let isValid = false;
    const data = input.split(': ');
    const critera = data[0].split(' ');
    const password = data[1];

    const bounds = critera[0].split('-');
    const lowerBound = bounds[0];
    const upperBound = bounds[1];
    const letter = critera[1];

    const occurances = password.split('').filter( item => item === letter ).length;

    // console.log( { data, critera, password, bounds, lowerBound, upperBound, letter, occurances } )

    if ( occurances >= lowerBound && occurances <= upperBound ) {
        isValid = true;
    }

    return isValid;
}

const isValidByCurrentPolicy = (input) => {  
    let isValid = false;
    const data = input.split(': ');
    const critera = data[0].split(' ');
    const password = data[1];

    const positions = critera[0].split('-');
    const firstPosition = positions[0] - 1; // because the policy's index is 1 based not 0 based like javascript
    const secondPosition = positions[1] - 1; // because the policy's index is 1 based not 0 based like javascript
    const letter = critera[1];

    const matchAtFirstIndex = password[firstPosition] === letter;
    const matchAtSecondIndex = password[secondPosition] === letter;

    // console.log( { data, critera, password, positions, firstPosition, secondPosition, letter } )

    if ( matchAtFirstIndex ? !matchAtSecondIndex : matchAtSecondIndex ) { // ternary operator to create javascript XOR
        isValid = true;
    }

    return isValid;
}

const getOldValidPasswords = ({
    input = []
}) => {
    return input.filter(entry => {
        return isValidByOldPolicy(entry);
    });
}

const getCurrentValidPasswords = ({
    input = []
}) => {
    return input.filter(entry => {
        return isValidByCurrentPolicy(entry);
    });
}

export {
    getOldValidPasswords,
    getCurrentValidPasswords
};