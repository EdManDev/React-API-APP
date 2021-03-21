import React from "react";

// import bootcamps from "../_data/bootcamps";
const bootcamps = require("../_data/bootcamps.json");
// const names = ["whale", "squid", "turtle", "coral", "starfish"];

const bootcampsTry = () => {
	return (
		<div>
			<h1>Bootcamps</h1>
			<div>
				{bootcamps.data.map((item) => (
					<div>
						<div key={item.id}>
							<img src={item.photo} className="card-img" alt="..." />
							<div>
								<strong>Name :</strong> {item.name}
							</div>
							<div>
								<strong>Cost Average :</strong> {item.averageCost}
							</div>
							<div>
								<strong>Address :</strong> {item.address}
							</div>
							<div>
								<strong> Description: </strong> Decription {item.description}
							</div>
							<strong>Location: </strong>
							<ul>
								<li>
									<strong>type: </strong> {item.location.type}
								</li>
								<li>
									<strong>coordinates: </strong> {item.location.coordinates}
								</li>
								<li>
									<strong>formattedAddress: </strong>
									{item.location.formattedAddress}
								</li>
								<li>
									<strong>street: </strong>
									{item.location.street}
								</li>
								<hr />
								<li>
									<strong>careers: </strong>
									{item.careers}
								</li>
								<hr />
								<li>
									<strong>courses: </strong>
									{item.courses.title}
								</li>
							</ul>
							<div></div>
						</div>
						<hr />
						<hr />
					</div>
				))}
			</div>
			<div>
				{/* <div>
					{bootcamps.data.map((item) => (
						<div>
							<div className="col-md-8">
								<div key={item.id}>
									<div className="card mb-3">
										<div className="row no-gutters">
											<div className="col-md-4">
												<img src={item.photo} className="card-img" alt="..." />
											</div>
											<div className="col-md-8">
												<div className="card-body">
													<h5 className="card-title">
														<div to="/devworksbootcamp">
															{item.name}
															<span className="float-right badge badge-success">
																{item.averageCost}
															</span>
														</div>
													</h5>
													<span className="badge badge-dark mb-2">
														{item.address}
													</span>
													<p className="card-text">{item.description}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div> */}
			</div>
			<ul>{/* {names.map((name) => (
					<li key={name}> {name} </li>
				))} */}</ul>
		</div>
	);
};

export default bootcampsTry;
