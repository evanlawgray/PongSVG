import {SVG_NS, KEYS, GAMESETTINGS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.spaceBar = KEYS.spaceBar;
		this.paused = false;

		this.boardGap = GAMESETTINGS.boardGap;
		this.paddleWidth = GAMESETTINGS.paddleWidth;
		this.paddleHeight = GAMESETTINGS.paddleHeight;
	
		this.gameElement = document.getElementById(this.element);

		document.addEventListener('keydown', event => {

			switch (event.keyCode) {
        		case this.spaceBar:
         			this.paused = !this.paused;
          		break;
        	}
		});

		this.board = new Board(this.width, this.height);

		this.paddle1 = new Paddle(
			this.height,
			this.paddleWidth, 
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight)/2),
			KEYS.a,
			KEYS.z
		);

		this.paddle2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight, 
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight)/2),
			KEYS.up,
			KEYS.down
		);

		this.ball = new Ball(
			GAMESETTINGS.ballRadius,
			this.width,
			this.height
		);
	}

	render() {

		if (this.paused) {return}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg, this.paddle1, this.paddle2);
	}

}