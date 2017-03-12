import {
  SVG_NS,
  GAMESETTINGS
} from '../settings';

export default class LifeOrb {
  constructor( radius, boardWidth, boardHeight, aggressor ) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.aggressor = aggressor;
    
    if (aggressor.x < 290) {
      this.direction = 1;
    } else if (aggressor.x > 291) {
      this.direction = -1;
    }

    this.fire();
    this.ping = new Audio( '../public/sounds/pong-03.wav' );
  }

  fire() {

    if (this.aggressor.x < 290) {
      this.x = this.aggressor.x + (this.aggressor.width +1);
    } else {
      this.x = this.aggressor.x - (this.aggressor.width - 1);
    }

    this.y = this.aggressor.y + ( this.aggressor.height / 2 );

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
        && player2.height < GAMESETTINGS.paddleHeight
      ) {
        player2.height += 2;
        this.leaveBoard();
     }

    } else {
      if (
        this.paddleCollisionCheck( 'player1', player1.coordinates( player1.x, player1.y, player1.width, player1.height ))
        && player1.height < GAMESETTINGS.paddleHeight
      ) {
        player1.height += 2;
        this.leaveBoard();
      }    
    }
  }

  render( svg, paddle1, paddle2 ) {

    this.wallCollision();
    this.paddleCollision( paddle1, paddle2 );

    this.x += this.vx;
    this.y += this.vy;

    let lifeOrb = document.createElementNS( SVG_NS, 'circle' );

    lifeOrb.setAttributeNS( null, 'cx', this.x );
    lifeOrb.setAttributeNS( null, 'cy', this.y );
    lifeOrb.setAttributeNS( null, 'r', this.radius );
    lifeOrb.setAttributeNS( null, 'fill', 'none' );
    lifeOrb.setAttributeNS(null, 'stroke', 'aquamarine');

    svg.appendChild( lifeOrb );

    const hitRightWall = this.x + this.radius >= this.boardWidth;
    const hitLeftWall = this.x - this.radius <= 0;

    if ( hitRightWall ) {
      this.leaveBoard();
    } else if ( hitLeftWall ) {
      this.leaveBoard();
    }
  }
}