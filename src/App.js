import React, { Component } from "react";
import "./App.css";
import Spinner from "./spinner.gif";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			// fetch("http://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json
				});
			});
	}

	render() {
		var { isLoaded, items } = this.state;
		if (!isLoaded) {
			return (
				<div className="App">
					<img src="" alt="" />
					<img src={Spinner} alt="loading..." style={{ width: "200px", margin: "auto", display: "block" }} />
				</div>
			);
		} else {
			return (
				<div>
					<div className="Div">
						<div className="App">
							<h2>This is the Data from the API</h2>
						</div>

						{items.map(item =>
							<div>
								<div key={item.id}>
									<hr />
									<div>
										ID:<p> {item.id}</p>
									</div>
									<div>
										nombre:<p> {item.name}</p>
									</div>
									<div>
										Email: <p>{item.email}</p>
									</div>
									<div>
										Username:
										<p>{item.username}</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			);
		}
	}
}
