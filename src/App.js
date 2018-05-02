import React, { Component } from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import SingleCampaign from "./components/SingleCampaign";
import data from './campaigns.json';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			itemsOnPage: [],
			page: 1,
		};
		this.itemsPerPage= 6;
	}

	handlePageChange = page => {
		const itemsOnPage = this.state.items.slice((page - 1) * this.itemsPerPage, (page - 1) * this.itemsPerPage + this.itemsPerPage);
		this.setState({ page, itemsOnPage });
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ items: data, itemsOnPage: data.slice(0, this.itemsPerPage), total: data.length });
		})
	}

	render() {
		const { page, total, itemsOnPage } = this.state;

		return (
			<div className="content-area">
				<h1 className="headline">Campaign overview</h1>
				<Header />
				{data && <div className="campaigns">
					{itemsOnPage.map(item => (<SingleCampaign
						key={item.id}
						item={item}
					/>))}
				</div>}
				<Pagination
					count={Math.ceil(total / this.itemsPerPage)}
					itemsPerPage={this.itemsPerPage}
					page={page}
					onPageChange={this.handlePageChange}
				/>
			</div>
		);
	}
}

export default App;