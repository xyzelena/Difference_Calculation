#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0');

program.parse();


//const genDiff = (filepath1, filepath2) => {};

//export default genDiff; 
