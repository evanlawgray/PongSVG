import {SVG_NS, GAMESETTINGS, KEYS} from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = GAMESETTINGS.speed;
    this.score = 0;
    this.up = up;
    this.down = down;
    this.paused = false;

    document.addEventListener('keydown', event => {

/*      //POTENTIAL FIX FOR MULTIPLE SIMULTANEOUS KEYDOWN EVENTS
      var map = []; // You could also use an array
onkeydown = onkeyup = function(event){
    map[e.keyCode] = e.type == 'keydown';
    // insert conditional here 
}*/
      switch (event.keyCode) {
        case this.up:
          if (this.paused === false){this.moveUP()}
          break;
        case this.down:
          if (this.paused === false){this.moveDown()}
          break;
        case KEYS.spaceBar:
          this.paused = !this.paused;
          break;
        }
    });
  }

  moveUP() {
    this.y = Math.max((this.y - this.speed), (this.boardHeight - this.boardHeight));
  }

  moveDown(){
    this.y = Math.min((this.y + this.speed), this.boardHeight - this.height);
  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
  return [leftX, rightX, topY, bottomY];
}

  render(svg) {
    let paddle = document.createElementNS(SVG_NS, 'rect');
    paddle.setAttributeNS(null, 'width', this.width);
    paddle.setAttributeNS(null, 'height', this.height);
    paddle.setAttributeNS(null, 'x', this.x);
    paddle.setAttributeNS(null, 'y', this.y);
    paddle.setAttributeNS(null, 'fill', 'white');

    svg.appendChild(paddle);

  }
}