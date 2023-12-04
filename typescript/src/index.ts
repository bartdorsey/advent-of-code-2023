// Parse command line arguments using commander

import { Command } from 'commander';
import { day1part1, day1part2 } from './day1.js';
import { day2part1, day2part2 } from './day2.js';
import { readFile } from 'fs/promises';

const program = new Command();

program.option('-d, --day <number>', 'Day to run', '1').parse(process.argv);

export const options = program.opts();

switch (options.day) {
    case '1': {
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
        console.log('Part 1 = ', day1part1(part1test));
        console.log('Part 2 = ', day1part2(part2test));
        console.log('Part 1 = ', day1part1(contents));
        console.log('Part 2 = ', day1part2(contents));
    }
    case '2': {
        const contents = await readFile('../data/day2.txt', 'utf-8');
        const part1test = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
        console.log('Running Day 2');
        console.log('Part 1 = ', day2part1(part1test));
        console.log('Part 2 = ', day2part2(part1test));
        console.log('Part 1 = ', day2part1(contents));
        console.log('Part 2 = ', day2part2(contents));
    }
}
