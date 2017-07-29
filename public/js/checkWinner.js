function checkWinner(lastMove, board, winner) {
  if (board.playCount <= 5) {
    return false;
  }
  if (board.topHorizontal === 3 || board.midHorizontal === 3 || board.botHorizontal === 3 ||
      board.verticalZero === 3 || board.verticalOne === 3 || board.verticalTwo === 3 ||
      board.diagonalDown === 3 || board.diagonalUp === 3) {

    if (board.topHorizontal === 3) {
      $('#topLeft').css('background-color', 'orange');
      $('#topCenter').css('background-color', 'orange');
      $('#topRight').css('background-color', 'orange');
      winner.show('player')
    }
    if (board.midHorizontal === 3) {
      $('#midLeft').css('background-color', 'orange');
      $('#midCenter').css('background-color', 'orange');
      $('#midRight').css('background-color', 'orange');
      winner.show('player')
    }
    if (board.botHorizontal === 3) {
      $('#botLeft').css('background-color', 'orange');
      $('#botCenter').css('background-color', 'orange');
      $('#botRight').css('background-color', 'orange');
      winner.show('player')
    }
    if (board.verticalZero === 3) {
      $('#topLeft').css('background-color', 'orange');
      $('#midLeft').css('background-color', 'orange');
      $('#botLeft').css('background-color', 'orange');
      winner.show('player')
    }
    if (board.verticalOne === 3) {
      $('#topCenter').css('background-color', 'orange');
      $('#midCenter').css('background-color', 'orange');
      $('#botCenter').css('background-color', 'orange');
      winner.show('player')
    }
    if (board.verticalTwo === 3) {
      $('#topRight').css('background-color', 'orange');
      $('#midRight').css('background-color', 'orange');
      $('#botRight').css('background-color', 'orange');
      winner.show('player')
    }
    if (board.diagonalDown === 3) {
      $('#topLeft').css('background-color', 'orange');
      $('#midCenter').css('background-color', 'orange');
      $('#botRight').css('background-color', 'orange');
      winner.show('player')
    }
    if (board.diagonalUp === 3) {
      $('#topRight').css('background-color', 'orange');
      $('#midCenter').css('background-color', 'orange');
      $('#botLeft').css('background-color', 'orange');
      winner.show('player')
    }

    return true;
  } else {
    // check for computer win
    switch(lastMove) {

      case 'topLeft':
        if (board.topHorizontal === (0 || null)) {
          if (board.topCenter === 'computer' && board.topRight === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#topCenter').css('background-color', 'orange');
            $('#topRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.midLeft === 'computer' && board.botLeft === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#midLeft').css('background-color', 'orange');
            $('#botLeft').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.midCenter === 'computer' && board.botRight === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'topCenter':
        if (board.topHorizontal === (0 || null)) {
          if (board.topLeft === 'computer' && board.topRight === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#topCenter').css('background-color', 'orange');
            $('#topRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.midCenter === 'computer' && board.botCenter === 'computer') {
            $('#topCenter').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botCenter').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'topRight':
        if (board.topHorizontal === (0 || null)) {
          if (board.topLeft === 'computer' && board.topCenter === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#topCenter').css('background-color', 'orange');
            $('#topRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.midRight === 'computer' && board.botRight === 'computer') {
            $('#topRight').css('background-color', 'orange');
            $('#midRight').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.midCenter === 'computer' && board.botLeft === 'computer') {
            $('#topRight').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botLeft').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midLeft':
        if (board.midHorizontal === (0 || null)) {
          if (board.midCenter === 'computer' && board.midRight === 'computer') {
            $('#midLeft').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#midRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.topLeft === 'computer' && board.botLeft === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#midLeft').css('background-color', 'orange');
            $('#botLeft').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midCenter':
        if (board.midHorizontal === (0 || null)) {
          if (board.midLeft === 'computer' && board.midRight === 'computer') {
            $('#midLeft').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#midRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.topCenter === 'computer' && board.botCenter === 'computer') {
            $('#topCenter').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botCenter').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.botLeft === 'computer' && board.topRight === 'computer') {
            $('#topRight').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botLeft').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.topLeft === 'computer' && board.botRight === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'midRight':
        if (board.midHorizontal === (0 || null)) {
          if (board.midLeft === 'computer' && board.midCenter === 'computer') {
            $('#midLeft').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#midRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.topRight === 'computer' && board.botRight === 'computer') {
            $('#topRight').css('background-color', 'orange');
            $('#midRight').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botLeft':
        if (board.botHorizontal === (0 || null)) {
          if (board.botCenter === 'computer' && board.botRight === 'computer') {
            $('#botLeft').css('background-color', 'orange');
            $('#botCenter').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalZero === (0 || null)) {
          if (board.midLeft === 'computer' && board.topLeft === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#midLeft').css('background-color', 'orange');
            $('#botLeft').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalUp === (0 || null)) {
          if (board.midCenter === 'computer' && board.topRight === 'computer') {
            $('#topRight').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botLeft').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botCenter':
        if (board.botHorizontal === (0 || null)) {
          if (board.botLeft === 'computer' && board.botRight === 'computer') {
            $('#botLeft').css('background-color', 'orange');
            $('#botCenter').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalOne === (0 || null)) {
          if (board.midCenter === 'computer' && board.topCenter === 'computer') {
            $('#topCenter').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botCenter').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        break;
      case 'botRight':
        if (board.botHorizontal === (0 || null)) {
          if (board.botLeft === 'computer' && board.botCenter === 'computer') {
            $('#botLeft').css('background-color', 'orange');
            $('#botCenter').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.verticalTwo === (0 || null)) {
          if (board.midRight === 'computer' && board.topRight === 'computer') {
            $('#topRight').css('background-color', 'orange');
            $('#midRight').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
            winner.show('computer');
            return true;
          }
        }
        if (board.diagonalDown === (0 || null)) {
          if (board.midCenter === 'computer' && board.topLeft === 'computer') {
            $('#topLeft').css('background-color', 'orange');
            $('#midCenter').css('background-color', 'orange');
            $('#botRight').css('background-color', 'orange');
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
