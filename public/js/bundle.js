(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function checkWinner(lastMove, board, winner) {
  if (board.playCount <= 5) {
    return false;
  }
  if (board.topHorizontal === 3 || board.midHorizontal === 3 || board.botHorizontal === 3 ||
      board.verticalZero === 3 || board.verticalOne === 3 || board.verticalTwo === 3 ||
      board.diagonalDown === 3 || board.diagonalUp === 3) {

    if (board.topHorizontal === 3) {
      $('#topLeft').css('background-color', '#ff8000');
      $('#topCenter').css('background-color', '#ff8000');
      $('#topRight').css('background-color', '#ff8000');
      winner.show('player')
    }
    if (board.midHorizontal === 3) {
      $('#midLeft').css('background-color', '#ff8000');
      $('#midCenter').css('background-color', '#ff8000');
      $('#midRight').css('background-color', '#ff8000');
      winner.show('player')
    }
    if (board.botHorizontal === 3) {
      $('#botLeft').css('background-color', '#ff8000');
      $('#botCenter').css('background-color', '#ff8000');
      $('#botRight').css('background-color', '#ff8000');
      winner.show('player')
    }
    if (board.verticalZero === 3) {
      $('#topLeft').css('background-color', '#ff8000');
      $('#midLeft').css('background-color', '#ff8000');
      $('#botLeft').css('background-color', '#ff8000');
      winner.show('player')
    }
    if (board.verticalOne === 3) {
      $('#topCenter').css('background-color', '#ff8000');
      $('#midCenter').css('background-color', '#ff8000');
      $('#botCenter').css('background-color', '#ff8000');
      winner.show('player')
    }
    if (board.verticalTwo === 3) {
      $('#topRight').css('background-color', '#ff8000');
      $('#midRight').css('background-color', '#ff8000');
      $('#botRight').css('background-color', '#ff8000');
      winner.show('player')
    }
    if (board.diagonalDown === 3) {
      $('#topLeft').css('background-color', '#ff8000');
      $('#midCenter').css('background-color', '#ff8000');
      $('#botRight').css('background-color', '#ff8000');
      winner.show('player')
    }
    if (board.diagonalUp === 3) {
      $('#topRight').css('background-color', '#ff8000');
      $('#midCenter').css('background-color', '#ff8000');
      $('#botLeft').css('background-color', '#ff8000');
      winner.show('player')
    }

    return true;
  } else {
    // check for computer win
    switch(lastMove) {

      case 'topLeft':
        if (board.topHorizontal === (0 || null)) {
          if (board.topCenter === 'computer' && board.topRight === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#topCenter').css('background-color', '#ff8000');
            $('#topRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.midLeft === 'computer' && board.botLeft === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#midLeft').css('background-color', '#ff8000');
            $('#botLeft').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.midCenter === 'computer' && board.botRight === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'topCenter':
        if (board.topHorizontal === (0 || null)) {
          if (board.topLeft === 'computer' && board.topRight === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#topCenter').css('background-color', '#ff8000');
            $('#topRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.midCenter === 'computer' && board.botCenter === 'computer') {
            $('#topCenter').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botCenter').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'topRight':
        if (board.topHorizontal === (0 || null)) {
          if (board.topLeft === 'computer' && board.topCenter === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#topCenter').css('background-color', '#ff8000');
            $('#topRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.midRight === 'computer' && board.botRight === 'computer') {
            $('#topRight').css('background-color', '#ff8000');
            $('#midRight').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.midCenter === 'computer' && board.botLeft === 'computer') {
            $('#topRight').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botLeft').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midLeft':
        if (board.midHorizontal === (0 || null)) {
          if (board.midCenter === 'computer' && board.midRight === 'computer') {
            $('#midLeft').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#midRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.topLeft === 'computer' && board.botLeft === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#midLeft').css('background-color', '#ff8000');
            $('#botLeft').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midCenter':
        if (board.midHorizontal === (0 || null)) {
          if (board.midLeft === 'computer' && board.midRight === 'computer') {
            $('#midLeft').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#midRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.topCenter === 'computer' && board.botCenter === 'computer') {
            $('#topCenter').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botCenter').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.botLeft === 'computer' && board.topRight === 'computer') {
            $('#topRight').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botLeft').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.topLeft === 'computer' && board.botRight === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midRight':
        if (board.midHorizontal === (0 || null)) {
          if (board.midLeft === 'computer' && board.midCenter === 'computer') {
            $('#midLeft').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#midRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.topRight === 'computer' && board.botRight === 'computer') {
            $('#topRight').css('background-color', '#ff8000');
            $('#midRight').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botLeft':
        if (board.botHorizontal === (0 || null)) {
          if (board.botCenter === 'computer' && board.botRight === 'computer') {
            $('#botLeft').css('background-color', '#ff8000');
            $('#botCenter').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.midLeft === 'computer' && board.topLeft === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#midLeft').css('background-color', '#ff8000');
            $('#botLeft').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.midCenter === 'computer' && board.topRight === 'computer') {
            $('#topRight').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botLeft').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botCenter':
        if (board.botHorizontal === (0 || null)) {
          if (board.botLeft === 'computer' && board.botRight === 'computer') {
            $('#botLeft').css('background-color', '#ff8000');
            $('#botCenter').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.midCenter === 'computer' && board.topCenter === 'computer') {
            $('#topCenter').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botCenter').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botRight':
        if (board.botHorizontal === (0 || null)) {
          if (board.botLeft === 'computer' && board.botCenter === 'computer') {
            $('#botLeft').css('background-color', '#ff8000');
            $('#botCenter').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.midRight === 'computer' && board.topRight === 'computer') {
            $('#topRight').css('background-color', '#ff8000');
            $('#midRight').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.midCenter === 'computer' && board.topLeft === 'computer') {
            $('#topLeft').css('background-color', '#ff8000');
            $('#midCenter').css('background-color', '#ff8000');
            $('#botRight').css('background-color', '#ff8000');
            winner.show('computer');
            return true;
          }
        }
        break;
    }
  }
  if (board.playCount >= 9) {
    winner.show('draw');
    return true;
  }

  return false;
}

module.exports = checkWinner;

},{}],2:[function(require,module,exports){
'use strict';
var checkWinner = require('./checkWinner');
var tac = require('./tac');

var game = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
];

var slotNames = [
  ['topLeft', 'topCenter', 'topRight'],
  ['midLeft', 'midCenter', 'midRight'],
  ['botLeft', 'botCenter', 'botRight']
];

var board = new Vue({
  el: '#board',
  data: {
    player: 'o',
    computer: 'x',
    playCount: 0,
    topHorizontal: 0,
    midHorizontal: 0,
    botHorizontal: 0,
    verticalZero: 0,
    verticalOne: 0,
    verticalTwo: 0,
    diagonalDown: 0,
    diagonalUp: 0,
    topLeft: Number.POSITIVE_INFINITY,
    topCenter: Number.POSITIVE_INFINITY,
    topRight: Number.POSITIVE_INFINITY,
    midLeft: Number.POSITIVE_INFINITY,
    midCenter: Number.POSITIVE_INFINITY,
    midRight: Number.POSITIVE_INFINITY,
    botLeft: Number.POSITIVE_INFINITY,
    botCenter: Number.POSITIVE_INFINITY,
    botRight: Number.POSITIVE_INFINITY
  },
  methods: {
    pickOption: function(char) {
      if (this.playCount > 0 && !winner.decided) return;
      if (char === 'x') {
        this.player = 'x';
        this.computer = 'o';
      } else {
        this.player = 'o';
        this.computer = 'x';
      }
    },
    tic: function(location) {
      if (winner.decided) return;
      switch(location) {
        case 'topLeft':
          if (game[0][0] !== undefined) return;
          game[0][0] = board.player;
          this.topLeft = 'player';
          if (this.topHorizontal !== null) this.topHorizontal++;
          if (this.diagonalDown !== null) this.diagonalDown++;
          if (this.verticalZero !== null) this.verticalZero++;
          winner.cth = null;
          winner.cvz = null;
          winner.cdd = null;
          break;
        case 'topCenter':
          if (game[0][1] !== undefined) return;
          game[0][1] = board.player;
          this.topCenter = 'player';
          if (this.topHorizontal !== null) this.topHorizontal++;
          if (this.verticalOne !== null) this.verticalOne++;
          winner.cth = null;
          winner.cvo = null;
          break;
        case 'topRight':
          if (game[0][2] !== undefined) return;
          game[0][2] = board.player;
          this.topRight = 'player';
          if (this.topHorizontal !== null) this.topHorizontal++;
          if (this.diagonalUp !== null) this.diagonalUp++;
          if (this.verticalTwo !== null) this.verticalTwo++;
          winner.cth = null;
          winner.cdu = null;
          winner.cvt = null;
          break;
        case 'midLeft':
          if (game[1][0] !== undefined) return;
          game[1][0] = board.player;
          this.midLeft = 'player';
          if (this.midHorizontal !== null) this.midHorizontal++;
          if (this.verticalZero !== null) this.verticalZero++;
          winner.cmh = null;
          winner.cvz = null;
          break;
        case 'midCenter':
          if (game[1][1] !== undefined) return;
          game[1][1] = board.player;
          this.midCenter = 'player';
          if (this.midHorizontal !== null) this.midHorizontal++;
          if (this.diagonalDown !== null) this.diagonalDown++;
          if (this.diagonalUp !== null) this.diagonalUp++;
          if (this.verticalOne !== null) this.verticalOne++;
          winner.cmh = null;
          winner.cvo = null;
          winner.cdd = null;
          winner.cdu = null;
          break;
        case 'midRight':
          if (game[1][2] !== undefined) return;
          game[1][2] = board.player;
          this.midRight = 'player';
          if (this.midHorizontal !== null) this.midHorizontal++;
          if (this.verticalTwo !== null) this.verticalTwo++;
          winner.cmh = null;
          winner.cvt = null;
          break;
        case 'botLeft':
          if (game[2][0] !== undefined) return;
          game[2][0] = board.player;
          this.botLeft = 'player';
          if (this.botHorizontal !== null) this.botHorizontal++;
          if (this.diagonalUp !== null) this.diagonalUp++;
          if (this.verticalZero !== null) this.verticalZero++;
          winner.cbh = null;
          winner.cdu = null;
          winner.cvz = null;
          break;
        case 'botCenter':
          if (game[2][1] !== undefined) return;
          game[2][1] = board.player;
          this.botCenter = 'player';
          if (this.botHorizontal !== null) this.botHorizontal++;
          if (this.verticalOne !== null) this.verticalOne++;
          winner.cbh = null;
          winner.cvo = null;
          break;
        case 'botRight':
          if (game[2][2] !== undefined) return;
          game[2][2] = board.player;
          this.botRight = 'player';
          if (this.botHorizontal !== null) this.botHorizontal++;
          if (this.diagonalDown !== null) this.diagonalDown++;
          if (this.verticalTwo !== null) this.verticalTwo++;
          winner.cbh = null;
          winner.cdd = null;
          winner.cvt = null;
          break;
        default:
          console.log('something isn\'t right...');
      }
      this.playCount++;

      $('#' + location + ' > .' + board.player).css({'visibility': 'visible', 'display': 'block'});
      $('#' + location + ' > .' + board.computer).css({'display': 'none'});
      if (checkWinner(null, board, winner)) return;
      tac(this, winner, game);
    },
    computerTic: function(row, col) {
      if (arguments.length === 1) {
        // 'row' is the slot name
        loop1 :
        for (var i = 0; i < slotNames.length; i++) {
          loop2 :
          for (var j = 0; j < slotNames[i].length; j++) {
            if (slotNames[i][j] === row) {
              game[i][j] = board.computer;
              break loop1;
            }
          }
        }
        $('#' + row + ' > .' + this.computer).css({'visibility': 'visible', 'display': 'block'});
        $('#' + row + ' > .' + this.player).css({'display': 'none'});
        this[row] = 'computer';
        this.playCount++;
        if (checkWinner(row, board, winner)) return;
        switch(row) {
          case 'topLeft':
            this.topHorizontal = null;
            this.verticalZero = null;
            this.diagonalDown = null;
            break;
          case 'topCenter':
            this.topHorizontal = null;
            this.verticalOne = null;
            break;
          case 'topRight':
            this.topHorizontal = null;
            this.verticalTwo = null;
            this.diagonalUp = null;
            break;
          case 'midLeft':
            this.midHorizontal = null;
            this.verticalZero = null;
            break;
          case 'midCenter':
            this.midHorizontal = null;
            this.verticalOne = null;
            this.diagonalDown = null;
            this.diagonalUp = null;
            break;
          case 'midRight':
            this.midHorizontal = null;
            this.verticalTwo = null;
            break;
          case 'botLeft':
            this.botHorizontal = null;
            this.verticalZero = null;
            this.diagonalUp = null;
            break;
          case 'botCenter':
            this.botHorizontal = null;
            this.verticalOne = null;
            break;
          case 'botRight':
            this.botHorizontal = null;
            this.verticalTwo = null;
            this.diagonalDown = null;
        }
      } else {

        var slot = slotNames[row][col];
        $('#' + slot + ' > .' + this.computer).css({'visibility': 'visible', 'display': 'block'});
        $('#' + slot + ' > .' + this.player).css({'display': 'none'});
        game[row][col] = this.computer;
        this[slot] = 'computer';
        this.playCount++;
        if (checkWinner(slot, board, winner)) return;
        var done = false;
        while (!done) {                                                           // This is a switch operation...lol
          if (row === 0 && col === 0) {
            this.topHorizontal = null;
            this.verticalZero = null;
            this.diagonalDown = null;
            break;
          }
          if (row === 0 && col === 1) {
            this.topHorizontal = null;
            this.verticalOne = null;
            break;
          }
          if (row === 0 && col === 2) {
            this.topHorizontal = null;
            this.verticalTwo = null;
            this.diagonalUp = null;
            break;
          }
          if (row === 1 && col === 0) {
            this.midHorizontal = null;
            this.verticalZero = null;
            break;
          }
          if (row === 1 && col === 1) {
            this.midHorizontal = null;
            this.verticalOne = null;
            this.diagonalUp = null;
            this.diagonalDown = null;
            break;
          }
          if (row === 1 && col === 2) {
            this.midHorizontal = null;
            this.verticalTwo = null;
            break;
          }
          if (row === 2 && col === 0) {
            this.botHorizontal = null;
            this.verticalZero = null;
            this.diagonalUp = null;
            break;
          }
          if (row === 2 && col === 1) {
            this.botHorizontal = null;
            this.verticalOne = null;
            break;
          }
          if (row === 2 && col === 2) {
            this.botHorizontal = null;
            this.verticalTwo = null;
            this.diagonalDown = null;
            break;
          }
          done = true;
        }
      }
      if (slot === undefined) {
        var slot = row;
      }
      switch(slot) {
        case 'topLeft':
          if (winner.cth !== null) winner.cth++;
          if (winner.cvz !== null) winner.cvz++;
          if (winner.cdd !== null) winner.cdd++;
          break;
        case 'topCenter':
          if (winner.cth !== null) winner.cth++;
          if (winner.cvo !== null) winner.cvo++;
          break;
        case 'topRight':
          if (winner.cth !== null) winner.cth++;
          if (winner.cvt !== null) winner.cvt++;
          if (winner.cdu !== null) winner.cdu++;
          break;
        case 'midLeft':
          if (winner.cmh !== null) winner.cmh++;
          if (winner.cvz !== null) winner.cvz++;
          break;
        case 'midCenter':
          if (winner.cmh !== null) winner.cmh++;
          if (winner.cvo !== null) winner.cvo++;
          if (winner.cdd !== null) winner.cdd++;
          if (winner.cdu !== null) winner.cdu++;
          break;
        case 'midRight':
          if (winner.cmh !== null) winner.cmh++;
          if (winner.cvt !== null) winner.cvt++;
          break;
        case 'botLeft':
          if (winner.cbh !== null) winner.cbh++;
          if (winner.cvz !== null) winner.cvz++;
          if (winner.cdu !== null) winner.cdu++;
          break;
        case 'botCenter':
          if (winner.cbh !== null) winner.cbh++;
          if (winner.cvo !== null) winner.cvo++;
          break;
        case 'botRight':
          if (winner.cbh !== null) winner.cbh++;
          if (winner.cvt !== null) winner.cvt++;
          if (winner.cdd !== null) winner.cdd++;
          break;
      }
    },
    reset: function() {
      if (winner.resetting === true) return;
      winner.resetting = true;
      $('#winner').html('');
      var i, j;
      for (i = 0; i < slotNames.length; i++) {
        for (j = 0; j < slotNames[i].length; j++) {
          $('#' + slotNames[i][j]).css('background-color', 'transparent');
          transform(slotNames[i][j]);
        }
      }
      for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
          game[i][j] = undefined;
        }
      }
      this.playCount = 0;
      this.topHorizontal = 0;
      this.midHorizontal = 0;
      this.botHorizontal = 0;
      this.verticalZero = 0;
      this.verticalOne = 0;
      this.verticalTwo = 0;
      this.diagonalDown = 0;
      this.diagonalUp = 0;
      this.topLeft = Number.POSITIVE_INFINITY;
      this.topCenter = Number.POSITIVE_INFINITY;
      this.topRight = Number.POSITIVE_INFINITY;
      this.midLeft = Number.POSITIVE_INFINITY;
      this.midCenter = Number.POSITIVE_INFINITY;
      this.midRight = Number.POSITIVE_INFINITY;
      this.botLeft = Number.POSITIVE_INFINITY;
      this.botCenter = Number.POSITIVE_INFINITY;
      this.botRight = Number.POSITIVE_INFINITY;

      winner.decided = false;
      winner.cth = 0;
      winner.cmh = 0;
      winner.cbh = 0;
      winner.cvz = 0;
      winner.cvo = 0;
      winner.cvt = 0;
      winner.cdd = 0;
      winner.cdu = 0;
    }
  }

});

function transform(position) {
  var degree = 0;
  var positionInterval = setInterval(function() {
    degree++;
    $('#' + position).css('transform', 'skew(' + degree + 'deg, ' + degree + 'deg)');
    if (degree === 45) {
      $('#' + position + ' > .x').css('visibility', 'hidden');
      $('#' + position + ' > .o').css('visibility', 'hidden');
    }
    if (degree === 180) {
      clearInterval(positionInterval);
      winner.resetting = false;
    }
  }, 10);
}

var winner = new Vue({
  el: '#winner',
  data: {
    player: 'You win!',
    computer: 'Computer wins!',
    draw: 'It\'s a draw!',
    decided: false,
    resetting: false,
    cth: 0,
    cmh: 0,
    cbh: 0,
    cvz: 0,
    cvo: 0,
    cvt: 0,
    cdd: 0,
    cdu: 0
  },
  methods: {
    show: function(winner) {
      this.decided = true;
      if (winner === 'player') {
        $('#winner').html(this.player);
      } else if (winner === 'computer') {
        $('#winner').html(this.computer);
      } else {
        $('#winner').html(this.draw)
      }
    }
  }
});

},{"./checkWinner":1,"./tac":3}],3:[function(require,module,exports){
function tac(board, winner, game) {
  var plot;
  for (var row in board) {
    if (board[row] === 2 && row !== 'playCount') {
      plot = row;
      break;
    }
  }
  if (!plot && board.playCount === 1) {
    if (game[1][1] === undefined) {
      board.computerTic(1, 1);
      return;
    } else {
      var row = Math.floor(Math.random() * 3);
      var col = Math.floor(Math.random() * 3);
      if (col === 1) {
        col++;
      }
      board.computerTic(row, col);
      return;
    }
  } else {
    for (var slot in board) {
      if (board[slot] === 'computer') {
        // FIND YOUR OWN PLOT!!
        switch(slot) {
          case 'topLeft':
            if ((board.topCenter === 'computer' || board.topRight === 'computer') && (board.topRight === Number.POSITIVE_INFINITY || board.topCenter === Number.POSITIVE_INFINITY)) {
              board.topCenter === Number.POSITIVE_INFINITY ? board.computerTic('topCenter') : board.computerTic('topRight');
              return;
            }
            if ((board.midLeft === 'computer' || board.botLeft === 'computer') && (board.midLeft === Number.POSITIVE_INFINITY || board.botLeft === Number.POSITIVE_INFINITY)) {
              board.midLeft === Number.POSITIVE_INFINITY ? board.computerTic('midLeft') : board.computerTic('botLeft');
              return;
            }
            if ((board.midCenter === 'computer' || board.botRight === 'computer') && (board.midCenter === Number.POSITIVE_INFINITY || board.botRight === Number.POSITIVE_INFINITY)) {
              board.midCenter === Number.POSITIVE_INFINITY ? board.computerTic('midCenter') : board.computerTic('botRight');
              return;
            }
            break;
          case 'topCenter':
            if ((board.topLeft === 'computer' || board.topRight === 'computer') && (board.topLeft === Number.POSITIVE_INFINITY || board.topRight === Number.POSITIVE_INFINITY)) {
              board.topLeft === Number.POSITIVE_INFINITY ? board.computerTic('topLeft') : board.computerTic('topRight');
              return;
            }
            if ((board.midCenter === 'computer' || board.botCenter === 'computer') && (board.midCenter === Number.POSITIVE_INFINITY || board.botCenter === Number.POSITIVE_INFINITY)) {
              board.midCenter === Number.POSITIVE_INFINITY ? board.computerTic('midCenter') : board.computerTic('botCenter');
              return;
            }
            break;
          case 'topRight':
            if ((board.topLeft === 'computer' || board.topCenter === 'computer') && (board.topLeft === Number.POSITIVE_INFINITY || board.topCenter === Number.POSITIVE_INFINITY)) {
              board.topLeft === Number.POSITIVE_INFINITY ? board.computerTic('topLeft') : board.computerTic('topCenter');
              return;
            }
            if ((board.midRight === 'computer' || board.botRight === 'computer') && (board.midRight === Number.POSITIVE_INFINITY || board.botRight === Number.POSITIVE_INFINITY)) {
              board.midRight === Number.POSITIVE_INFINITY ? board.computerTic('midRight') : board.computerTic('botRight');
              return;
            }
            if ((board.midCenter === 'computer' || board.botLeft === 'computer') && (board.midCenter === Number.POSITIVE_INFINITY || board.botLeft === Number.POSITIVE_INFINITY)) {
              board.midCenter === Number.POSITIVE_INFINITY ? board.computerTic('midCenter') : board.computerTic('botLeft');
              return;
            }
            break;
          case 'midLeft':
            if ((board.midCenter === 'computer' || board.midRight === 'computer') && (board.midCenter === Number.POSITIVE_INFINITY || board.midRight === Number.POSITIVE_INFINITY)) {
              board.midCenter === Number.POSITIVE_INFINITY ? board.computerTic('midCenter') : board.computerTic('midRight');
              return;
            }
            if ((board.topLeft === 'computer' || board.botLeft === 'computer') && (board.topLeft === Number.POSITIVE_INFINITY || board.botLeft === Number.POSITIVE_INFINITY)) {
              board.topLeft === Number.POSITIVE_INFINITY ? board.computerTic('topLeft') : board.computerTic('botLeft');
              return;
            }
            break;
          case 'midCenter':
            if ((board.midLeft === 'computer' || board.midRight === 'computer') && (board.midLeft === Number.POSITIVE_INFINITY || board.midRight === Number.POSITIVE_INFINITY)) {
              board.midLeft === Number.POSITIVE_INFINITY ? board.computerTic('midLeft') : board.computerTic('midRight');
              return;
            }
            if ((board.topCenter === 'computer' || board.botCenter === 'computer') && (board.topCenter === Number.POSITIVE_INFINITY || board.botCenter === Number.POSITIVE_INFINITY)) {
              board.topCenter === Number.POSITIVE_INFINITY ? board.computerTic('topCenter') : board.computerTic('botCenter');
              return;
            }
            if ((board.topLeft === 'computer' || board.botRight === 'computer') && (board.topLeft === Number.POSITIVE_INFINITY || board.botRight === Number.POSITIVE_INFINITY)) {
              board.topLeft === Number.POSITIVE_INFINITY ? board.computerTic('topLeft') : board.computerTic('botRight');
              return;
            }
            if ((board.botLeft === 'computer' || board.topRight === 'computer') && (board.botLeft === Number.POSITIVE_INFINITY || board.topRight === Number.POSITIVE_INFINITY)) {
              board.botLeft === Number.POSITIVE_INFINITY ? board.computerTic('botLeft') : board.computerTic('topRight');
              return;
            }
            break;
          case 'midRight':
            if ((board.midLeft === 'computer' || board.midCenter === 'computer') && (board.midLeft === Number.POSITIVE_INFINITY || board.midCenter === Number.POSITIVE_INFINITY)) {
              board.midLeft === Number.POSITIVE_INFINITY ? board.computerTic('midLeft') : board.computerTic('midCenter');
              return;
            }
            if ((board.topRight === 'computer' || board.botRight === 'computer') && (board.topRight === Number.POSITIVE_INFINITY || board.botRight === Number.POSITIVE_INFINITY)) {
              board.topRight === Number.POSITIVE_INFINITY ? board.computerTic('topRight') : board.computerTic('botRight');
              return;
            }
            break;
          case 'botLeft':
            if ((board.botCenter === 'computer' || board.botRight === 'computer') && (board.botCenter === Number.POSITIVE_INFINITY || board.botRight === Number.POSITIVE_INFINITY)) {
              board.botCenter === Number.POSITIVE_INFINITY ? board.computerTic('botCenter') : board.computerTic('botRight');
              return;
            }
            if ((board.topLeft === 'computer' || board.midLeft === 'computer') && (board.topLeft === Number.POSITIVE_INFINITY || board.midLeft === Number.POSITIVE_INFINITY)) {
              board.topLeft === Number.POSITIVE_INFINITY ? board.computerTic('topLeft') : board.computerTic('midLeft');
              return;
            }
            if ((board.midCenter === 'computer' || board.topRight === 'computer') && (board.midCenter === Number.POSITIVE_INFINITY || board.topRight === Number.POSITIVE_INFINITY)) {
              board.midCenter === Number.POSITIVE_INFINITY ? board.computerTic('midCenter') : board.computerTic('topRight');
              return;
            }
            break;
          case 'botCenter':
            if ((board.midCenter === 'computer' || board.topCenter === 'computer') && (board.midCenter === Number.POSITIVE_INFINITY || board.topCenter === Number.POSITIVE_INFINITY)) {
              board.midCenter === Number.POSITIVE_INFINITY ? board.computerTic('midCenter') : board.computerTic('topCenter');
              return;
            }
            if ((board.botLeft === 'computer' || board.botRight === 'computer') && (board.botLeft === Number.POSITIVE_INFINITY || board.botRight === Number.POSITIVE_INFINITY)) {
              board.botLeft === Number.POSITIVE_INFINITY ? board.computerTic('botLeft') : board.computerTic('botRight');
              return;
            }
            break;
          case 'botRight':
            if ((board.botLeft === 'computer' || board.botCenter === 'computer') && (board.botLeft === Number.POSITIVE_INFINITY || board.botCenter === Number.POSITIVE_INFINITY)) {
              board.botLeft === Number.POSITIVE_INFINITY ? board.computerTic('botLeft') : board.computerTic('botCenter');
              return;
            }
            if ((board.topRight === 'computer' || board.midRight === 'computer') && (board.topRight === Number.POSITIVE_INFINITY || board.midRight === Number.POSITIVE_INFINITY)) {
              board.topRight === Number.POSITIVE_INFINITY ? board.computerTic('topRight') : board.computerTic('midRight');
              return;
            }
            if ((board.topLeft === 'computer' || board.midCenter === 'computer') && (board.topLeft === Number.POSITIVE_INFINITY || board.midCenter === Number.POSITIVE_INFINITY)) {
              board.topLeft === Number.POSITIVE_INFINITY ? board.computerTic('topLeft') : board.computerTic('midCenter');
              return;
            }
            break;
        }
      }
    }
  }

  if (!plot) {
    if (board.playCount === 3) {
      if ((board.topLeft === 'player' && board.botRight === 'player') || (board.topRight === 'player' && board.botLeft === 'player')) {
        var side = Math.floor(Math.random() * 4);
        switch (side) {
          case 0:
            if (board.topCenter !== Number.POSITIVE_INFINITY) {
              side = 1;
            } else {
              board.computerTic('topCenter');
              return;
            }
          case 1:
            if (board.botCenter !== Number.POSITIVE_INFINITY) {
              side = 2;
            } else {
              board.computerTic('botCenter');
              return;
            }
          case 2:
            if (board.midLeft !== Number.POSITIVE_INFINITY) {
              side = 3;
            } else {
              board.computerTic('midLeft');
              return;
            }
          case 3:
            if (board.midRight !== Number.POSITIVE_INFINITY) {
              side = 0;
            } else {
              board.computerTic('midRight');
              return;
            }
        }
      }

      var corner = Math.floor(Math.random() * 4);
      switch (corner) {
        case 0:
          if (board.topLeft !== Number.POSITIVE_INFINITY) {
            corner = 1;
          } else {
            board.computerTic('topLeft');
            return;
          }
        case 1:
          if (board.botRight !== Number.POSITIVE_INFINITY) {
            corner = 2;
          } else {
            board.computerTic('botRight');
            return;
          }
        case 2:
          if (board.topRight !== Number.POSITIVE_INFINITY) {
            corner = 3;
          } else {
            board.computerTic('topRight');
            return;
          }
        case 3:
          if (board.botLeft !== Number.POSITIVE_INFINITY) {
            corner = 0;
          } else {
            board.computerTic('botLeft');
            return;
          }
      }
    }

    for (var winning in winner) {
      if (typeof(winner[winning]) === 'object') continue;
      if (winner[winning] >= 1 && winning !== '_uid' && winner[winning] !== true) {
        switch (winning) {
          case 'cth':
            if (board.topLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('topLeft');
              return;
            }
            if (board.topRight === Number.POSITIVE_INFINITY) {
              board.computerTic('topRight');
              return;
            }
            if (board.topCenter === Number.POSITIVE_INFINITY) {
              board.computerTic('topCenter');
              return;
            }
          case 'cmh':
            if (board.midLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('midLeft');
              return;
            }
            if (board.midRight === Number.POSITIVE_INFINITY) {
              board.computerTic('midRight');
              return;
            }
            if (board.midCenter === Number.POSITIVE_INFINITY) {
              board.computerTic('midCenter');
              return;
            }
          case 'cbh':
            if (board.botLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('botLeft');
              return;
            }
            if (board.botRight === Number.POSITIVE_INFINITY) {
              board.computerTic('botRight');
              return;
            }
            if (board.botCenter === Number.POSITIVE_INFINITY) {
              board.computerTic('botCenter');
              return;
            }
          case 'cvz':
            if (board.topLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('topLeft');
              return;
            }
            if (board.botLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('botLeft');
              return;
            }
            if (board.midLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('midLeft');
              return;
            }
          case 'cvo':
            if (board.topCenter === Number.POSITIVE_INFINITY) {
              board.computerTic('topCenter');
              return;
            }
            if (board.botCenter === Number.POSITIVE_INFINITY) {
              board.computerTic('botCenter');
              return;
            }
          case 'cvt':
            if (board.topRight === Number.POSITIVE_INFINITY) {
              board.computerTic('topRight');
              return;
            }
            if (board.botRight === Number.POSITIVE_INFINITY) {
              board.computerTic('botRight');
              return;
            }
            if (board.midRight === Number.POSITIVE_INFINITY) {
              board.computerTic('midRight');
              return;
            }
          case 'cdd':
            if (board.topLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('topLeft');
              return;
            }
            if (board.botRight === Number.POSITIVE_INFINITY) {
              board.computerTic('botRight');
              return;
            }
          case 'cdu':
            if (board.botLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('botLeft');
              return;
            }
            if (board.topRight === Number.POSITIVE_INFINITY) {
              board.computerTic('topRight');
              return;
            }
          default:
            for (var remainder in board) {
              if (board[remainder] === Number.POSITIVE_INFINITY) {
                board.computerTic(remainder);
                return;
              }
            }
        }
      }
    }
  }

  var i = 0;
  switch(plot) {
    case 'topHorizontal':
      for (; i < 3; i++) {
        if (game[0][i] === undefined) {
          board.computerTic(0, i);
          board[plot] = null;
          break;
        }
      }
      break;
    case 'midHorizontal':
      for (; i < 3; i++) {
        if (game[1][i] === undefined) {
          board.computerTic(1, i);
          board[plot] = null;
          break;
        }
      }
      break;
    case 'botHorizontal':
      for (; i < 3; i++) {
        if (game[2][i] === undefined) {
          board.computerTic(2, i);
          board[plot] = null;
          break;
        }
      }
      break;
    case 'verticalZero':
      for (; i < 3; i++) {
        if (game[i][0] === undefined) {
          board.computerTic(i, 0)
          board[plot] = null;
          break;
        }
      }
      break;
    case 'verticalOne':
      for (; i < 3; i++) {
        if (game[i][1] === undefined) {
          board.computerTic(i, 1)
          board[plot] = null;
          break;
        }
      }
      break;
    case 'verticalTwo':
      for (; i < 3; i++) {
        if (game[i][2] === undefined) {
          board.computerTic(i, 2)
          board[plot] = null;
          break;
        }
      }
      break;
    case 'diagonalDown':
      if (board.topLeft === Number.POSITIVE_INFINITY) board.computerTic('topLeft');
      if (board.midCenter === Number.POSITIVE_INFINITY) board.computerTic('midCenter');
      if (board.botRight === Number.POSITIVE_INFINITY) board.computerTic('botRight');
      board[plot] = null;
      break;
    case 'diagonalUp':
      if (board.topRight === Number.POSITIVE_INFINITY) board.computerTic('topRight');
      if (board.midCenter === Number.POSITIVE_INFINITY) board.computerTic('midCenter');
      if (board.botLeft === Number.POSITIVE_INFINITY) board.computerTic('botLeft');
      board[plot] = null;
      break;
    default:
      for (var remainder in board) {
        if (board[remainder] === Number.POSITIVE_INFINITY) {
          board.computerTic(remainder);
          return;
        }
      }
  }
}

module.exports = tac;

},{}]},{},[2]);
