export default class Population {
  constructor(size) {
    this.snakes = new Array(size);
    for (let i = 0; i < this.snakes.length; i++) {
      this.snakes[i] = new Snake();
    }
  }

  update() {
    this.bestSnake.look();
    this.bestSnake.think();
    this.bestSnake.move();
  }
}
