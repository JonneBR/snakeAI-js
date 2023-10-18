import Matrix from "./Matrix.js";

export default class NeuralNet {
  constructor(input, hidden, output, hiddenLayers) {
    this.iNodes = input; //24
    this.hNodes = hidden; //16
    this.oNodes = output; //4
    this.hLayers = hiddenLayers; //2

    this.weights = new Array(this.hLayers + 1);
    this.weights[0] = new Matrix(this.hNodes, this.iNodes + 1);
    for (let i = 1; i < this.hLayers; i++) {
      this.weights[i] = new Matrix(this.hNodes, this.hNodes + 1);
    }
    this.weights[this.weights.length - 1] = new Matrix(this.oNodes, this.hNodes + 1);

    for (let w of this.weights) {
      w.randomize();
    }
    console.log("weights", this.weights[2].matrix);
    console.log("linha", this.weights[2].matrix[0]);
    console.log("coluna", this.weights[2].matrix[0][0]);
  }
}
