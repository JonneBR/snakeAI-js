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
          this.snake.think();
          this.snake.move();
          break;
        case "ArrowDown":
          // Handle the down arrow key press
          console.log("Down arrow key pressed");
          break;
        case "ArrowLeft":
          // Handle the left arrow key press
          console.log("Left arrow key pressed");
          break;
        case "ArrowRight":
          // Handle the right arrow key press
          console.log("Right arrow key pressed");
          break;
        default:
        // Handle other key presses (if needed)
      }
    });
  }
}

new SnakeAI();
