import React, {Component} from "react";

import "./app.scss";

class AppContainer extends Component {
	componentDidMount() {
		console.log("hey there 1");
	}

	render() {
		return <h1>Hello World 123</h1>;
	}
}

export default AppContainer;