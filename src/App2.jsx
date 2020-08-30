import React, { Component } from "react";
import axios from "axios";
import Spinner from "./spinner.gif";
import "./App.css";

class Api2 extends Component {
	state = {
		users: [],
		isLoading: true,
		errors: null,
	};

	getUsers() {
		axios
			.get("https://randomuser.me/api/?results=5")
			.then((response) =>
				response.data.results.map((user) => ({
					image: `${user.picture.thumbnail}`,
					name: `${user.name.first}`,
					lastname: `${user.name.last}`,
					username: `${user.login.username}`,
					email: `${user.email}`,
					country: `${user.location.country}`,
					phone: `${user.phone}`,
					cell: `${user.cell}`,
				}))
			)
			.then((users) => {
				this.setState({
					users,
					isLoading: false,
				});
			})
			.catch((error) => this.setState({ error, isLoading: false }));
	}

	componentDidMount() {
		this.getUsers();
	}

	render() {
		const { isLoading, users } = this.state;
		return (
			<div>
				<h1>Api2</h1>
				<h2>Random User</h2>
				<div>
					{!isLoading ? (
						users.map((user) => {
							const {
								image,
								username,
								name,
								lastname,
								email,
								phone,
								country,
								cell,
							} = user;
							return (
								<div key={username}>
									<div>
										<img src={image} alt={name} /> My Picture
									</div>
									<div>
										Name: <p>{name}</p>
									</div>
									<div>
										LastName:<p>{lastname}</p>
									</div>
									<div>
										Email:<p>{email}</p>
									</div>
									<div>
										Phone:<p>{phone}</p>
									</div>
									<div>
										Country:<p>{country}</p>
									</div>
									<div>
										Cellullar:<p>{cell}</p>
									</div>
									<hr />
								</div>
							);
						})
					) : (
						// Spinner Here
						<div className="App">
							<img
								src={Spinner}
								alt="loading..."
								style={{ width: "200px", margin: "auto", display: "block" }}
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Api2;

// ======================
