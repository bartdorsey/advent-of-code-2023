// Parse command line arguments using commander

import { Command } from 'commander';
import { day1part1, day1part2 } from './day1.js';
import { readFile } from 'fs/promises';

const program = new Command();

program.option('-d, --day <number>', 'Day to run', '1').parse(process.argv);

export const options = program.opts();

switch (options.day) {
    case '1':
        const contents = await readFile('../data/day1.txt', 'utf-8');
        const part1test = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
        const part2test = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
        console.log('Running Day 1');
        console.log('Part 1 = ', await day1part1(part1test));
        console.log('Part 2 = ', await day1part2(part2test));
        console.log('Part 1 = ', await day1part1(contents));
        console.log('Part 2 = ', await day1part2(contents));
}
