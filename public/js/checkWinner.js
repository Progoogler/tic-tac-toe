function checkWinner(lastMove, board, winner) {
  if (board.playCount <= 5) {
    return false;
  }
  if (board.topHorizontal === 3 || board.midHorizontal === 3 || board.botHorizontal === 3 ||
      board.verticalZero === 3 || board.verticalOne === 3 || board.verticalTwo === 3 ||
      board.diagonalDown === 3 || board.diagonalUp === 3) {
    // player wins!
    winner.show('player')
    console.log('player wins')
    return true;
  } else { console.log('COMPUTER WINS??', lastMove)
    // check for computer win
    switch(lastMove) {

      case 'topLeft':
        if (board.topHorizontal === (0 || null)) {
          if (board.topCenter === 'computer' && board.topRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.midLeft === 'computer' && board.botLeft === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.midCenter === 'computer' && board.botRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'topCenter':
        if (board.topHorizontal === (0 || null)) {
          if (board.topLeft === 'computer' && board.topRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.midCenter === 'computer' && board.botCenter === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'topRight':
        if (board.topHorizontal === (0 || null)) {
          if (board.topLeft === 'computer' && board.topCenter === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.midRight === 'computer' && board.botRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.midCenter === 'computer' && board.botLeft === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midLeft':
        if (board.midHorizontal === (0 || null)) {
          if (board.midCenter === 'computer' && board.midRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.topLeft === 'computer' && board.botLeft === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midCenter':
        if (board.midHorizontal === (0 || null)) {
          if (board.midLeft === 'computer' && board.midRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.topCenter === 'computer' && board.botCenter === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.botLeft === 'computer' && board.topRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.topLeft === 'computer' && board.botRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midRight':
        if (board.midHorizontal === (0 || null)) {
          if (board.midLeft === 'computer' && board.midCenter === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.topRight === 'computer' && board.botRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botLeft':
        if (board.botHorizontal === (0 || null)) {
          if (board.botCenter === 'computer' && board.botRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.midLeft === 'computer' && board.topLeft === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.midCenter === 'computer' && board.topRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botCenter':
        if (board.botHorizontal === (0 || null)) {
          if (board.botLeft === 'computer' && board.botRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.midCenter === 'computer' && board.topCenter === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botRight':
        if (board.botHorizontal === (0 || null)) {
          if (board.botLeft === 'computer' && board.botCenter === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.midRight === 'computer' && board.topRight === 'computer') {
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.midCenter === 'computer' && board.topLeft === 'computer') {
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
