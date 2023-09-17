import renderer from "./Renderer.js";
import Vector from "./Vector.js";
import Food from "./Food.js";
import { settings } from "./SnakeAI.js";

export default class Snake {
  constructor(argument) {
    this.head;

    this.body; //snakes body

    this.food;

    this.head = new Vector(800, settings.height / 2);
    this.food = new Food();
    this.body = new Array();
  }

  show() {
    this.food.show();
    renderer.fillStyle("rgb(255,255,255)");
    renderer.strokeStyle("rgb(0,0,0)");
    renderer.fillRect(this.head.x, this.head.y, settings.SIZE, settings.SIZE);
  }
}
