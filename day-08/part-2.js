import {
    getContents
} from '../utils/readFile.js';

import {
    getInstruction,
    run,
} from './code.js';

let input = getContents('./day-08/input.txt').split('\n');

// let changeableOps = input.filter((line, index) => {
//     // console.log( 'changeableOps', { line, index });
//     let instruction = getInstruction(line);
//     return instruction.opCode === 'nop' || instruction.opCode === 'jmp';
// });

const switchOp = (line) => {
    const instruction = getInstruction(line);
    const getNewOpCode = (opCode=instruction.opCode) => {
        switch(opCode) {
            case 'jmp':
                return 'nop';
            case 'nop':
                return 'jmp';
            default:
                return opCode;
        };
    }
    return line.replace(instruction.opCode, getNewOpCode());
};

input.slice().forEach( (item, index) => {
    let alteredLine = switchOp(item);
    let newProgram = input.slice();
    newProgram[index] = alteredLine;
    console.log('program run:', index);
    run({ program: newProgram });
});