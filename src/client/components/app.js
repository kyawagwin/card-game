import React, {Component} from "react";

import "./app.scss";

class AppContainer extends Component {
	componentDidMount() {
		console.log("hey there 1");
	}

	render() {
		const {main, sidebar} = this.props;

		return (
			<div className={`c-application`}>
				<div className="inner">
					<div className="sidebar">
						{sidebar}
					</div>
					<div className="main">
						{main}
					</div>
				</div>
			</div>
		);
	}
}

export default AppContainer;