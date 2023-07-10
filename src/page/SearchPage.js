import React, { Component } from 'react';
import { Card, Container, FormControl, Table } from 'react-bootstrap';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Image from '../components/Image';

const columns = [
	{
		name: 'ID',
		selector: row => row.id,
		width: '80px'
	},
	{
		name: 'Name',
		selector: row => row.name,
		sortable: true
	},
	{
		id: 'datatable-header-image',
		name: 'Image',
		selector: row => <Image url={row.image.url} />,
		width: '300px',
	},
	{
		name: 'Height (Imperial)',
		selector: row => row.height.imperial,
		sortable: true
	},
	{
		name: 'Height (Metric)',
		selector: row => row.height.metric,
		sortable: true
	},
	{
		name: 'Lifespan',
		selector: row => row.life_span,
		sortable: true
	}
];

class SearchPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dogBreeds: null,

			filterSearch: null
		};

		this.filterTimeout = null;
	}

	componentDidMount() {
		this.dogBreeds_OnQuery();
	}

	dogBreeds_OnQuery = () => {
		const { filterSearch } = this.state;

		axios.get('https://api.thedogapi.com/v1/breeds').then(res => {
			let results = null;
			const dogBreeds = res.data;
			results = filterSearch
				? dogBreeds?.filter(row => row.name.toLowerCase().includes(filterSearch.toLowerCase()))
				: dogBreeds;

			this.setState({ dogBreeds: results });
		});
	};

	filterSearch_OnChange = e => {
		if (this.filterTimeout) clearTimeout(this.filterTimeout);

		this.setState({ filterSearch: e.target.value });

		const delay = setTimeout(() => {
			this.dogBreeds_OnQuery();
		}, 1000);
		this.filterTimeout = delay;
	};

	render() {
		return (
			<React.Fragment>
				<div className="flex-between mb-3">
					<h3 className="mb-0">Search</h3>
				</div>
				<Card>
					<Card.Body>
						<FormControl
							type="text"
							placeholder="Search by name"
							className="mb-3"
							onChange={this.filterSearch_OnChange}
						/>

						<DataTable
							columns={columns}
							data={this.state.dogBreeds || []}
							defaultSortFieldId={1}
							sortIcon={<AiOutlineArrowDown />}
							pagination
						/>
					</Card.Body>
				</Card>
			</React.Fragment>
		);
	}
}

export default SearchPage;
