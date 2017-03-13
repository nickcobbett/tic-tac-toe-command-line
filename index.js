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

table.push(
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
);

var insertTic = function(xy) {
  xy = xy.split('');
  table[xy[0]][xy[1]] = 'x';
};

var insertTac = function(xy) {
  xy = xy.split('');
  table[xy[0]][xy[1]] = 'o';
};

program
  .arguments('<coords>')
  .option('-u, --username <username>, Player to enter val')
  .action(function(coords) {
    // var ticCoords = yield prompt('ticCoords: ')
    if (program.username === 'tic') {
      insertTic(coords);
    } else if (program.username === 'tac') {
      insertTac(coords);
    }
    console.log(table.toString());

  })
  .parse(process.argv);

// create function to clear table and start over
// program
//   .option('-n, --new <username>, New Game')
//   .action(function(coords) {
//     // var ticCoords = yield prompt('ticCoords: ')


//   })
//   .parse(process.argv);

// var TicTacToe = function() {
//   this.board = [
//     ['-', '-', '-'],
//     ['-', '-', '-'],
//     ['-', '-', '-']
//   ];

// };

// TicTacToe.prototype.insertTic = function(xy) {
//   xy = xy.toString();
//   xy = xy.split('').map(el => JSON.parse(el));
//   this.board[xy[0]][xy[1]] = 'x';
//   return this.board;
// };

// TicTacToe.prototype.insertTac = function(xy) {
//   xy = xy.toString();
//   xy = xy.split('').map(el => JSON.parse(el));
//   this.board[xy[0]][xy[1]] = 'o';
//   return this.board;
// };

// TicTacToe.prototype.checkRowsForWinner = function() {
//   var winner = null;
//   this.board.forEach(row => {
//     var tics = 0;
//     var tac = 0;
//     row.forEach(val => {
//       if (val === 'x') {
//         tics++;
//       } else if (val === 'o') {
//         tacs++;
//       }
//       if (tics === 3) {
//         winner = 'tic';
//       } else if (tacs === 3) {
//         winner = 'tac';
//       }
//     });
//   });
//   return winner;
// };

// TicTacToe.prototype.checkColumnsForWinner = function() {

// };


// var game = new TicTacToe();
// console.log(game.insertTic(11));





