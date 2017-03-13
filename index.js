#!/usr/bin/env node
// console.log('Hello, world!');

var Table = require('cli-table');

// instantiate
var table = new Table({
  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
   , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
   , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
   , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['x', 'o', 'x']
  , ['x', 'o', 'x'],
  ['x', 'o', 'x']
);




console.log(table.toString());
