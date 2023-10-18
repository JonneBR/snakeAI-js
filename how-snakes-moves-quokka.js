const settings = {
  width: 1200,
  height: 800,
  SIZE: 20,
};

let xVel = 0;
let yVel = -settings.SIZE;

const head = {
  x: 800,
  y: settings.height / 2,
};
console.log(head);

let body = [];
body.push({ x: 800, y: settings.height / 2 + settings.SIZE });
body.push({ x: 800, y: settings.height / 2 + 2 * settings.SIZE });
console.log(body);

let tempHeadx = head.x;
let tempHeady = head.y;
console.log(tempHeadx);
console.log(tempHeady);
head.x += xVel;
head.y += yVel;
let temp2x;
let temp2y;

for (let i = 0; i < body.length; i++) {
  temp2x = body[i].x;
  temp2y = body[i].y;
  console.log(temp2x);
  console.log(temp2y);
  body[i].x = tempHeadx;
  body[i].y = tempHeady;
  console.log(body[i].x);
  console.log(body[i].y);
  tempHeadx = temp2x;
  tempHeady = temp2y;
  console.log(tempHeadx);
  console.log(tempHeady);
}

console.log(head);
