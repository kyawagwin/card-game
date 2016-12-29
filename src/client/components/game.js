import "./game.scss";

import React, {Component} from "react";

class GameContainer extends Component {
	render() {
		return <p>GAME CONTAINER!</p>;
	}
}

class GameSidebar extends Component {
	render() {
		return <p>GAME SIDEBAR</p>;
	}
}

export default {
	main: GameContainer,
	sidebar: GameSidebar
};