#!/usr/bin/env node
// console.log('Hello, world!');
var co = require('co');
var prompt = require('co-prompt');
var Table = require('cli-table');
var program = require('commander');
// instantiate
var table = new Table({
  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
   , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
   , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
   , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['-', '-', '-']
  , ['-', '-', '-'],
  ['-', '-', '-']
);

// console.log(table.toString());
var insertTac = function(xy) {
  table[x, y] = 'x';
}

var insertTac = function(xy) {
  table[x, y] = '0';
}

program
  .arguments('<coords>')
  .option('-x, --tic <tic>, Player Tic to enter val')
  .option('-o, --tac <tac>, Player Tac to enter val')
  .action(function(coords) {
    co(function *() {
      var ticCoords = yield prompt('ticCoords: ');
      var tacCoords = yield prompt('tacCoords: ');
      insertTac(ticCoords);
      console.log('user: %s pass: %s file: %s', ticCoords, tacCoords, table.toString());
    });
  })
  .action(function(xy) {
    console.log(table.toString());
  })
  .parse(process.argv);

  console.log(table.toString());







// program
//   .arguments('<file>')
//   .option('-u, --username <username>', 'The user to authenticate as')
//   .option('-p, --password <password>', 'The user\'s password')
//   .action(function(file) {
//     co(function *() {
//       var username = yield prompt('username: ');
//       var password = yield prompt.password('password: ');
//       console.log('user: %s pass: %s file: %s', username, password, file);
//     })
//   })
//   .parse(process.argv);
