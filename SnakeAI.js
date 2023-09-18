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

    this.snake = new Snake();

    // if (settings.humanPlaying) {
    //   this.snake = new Snake();
    // }

    renderer.start(() => this.draw());
    this.keyPressed();
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
      this.snake.show();
    } else {
      this.snake.think();
      this.snake.move();
      this.snake.show();
    }
  }

  keyPressed() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.snake.think(0);
          this.snake.move();
          break;
        case "ArrowDown":
          this.snake.think(1);
          this.snake.move();
          break;
        case "ArrowLeft":
          this.snake.think(2);
          this.snake.move();
          break;
        case "ArrowRight":
          this.snake.think(3);
          this.snake.move();
          break;
        default:
        // Handle other key presses (if needed)
      }
    });
  }
}

new SnakeAI();
