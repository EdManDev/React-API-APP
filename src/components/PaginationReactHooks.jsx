import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";

const PaginationReactHooks = () => {
	const [offset, setOffset] = useState(0);
	const [data, setData] = useState([]);
	const [perPage] = useState(2);
	const [pageCount, setPageCount] = useState(0);

	const getData = async () => {
		const res = await axios.get("http://localhost:5002/api/bootcamps/");
		// const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
		const data = res.data.data;
		const slice = data.slice(offset, offset + perPage);

		const postData = slice.map((item) => (
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
												<div>
													Total items: $
													{parseFloat(item.averageCost.toFixed(2))}
												</div>
											</span>
										</div>
									</h5>
									<span className="badge badge-dark mb-2">{item.address}</span>
									<p className="card-text">{item.description}</p>
									{/* <a href={item.website}> {item.website} </a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		));

		setData(postData);
		setPageCount(Math.ceil(data.length / perPage));
	};

	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		setOffset(selectedPage + 0);
	};

	useEffect(() => {
		getData();
	}, [offset]);

	return (
		<div className="App">
			{data}
			<ReactPaginate
				previousLabel={"prev"}
				nextLabel={"next"}
				breakLabel={"..."}
				breakClassName={"break-me"}
				pageCount={pageCount}
				marginPagesDisplayed={1}
				pageRangeDisplayed={2}
				onPageChange={handlePageClick}
				containerClassName={"pagination"}
				subContainerClassName={"pages pagination"}
				activeClassName={"active"}
			/>
		</div>
	);
};

export default PaginationReactHooks;
