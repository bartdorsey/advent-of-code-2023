// Parse command line arguments using commander

import { Command } from 'commander';
import { day1part1, day1part2 } from './day1.js';
import { day2part1, day2part2 } from './day2.js';
import { day3part1, day3part2 } from './day3.js';
import { day4part1, day4part2 } from './day4.js';
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
    case '3': {
        const contents = await readFile('../data/day3.txt', 'utf-8');
        const part3test = `467..114..
        ...*......
        ..35..633.
        ......#...
        617*......
        .....+.58.
        ..592.....
        ......755.
        ...$.*....
        .664.598..`;
        console.log('Running Day 3');
        console.log('Part 1 = ', day3part1(part3test));
        // console.log('Part 2 = ', day3part2(part3test));
        // console.log('Part 1 = ', day3part1(contents));
        // console.log('Part 2 = ', day3part2(contents));
    }
    case '4': {
        const contents = await readFile('../data/day4.txt', 'utf-8');
        const part4test = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
        console.time('Day 4 Part 1');
        console.log('Part 1 = ', day4part1(part4test));
        console.log('Part 1 = ', day4part1(contents));
        console.timeEnd('Day 4 Part 1');
        console.time('Day 4 Part 2');
        console.log('Part 2 = ', day4part2(part4test));
        console.log('Part 2 = ', day4part2(contents));
        console.timeEnd('Day 4 Part 2');
    }
}
