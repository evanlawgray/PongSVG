import {
  SVG_NS
} from '../settings';

export default class Fireball {
  constructor( radius, boardWidth, boardHeight, aggressor ) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.aggressor = aggressor;
    this.ping = new Audio( '../public/sounds/pong-03.wav' );
    this.renderCount = 0;
    if (aggressor.x < this.boardWidth / 2) {
      this.direction = 1;
    } else if (aggressor.x > 1 + this.boardWidth / 2 ) {
      this.direction = -1;
    }
    this.fire();
  }

  fire() {

    if (this.aggressor.x < 290) {
      this.x = this.aggressor.x + (this.aggressor.width +1);
    } else {
      this.x = this.aggressor.x - (this.aggressor.width - 1);
    }

    this.y = this.aggressor.y + ( this.aggressor.height / 2 );

    this.vy = 0;

    this.vx = this.direction * ( 6 - Math.abs( this.vy ));
  }

  flash(fireball) {
    if ( this.renderCount % 8 === 0 && !this.renderCount % 16 === 0 ) {
      fireball.setAttributeNS( null, 'fill', 'yellow' );
    }
    if ( this.renderCount % 16 === 0 ) {
      fireball.setAttributeNS( null, 'fill', 'white' );
    }
  }

  leaveBoard() {
    this.radius = 0;
    this.direction = 0;
    this.x = 290;
    this.y = -10
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

  paddleCollisionCheck(player, playerCoordinates) {

    if ( player === 'player2' ) {

      let paddle = playerCoordinates;
      let [leftX, rightX, topY, bottomY] = paddle;

      if (
          this.x + this.radius >= leftX &&
          this.x + this.radius <= rightX &&
          this.y + this.radius >= topY && 
          this.y - this.radius <= bottomY
      ) {
          return true;
      }
    } else if ( player === 'player1' ) {

      let paddle = playerCoordinates;
      let [leftX, rightX, topY, bottomY] = paddle;

      if (
          this.x - this.radius >= leftX &&
          this.x - this.radius <= rightX &&
          this.y + this.radius >= topY && 
          this.y - this.radius <= bottomY
      ) {
          return true;
      }
    }
  }

  paddleCollision( player1, player2 ) {
    if ( this.vx > 0 ) {

      if ( 
        this.paddleCollisionCheck( 'player2', player2.coordinates( player2.x, player2.y, player2.width, player2.height ))
        && player2.height > 30
      ) {
        player2.height -= 2;
        this.leaveBoard();
     }

    } else {
      if (
        this.paddleCollisionCheck( 'player1', player1.coordinates( player1.x, player1.y, player1.width, player1.height ))
        && player1.height > 30
      ) {
        player1.height -= 2;
        this.leaveBoard();
      }    
    }
  }

  render( svg, paddle1, paddle2 ) {

    this.renderCount++;

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

    this.flash( fireball );

    const hitRightWall = this.x + this.radius >= this.boardWidth;
    const hitLeftWall = this.x - this.radius <= 0;

    if ( hitRightWall ) {
      this.leaveBoard();
    } else if ( hitLeftWall ) {
      this.leaveBoard();
    }
  }
}