import renderer from "./Renderer.js";
import Vector from "./Vector.js";
import Food from "./Food.js";
import { settings } from "./SnakeAI.js";

export default class Snake {
  constructor(argument) {
    this.xVel;
    this.yVel;

    this.head;

    this.body; //snakes body

    this.food;

    this.food = new Food();
    this.body = new Array();

    this.head = new Vector(800, settings.height / 2);
    this.body.push(new Vector(800, settings.height / 2 + settings.SIZE)); //new Vector(800, 420)
    this.body.push(new Vector(800, settings.height / 2 + 2 * settings.SIZE)); //new Vector(800, 440)
  }

  //show the snake
  show() {
    this.food.show();
    renderer.fillStyle("rgb(255,255,255)");
    renderer.strokeStyle("rgb(0,0,0)");
    //loop to show snake's body
    for (let i = 0; i < this.body.length; i++) {
      renderer.fillRect(this.body[i].x, this.body[i].y, settings.SIZE, settings.SIZE);
      renderer.rect(this.body[i].x, this.body[i].y, settings.SIZE, settings.SIZE);
    }
    renderer.fillStyle("grey");
    renderer.fillRect(this.head.x, this.head.y, settings.SIZE, settings.SIZE);
    renderer.rect(this.head.x, this.head.y, settings.SIZE, settings.SIZE);
  }

  //move the snake
  move() {
    this.shiftBody();
  }

  //shift the body to follow the head
  shiftBody() {
    let tempx = this.head.x;
    let tempy = this.head.y;
    this.head.x += this.xVel;
    this.head.y += this.yVel;
    let temp2x;
    let temp2y;
    for (let i = 0; i < this.body.length; i++) {
      temp2x = this.body[i].x;
      temp2y = this.body[i].y;
      this.body[i].x = tempx;
      this.body[i].y = tempy;
      tempx = temp2x;
      tempy = temp2y;
    }
  }

  moveUp() {
    if (this.yVel != settings.SIZE) {
      this.xVel = 0;
      this.yVel = -settings.SIZE;
    }
  }
}
