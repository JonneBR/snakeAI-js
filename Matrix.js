export default class Matrix {
  constructor(r, c) {
    if (arguments.length == 2) {
      this.rows = r;
      this.cols = c;
      this.matrix = [];
      for (let i = 0; i < this.rows; i++) {
        this.matrix[i] = new Array(this.cols).fill(0);
      }
    }
  }
  randomize() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] = Math.random() * (1 - -1) + -1;
      }
    }
    // console.log(this.matrix[0]);
    // console.log(this.matrix);
  }
}
