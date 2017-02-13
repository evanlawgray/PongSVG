import './styles/game.css';
import Game from './partials/Game'

// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {

	if (game.hasWinner === true) {
		let mainHeader = document.getElementById("main-header");
		mainHeader.innerHTML = `Winner : ${game.winner}!`;
		mainHeader.className = `flashing`;
		return;
	}
	game.render();
	requestAnimationFrame(gameLoop);
})();