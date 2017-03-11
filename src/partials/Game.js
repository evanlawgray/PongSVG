import {
	SVG_NS,
	KEYS,
	GAMESETTINGS
} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import ExtraBall from './Extra-Ball';
import Fireball from './Fireball';
import Score from './Score';

export default class Game {

	constructor( element, width, height ) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.spaceBar = KEYS.spaceBar;
		this.paused = false;
		this.hasWinner = false;
		this.winner = '';

		this.boardGap = GAMESETTINGS.boardGap;
		this.paddleWidth = GAMESETTINGS.paddleWidth;
		this.paddleHeight = GAMESETTINGS.paddleHeight;

		this.fireballs = [];
		this.fireballCount = 0;

		this.gameElement = document.getElementById( this.element );

		document.addEventListener( 'keydown', event => {

			switch ( event.keyCode ) {
				case this.spaceBar:
					this.paused = !this.paused;
					break;
				case KEYS.player1Fire:
					this.makeFireball(this.paddle1);
					break;
				case KEYS.player2Fire:
					this.makeFireball(this.paddle2);
			}
		});

		this.board = new Board( this.width, this.height );

		this.makePaddle1();

		this.makePaddle2();

		this.makeBall1();

		this.makeBall2();

		this.makeBall3();

		this.player1Score = new Score( this.width / 2 - 70, 40, 40 );

		this.player2Score = new Score( this.width / 2 + 40, 40, 40 );
	}

	makeFireball(aggressor) {
		let firedBy = aggressor;
		this.fireballCount++;
		this.fireballs[this.fireballCount] = new Fireball(
			GAMESETTINGS.ballRadius,
			this.width,
			this.height,
			firedBy);
	}

	makePaddle1() {
		this.paddle1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(( this.height - this.paddleHeight ) / 2),
			KEYS.a,
			KEYS.z);
	}

	makePaddle2() {
		this.paddle2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			( this.width - this.boardGap - this.paddleWidth ),
			(( this.height - this.paddleHeight ) / 2),
			KEYS.up,
			KEYS.down);
	}

	makeBall1() {
		this.ball1 = new Ball(
			GAMESETTINGS.ballRadius,
			this.width,
			this.height
		);
	}

	makeBall2() {
		this.ball2 = new ExtraBall(
			GAMESETTINGS.ballRadius,
			this.width,
			this.height
		);
	}

	makeBall3() {
		this.ball3 = new ExtraBall(
			GAMESETTINGS.ballRadius,
			this.width,
			this.height
		);
	}

	render() {

		if ( this.paused ) {
			return
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS( SVG_NS, 'svg' );
		svg.setAttributeNS( null, 'width', this.width );
		svg.setAttributeNS( null, 'height', this.height );
		svg.setAttributeNS( null, 'viewBox', `0 0 ${this.width} ${this.height}` );
		this.gameElement.appendChild( svg );

		this.board.render( svg );
		this.paddle1.render( svg );
		this.paddle2.render( svg );
		this.ball1.render( svg, this.paddle1, this.paddle2 );
		this.player1Score.render( svg, this.paddle1.score );
		this.player2Score.render( svg, this.paddle2.score );

		if ( !( this.fireballs === [] ) && !( this.fireballCount === 0 )) {

			for (var i = 1 ; i <= this.fireballCount; i++) {
				this.fireballs[i].render ( svg, this.paddle1, this.paddle2 );
			}
		}


		if ( this.paddle1.score >= 5 || this.paddle2.score >= 5 ) {

			this.ball2.render( svg, this.paddle1, this.paddle2 );
		}

		if ( this.paddle1.score >= 10 || this.paddle2.score >= 10 ) {

			this.ball3.render( svg, this.paddle1, this.paddle2 );
		}

		if ( this.paddle1.score >= 20 ) {

			this.winner = 'Player 1';
			this.hasWinner = true;

		} else if ( this.paddle2.score >= 20 ) {

			this.winner = 'Player 2';
			this.hasWinner = true;
		}
	}
}