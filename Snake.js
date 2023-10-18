import renderer from "./Renderer.js";
import Vector from "./Vector.js";
import Food from "./Food.js";
import { settings } from "./SnakeAI.js";
import NeuralNet from "./NeuralNet.js";

export default class Snake {
  constructor(argument) {
    this.xVel;
    this.yVel;

    this.vision; //snakes vision
    this.decision; //snakes decision

    this.head;

    this.body; //snakes body

    this.food;
    this.brain;

    if (argument == null || typeof argument == "number") {
      let layers;
      if (argument == null) {
        layers = settings.hidden_layers;
      } else {
        layers = argument;
      }
      this.head = new Vector(800, settings.height / 2);
      this.food = new Food();
      this.body = new Array();
      if (true) {
        this.vision = new Array(24).fill(0);
        this.decision = new Array(4);
        // Fazer teste de mesa na classe NeuralNet e subsequentes.
        this.brain = new NeuralNet(24, settings.hidden_nodes, 4, layers); //24 //16 //4 //2
        this.body.push(new Vector(800, settings.height / 2 + settings.SIZE)); //new Vector(800, 420)
        this.body.push(new Vector(800, settings.height / 2 + 2 * settings.SIZE)); //new Vector(800, 440)
      }
    }
  }

  wallCollide(x, y) {
    if (
      x >= settings.width - settings.SIZE ||
      x < 400 + settings.SIZE ||
      y >= settings.height - settings.SIZE ||
      y < settings.SIZE
    ) {
      alert("died");
      return true;
    }
    return false;
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
    this.wallCollide(this.head.x, this.head.y);
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

  //look in all 8 directions and check for food, body and wall
  look() {
    //look to left
    this.vision = new Array(24).fill(0);
    let temp = this.lookInDirection(new Vector(-settings.SIZE, 0));
    //food
    this.vision[0] = temp[0];
    //body
    this.vision[1] = temp[1];
    //wall
    this.vision[2] = temp[2];
  }

  //look in a direction and check for food, body and wall
  lookInDirection(direction) {
    let look = new Array(3).fill(0);
    let pos = new Vector(this.head.x, this.head.y);
    var distance = 0;
    pos.add(direction);
    distance += 1;

    while (!this.wallCollide(pos.x, pos.y)) {
      pos.add(direction);
      distance += 1;
    }

    look[2] = 1 / distance;
    return look;
  }

  //think about what direction to move
  think(direction) {
    var maxIndex = settings.humanPlaying ? direction : 0;
    var max = 0;
    for (let i = 0; i < this.decision.length; i++) {
      if (this.decision[i] > max) {
        max = this.decision[i];
        maxIndex = i;
      }
    }

    switch (maxIndex) {
      case 0:
        this.moveUp();
        break;
      case 1:
        this.moveDown();
        break;
      case 2:
        this.moveLeft();
        break;
      case 3:
        this.moveRight();
        break;
    }
  }

  moveUp() {
    if (this.yVel != settings.SIZE) {
      this.xVel = 0;
      this.yVel = -settings.SIZE;
    }
  }
  moveDown() {
    if (this.yVel != -settings.SIZE) {
      this.xVel = 0;
      this.yVel = settings.SIZE;
    }
  }
  moveLeft() {
    if (this.xVel != settings.SIZE) {
      this.xVel = -settings.SIZE;
      this.yVel = 0;
    }
  }
  moveRight() {
    if (this.xVel != -settings.SIZE) {
      this.xVel = settings.SIZE;
      this.yVel = 0;
    }
  }
}
