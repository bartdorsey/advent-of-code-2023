export function day1part1(data: string): number {
    const lines = data.split('\n');
    const digits = [];
    for (const line of lines) {
        if (!line) {
            continue;
        }
        let first: number | null = null;
        let last: number | null = null;
        for (let i = 0; i < line.length; i++) {
            if (first) {
                continue;
            }
            const num = Number(line[i]);
            if (!isNaN(num)) {
                first = num;
            }
        }
        for (let j = line.length - 1; j >= 0; j--) {
            if (last) {
                continue;
            }
            const num = Number(line[j]);
            if (!isNaN(num)) {
                last = num;
            }
        }
        if (first && last) {
            const newNumber = Number(`${first}${last}`);
            digits.push(newNumber);
        }
    }
    let sum = 0;
    for (const n of digits) {
        sum += n;
    }
    return sum;
}

function string2num(str: string): number {
    switch (str) {
        case 'zero':
            return 0;
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        case 'ten':
            return 10;
        default:
            throw Error("Wasn't a number");
    }
}
const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];

// Searches for a word starting at the beginning of a string
function findWord(words: string[], str: string): string | null {
    for (const word of words) {
        let found = true;
        for (let i = 0; i < word.length; i++) {
            if (str[i] !== word[i]) {
                found = false;
            }
        }
        if (found) {
            return word;
        }
    }
    return null;
}

export function day1part2(data: string) {
    const lines = data.split('\n');
    const digits = [];
    for (const line of lines) {
        // If there's no line, just skip it
        if (!line) {
            continue;
        }
        let first: number | null = null;
        let last: number | null = null;
        // Find the first number
        for (let i = 0; i < line.length; i++) {
            if (first) {
                continue;
            }
            const num = Number(line[i]);
            if (!isNaN(num)) {
                first = num;
            } else {
                const firstWord = findWord(words, line.slice(i, line.length));
                if (firstWord) {
                    first = string2num(firstWord);
                }
            }
        }
        // find the last number
        for (let j = line.length - 1; j >= 0; j--) {
            if (last) {
                continue;
            }
            const num = Number(line[j]);
            if (!isNaN(num)) {
                last = num;
            } else {
                const lastWord = findWord(words, line.slice(j, line.length));
                if (lastWord) {
                    last = string2num(lastWord);
                }
            }
        }
        // Combine the numbers into a double digit number
        if (first && last) {
            const newNumber = Number(`${first}${last}`);
            digits.push(newNumber);
        }
    }
    // Sum them up
    let sum = 0;
    for (const n of digits) {
        sum += n;
    }
    return sum;
}
