const getSeat = ({
    input = []
}) => {
    let row = 0;
    let column = 0;
    const byteMap = [64, 32, 16, 8, 4, 2, 1];
    const regex = /^([FB]{7})([LR]{3})$/i;

    return { row, column };
};

const getSeatId = ({
    seat
}) => {

};

export {
    getSeat,
    getSeatId
};