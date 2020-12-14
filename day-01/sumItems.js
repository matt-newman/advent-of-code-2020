const sumItems = (input=[]) => {
    return input.reduce((accumulator, current) => accumulator * current);
}

export { sumItems };