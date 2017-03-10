import {
  SVG_NS
} from '../settings';

export default class Fireball {
  constructor( radius, boardWidth, boardHeight, aggressor ) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    
    if (aggressor === 'player1') {
      this.direction = 1;
    } else if (aggressor === 'player2') {
      this.direction = -1;
    }

    this.fire();
    this.ping = new Audio( '../public/sounds/pong-03.wav' );
  }

  fire() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;

    while ( this.vy === 0 ) {

      //Generates a number between -5 and 5
      this.vy = Math.floor( Math.random() * 10 - 5 );
    }

    this.vx = this.direction * ( 6 - Math.abs( this.vy ));
  }

  leaveBoard() {
    this.radius = 0;
    this.direction = 0;
  }

  wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if ( hitLeft || hitRight ) {
      this.vx = -this.vx;
    } else if ( hitTop || hitBottom ) {
      this.vy = -this.vy;
    }
  }

  paddleCollision( player1, player2 ) {
    if ( this.vx > 0 ) {

      let paddle = player2.coordinates( player2.x, player2.y, player2.width, player2.height );
      let [leftX, rightX, topY, bottomY] = paddle;

      if (
        this.x + this.radius >= leftX &&
        this.x + this.radius <= rightX &&
        this.y + this.radius >= topY && this.y - this.radius <= bottomY
      ) {
        this.vx = -this.vx;
        this.ping.play();
      }

    } else {

      let paddle = player1.coordinates( player1.x, player1.y, player1.width, player1.height );
      let [leftX, rightX, topY, bottomY] = paddle;

      if (
        this.x - this.radius <= rightX &&
        this.x - this.radius >= leftX &&
        this.y + this.radius >= topY && this.y - this.radius <= bottomY
      ) {
        this.vx = -this.vx;
        this.ping.play();
      }
    }
  }

  render( svg, paddle1, paddle2 ) {

    this.wallCollision();
    this.paddleCollision( paddle1, paddle2 );

    this.x += this.vx;
    this.y += this.vy;

    let fireball = document.createElementNS( SVG_NS, 'circle' );

    fireball.setAttributeNS( null, 'cx', this.x );
    fireball.setAttributeNS( null, 'cy', this.y );
    fireball.setAttributeNS( null, 'r', this.radius );
    fireball.setAttributeNS( null, 'fill', 'red' );

    svg.appendChild( fireball );

    const hitRightWall = this.x + this.radius >= this.boardWidth;
    const hitLeftWall = this.x - this.radius <= 0;

    if ( hitRightWall ) {
      this.leaveBoard();
    } else if ( hitLeftWall ) {
      this.leaveBoard();
    }
  }
}