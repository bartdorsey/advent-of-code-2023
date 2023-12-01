// Parse command line arguments using commander

import { Command } from 'commander';
import { day1part1, day1part2 } from './day1.js';

const program = new Command();

program.option('-d, --day <number>', 'Day to run', '1').parse(process.argv);

export const options = program.opts();

switch (options.day) {
    case '1':
        console.log('Running Day 1');
        day1part1();
        day1part2();
}
