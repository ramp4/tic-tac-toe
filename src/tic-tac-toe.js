class TicTacToe {
  constructor() {
    this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
    this.count = 0;
    this.typeSymbol = true;
  }

  getCurrentPlayerSymbol() {
    if (this.typeSymbol == true) {
      this.current = 'x';
    } else {
      this.current = 'o';
    }
    return this.current;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.count++;
      this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.typeSymbol = !this.typeSymbol;
    }
  }

  isFinished() {
    if (this.getWinner() != null || this.noMoreTurns() === true) return true;

    return false;
  }

  getWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        this.matrix[i][0] === this.matrix[i][1] &&
        this.matrix[i][1] === this.matrix[i][2] &&
        this.matrix[i][2] != null
      )
        return this.matrix[i][0];
    }

    for (let j = 0; j < 3; j++) {
      if (
        this.matrix[0][j] === this.matrix[1][j] &&
        this.matrix[1][j] === this.matrix[2][j] &&
        this.matrix[2][j] != null
      )
        return this.matrix[0][j];
    }
    if (
      this.matrix[0][0] == this.matrix[1][1] &&
      this.matrix[1][1] == this.matrix[2][2] &&
      this.matrix[2][2] != null
    ) {
      return this.matrix[0][0];
    }

    if (
      this.matrix[0][2] == this.matrix[1][1] &&
      this.matrix[1][1] == this.matrix[2][0] &&
      this.matrix[2][0] != null
    ) {
      return this.matrix[0][2];
    }

    return null;
  }

  noMoreTurns() {
    if (this.count == 9) return true;
    return false;
  }

  isDraw() {
    if (this.noMoreTurns() && this.getWinner() === null) return true;
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
