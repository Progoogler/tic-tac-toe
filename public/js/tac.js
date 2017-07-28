function tac(board, winner, game) {
  console.log('board playcount', board.playCount)
  var plot;
  for (var row in board) {
    if (board[row] === 2 && row !== 'playCount') {
      plot = row; console.log('plot ', plot)
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
    for (var winning in winner) {
      if (typeof(winner[winning]) === 'object') continue;
      if (winner[winning] >= 1) {
        switch(winning) {
          case 'cth':
            if (board.topLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('topLeft');
              return;
            }
            if (board.topCenter === Number.POSITIVE_INFINITY) {
              board.computerTic('topCenter');
              return;
            }
            if (board.topRight === Number.POSITIVE_INFINITY) {
              board.computerTic('topRight');
              return;
            }
          case 'cmh':
            if (board.midLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('midLeft');
              return;
            }
            if (board.midCenter === Number.POSITIVE_INFINITY) {
              board.computerTic('midCenter');
              return;
            }
            if (board.midRight === Number.POSITIVE_INFINITY) {
              board.computerTic('midRight');
              return;
            }
          case 'cbh':
            if (board.botLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('botLeft');
              return;
            }
            if (board.botCenter === Number.POSITIVE_INFINITY) {
              board.computerTic('botCenter');
              return;
            }
            if (board.botRight === Number.POSITIVE_INFINITY) {
              board.computerTic('botRight');
              return;
            }
          case 'cvz':
            if (board.topLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('topLeft');
              return;
            }
            if (board.midLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('midLeft');
              return;
            }
            if (board.botLeft === Number.POSITIVE_INFINITY) {
              board.computerTic('botLeft');
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
            if (board.midRight === Number.POSITIVE_INFINITY) {
              board.computerTic('midRight');
              return;
            }
            if (board.botRight === Number.POSITIVE_INFINITY) {
              board.computerTic('botRight');
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

console.log('THERE\'S A PLOT! HERE IT IS! ', plot)
  var i = 0;
  switch(plot) {
    case 'topHorizontal':
      for (; i < 3; i++) {
        if (game[0][i] === undefined) {
          board.computerTic(0, i);
          board[plot] = null;
          i = 3;
        }
      }
      break;
    case 'midHorizontal':
      for (; i < 3; i++) {
        if (game[1][i] === undefined) {
          board.computerTic(1, i);
          board[plot] = null;
          i = 3;
        }
      }
      break;
    case 'botHorizontal':
      for (; i < 3; i++) {
        if (game[2][i] === undefined) {
          board.computerTic(2, i);
          board[plot] = null;
          i = 3;
        }
      }
      break;
    case 'verticalZero':
      for (; i < 3; i++) {
        if (game[i][0] === undefined) {
          board.computerTic(i, 0)
          board[plot] = null;
          i = 3;
        }
      }
      break;
    case 'verticalOne':
      for (; i < 3; i++) {
        if (game[i][1] === undefined) {
          board.computerTic(i, 1)
          board[plot] = null;
          i = 3;
        }
      }
      break;
    case 'verticalTwo':
      for (; i < 3; i++) {
        if (game[i][2] === undefined) {
          board.computerTic(i, 2)
          board[plot] = null;
          i = 3;
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
      console.log('Error! Something went wrong.');
  }
}

module.exports = tac;
