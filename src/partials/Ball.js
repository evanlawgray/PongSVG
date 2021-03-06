import {
  SVG_NS
} from '../settings';

export default class Ball {
  constructor( radius, boardWidth, boardHeight ) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();

    this.ping = new Audio( '../../public/sounds/pong-03.wav' );
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;

    while ( this.vy === 0 ) {

      //Generates a number between -5 and 5
      this.vy = Math.floor( Math.random() * 10 - 5 );
    }

    this.vx = this.direction * ( 6 - Math.abs( this.vy ));
  }

  scoreGoal( player ) {
    player.score++;
    this.reset();
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
        this.vx = -this.vx;
        this.ping.play();
     }

    } else {
      if (
        this.paddleCollisionCheck( 'player1', player1.coordinates( player1.x, player1.y, player1.width, player1.height ))
        && player1.height > 30
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

    let ball = document.createElementNS( SVG_NS, 'circle' );

    ball.setAttributeNS( null, 'cx', this.x );
    ball.setAttributeNS( null, 'cy', this.y );
    ball.setAttributeNS( null, 'r', this.radius );
    ball.setAttributeNS( null, 'fill', 'white' );

    svg.appendChild( ball );

    const rightGoal = this.x + this.radius >= this.boardWidth;
    const leftGoal = this.x - this.radius <= 0;

    if ( rightGoal ) {
      this.direction = -1;
      this.scoreGoal( paddle1 );
    } else if ( leftGoal ) {
      this.direction = 1;
      this.scoreGoal( paddle2 );
    }
  }
}
