const getAllSeats = ({
    input = []
}) => {
    // for dealing with the full array
}

const getSeat = ({
    input = ''
}) => {
    let row = 0;
    let column = 0;
    const regex = /^([FB]{7})([LR]{3})$/i;

    const data = input.match(regex);
    const rowData = data[1].split('');
    const columnData = data[2].split('');

    row = getRow(rowData);
    column = getColumn(columnData);

    return { row, column };
};

const getRow = ( rowData=[] ) => {
    const byteMap = [64, 32, 16, 8, 4, 2, 1];
    const rows = 127; // 128 but 0 indexed
    return rowData.reduce( (acc, current, index) => {
        return current === 'F' ? acc - byteMap[index] : acc;
    }, 127);
}

const getColumn = ( columnData=[] ) => {
    return 0;
}

const getSeatId = ({
    seat
}) => {

};

export {
    getSeat,
    getSeatId,
    getAllSeats,
};