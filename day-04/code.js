const isValidPassport = ({
    input
}) => {
    let normalisedData = input.replace(/\n/g, ' ');
    const requiredFields = [
        'byr',
        'iyr',
        'eyr',
        'hgt',
        'hcl',
        'ecl',
        'pid',
    ];
    const optionalFields = ['cid'];

    console.log({
        normalisedData
    });

    return requiredFields.every(field => {
        const regexForField = new RegExp(`(^|\\s)${field}:`);
        return regexForField.test(normalisedData);
    });
};

export {
    isValidPassport
};