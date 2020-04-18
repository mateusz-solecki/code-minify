let backup = [];

const CHARS_TO_REMOVE = [' ', '\n', '\t', '44'];

// const BUFFER_LENGTH = 5000;

const codeInput = document.querySelector("#code-input");
const minifyButton = document.querySelector("#minify");
const undoButton = document.querySelector("#undo");

minifyButton.addEventListener('click', minifyCode);
undoButton.addEventListener('click', undo);

// function start() {
//     let newCode;
//
//     /*which button is pressed?*/
//     /*minify button*/
//
//     backup = [];
//     newCode = minifyCode(backup);
//     /* undo button */
//     newCode = backup;
//
//     /* then */
//     displayNewCode(NewCode);
// }

function removeChars(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        // [1, 2, 7, 5].includes(8) => false
        const isCharToRemove = CHARS_TO_REMOVE.includes(char);
        if (!isCharToRemove) {
            output += char;
        }
    }
    return output;
}

function minifyCode() {
    const code = codeInput.value;
    const codeWithoutChars = removeChars(code);
    if (code !== codeWithoutChars) {
        addToBackup(code);
    }
    codeInput.value = codeWithoutChars;
}

function addToBackup(text) {
    backup.push(text);
}

function restoreBackup() {
    return backup.pop();
}

function undo() {
    const backedUp = restoreBackup();
    if (backedUp !== undefined) {
        codeInput.value = backedUp;
    }
}
//
// function displayNewCode(newCode) {
//
// }
//
// start();

// const c = new Car(1990, 'Audi', …);
//
// c.go(100)
//
// Minifier = {
//     chars: [' ', '\t', '\n']
// }
//
// const spaceMinifier = new Minifier([' '])
//
// const spaceMinifier = {
//     chars: [' ']
// }
