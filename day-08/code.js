const operations = {
    'acc': (acc, x) => {
        return acc + (x * 1);
    },
    'jmp': (acc) => {
        return acc;
    },
    'nop': (acc) => {
        return acc;
    },
}

const getInstruction = ( line ) => {
    // console.log( 'getInstruction', { line } );
    const data = line.split(' ');
    const opCode = data[0];
    const arg = data[1];
    const operation = operations[opCode];

    return { opCode, operation, arg };
}

const getStep = (current, op, x) => {
    let step = 1;
    switch(op) {
        case 'jmp':
            step = (x * 1);
            break;
        default:
            break;
    }

    return current + step;
}

const run = ({
    program=[]
}) => {
    const executeOperation = ( line ) => {
        let instruction = getInstruction(program[line]);
        let { operation, opCode, arg } = instruction;
        let step = getStep(line, opCode, arg);

        if(instructionsExecuted.includes(line)) {
            // console.log( 'repeated instruction', { line, iteration, accumulator } );
            valid = false;
            return result;
        }
        
        instructionsExecuted.push(line);
        iteration++;
        accumulator = operation(accumulator, arg);
        result = { operation, arg, step, accumulator };
        
        if ( step >= program.length ) {
            console.log( 'program complete', { result } );
            valid = false;
        }

        return result;
    };

    let valid = true;
    let accumulator = 0;
    let iteration = 0;
    let step = 0;
    let instructionsExecuted = [];
    let result = {};

    while ( valid ) {
        result = executeOperation(step);
        step = result.step;
        // console.log( { result } );
    }

    return result;
}

export {
    getInstruction,
    run,
};