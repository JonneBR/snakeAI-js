class Renderer {
  constructor() {}

  setup(width, height) {
    this.width = width;
    this.height = height;

    this.oncanvas = document.getElementById("canvas");
    this.oncontext = this.oncanvas.getContext("2d");
    this.oncanvas.width = this.width;
    this.oncanvas.height = this.height;

    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.backgroundColor = "#000000";
  }

  start(drawCallback) {
    this.drawCallback = drawCallback;
    this.animate();
  }

  clear() {
    this.context.fillRect(0, 0, this.canvas.width, this.height);
  }

  render() {
    this.drawCallback && this.drawCallback();
  }

  present() {
    this.oncontext.drawImage(this.canvas, 0, 0, this.oncanvas.width, this.oncanvas.height);
  }

  animate() {
    this.render();
    this.present();
  }

  strokeStyle(style) {
    this.context.strokeStyle = style;
  }

  fillStyle(style) {
    this.context.fillStyle = style;
  }

  line(x1, y1, x2, y2) {
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  }

  rect(x, y, width, height) {
    this.context.beginPath();
    this.context.rect(x, y, width, height);
    this.context.stroke();
  }

  fillRect(x, y, width, height) {
    this.context.beginPath();
    this.context.rect(x, y, width, height);
    this.context.fill();
  }
}

export default new Renderer();
