const isValid = (input) => {
    // let input = [
    //     '1-3 a: abcde',
    //     '1-3 b: cdefg',
    //     '2-9 c: ccccccccc'
    // ];    
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

const getValidPasswords = ({
    input = []
}) => {
    return input.filter(entry => {
        return isValid(entry);
    });
}

export {
    getValidPasswords
};