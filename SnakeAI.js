export const settings = {
  width: 1200,
  height: 800,
  SIZE: 20,
  humanPlaying: true,
};

import renderer from "./Renderer.js";
import Snake from "./Snake.js";

class SnakeAI {
  constructor() {
    this.setup();
  }
  setup() {
    renderer.setup(settings.width, settings.height);

    if (settings.humanPlaying) {
      this.snake = new Snake();
    }

    renderer.start(() => this.draw());
  }

  draw() {
    renderer.clear();
    renderer.strokeStyle("rgb(255,255,255)");
    renderer.line(400, 0, 400, settings.height);

    //change from rect to wall
    renderer.rect(
      400 + settings.SIZE,
      settings.SIZE,
      settings.width - 400 - 40,
      settings.height - 40
    );

    if (settings.humanPlaying) {
      // this.snake.move();
      this.snake.show();
    }
  }
}

new SnakeAI();
