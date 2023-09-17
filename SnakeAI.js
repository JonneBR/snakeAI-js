export const settings = {
  width: 1200,
  height: 800,
};

import renderer from "./Renderer.js";

class SnakeAI {
  constructor() {
    this.setup();
  }
  setup() {
    renderer.setup(settings.width, settings.height);

    renderer.start(() => this.draw());
  }

  draw() {
    renderer.clear();
    renderer.strokeStyle("rgb(255,255,255)");
    renderer.line(400, 0, 400, settings.height);
  }
}

new SnakeAI();
