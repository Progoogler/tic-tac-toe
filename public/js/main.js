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
          case 'topCenter':
            this.topHorizontal = null;
            this.verticalOne = null;
          case 'topRight':
            this.topHorizontal = null;
            this.verticalTwo = null;
            this.diagonalUp = null;
          case 'midLeft':
            this.midHorizontal = null;
            this.verticalZero = null;
          case 'midCenter':
            this.midHorizontal = null;
            this.verticalOne = null;
            this.diagonalDown = null;
            this.diagonalUp = null;
          case 'midRight':
            this.midHorizontal = null;
            this.verticalTwo = null;
          case 'botLeft':
            this.botHorizontal = null;
            this.verticalZero = null;
            this.diagonalUp = null;
          case 'botCenter':
            this.botHorizontal = null;
            this.verticalOne = null;
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
            done = true;
            break;
          }
          if (row === 0 && col === 1) {
            this.topHorizontal = null;
            this.verticalOne = null;
            done = true;
            break;
          }
          if (row === 0 && col === 2) {
            this.topHorizontal = null;
            this.verticalTwo = null;
            this.diagonalUp = null;
            done = true;
            break;
          }
          if (row === 1 && col === 0) {
            this.midHorizontal = null;
            this.verticalZero = null;
            done = true;
            break;
          }
          if (row === 1 && col === 1) {
            this.midHorizontal = null;
            this.verticalOne = null;
            this.diagonalUp = null;
            this.diagonalDown = null;
            done = true;
            break;
          }
          if (row === 1 && col === 2) {
            this.midHorizontal = null;
            this.verticalTwo = null;
            done = true;
            break;
          }
          if (row === 2 && col === 0) {
            this.botHorizontal = null;
            this.verticalZero = null;
            this.diagonalUp = null;
            done = true;
            break;
          }
          if (row === 2 && col === 1) {
            this.botHorizontal = null;
            this.verticalOne = null;
            done = true;
            break;
          }
          if (row === 2 && col === 2) {
            this.botHorizontal = null;
            this.verticalTwo = null;
            this.diagonalDown = null;
            done = true;
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
          if (this.cbh !== null) this.cbh++;
          if (this.cvo !== null) this.cvo++;
          break;
        case 'botRight':
          if (this.cbh !== null) this.cbh++;
          if (this.cvt !== null) this.cvt++;
          if (this.cdd !== null) this.cdd++;
          break;
      }
    },
    reset: function() {
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
