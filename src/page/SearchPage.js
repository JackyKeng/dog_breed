import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl } from 'react-bootstrap';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Image from '../components/Image';
import { debounce } from '../utils/Utilities';
import { useDispatch } from 'react-redux';
import { showSpinner, hideSpinner } from '../features/spinnerSlice';
import { showNotyf } from '../components/Notfy';

const columns = [
	{
		name: 'ID',
		selector: row => row.id,
		cell: props => {
			return <div data-testid="test-datatable-id">{props.id}</div>;
		},
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
		width: '300px'
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

const VALID_ENDPOINT = 'https://api.thedogapi.com/v1/breeds';
const INVALID_ENDPOINT = 'https://api.thedogapi.com/v1/breed';

const SearchPage = () => {
	const [url, setUrl] = useState(VALID_ENDPOINT);
	const [dogBreeds, setDogBreeds] = useState([]);
	const [filterSearch, setFilterSearch] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		dogBreeds_OnQuery();
	}, [filterSearch, url]);

	const dogBreeds_OnQuery = () => {
		dispatch(showSpinner());
		axios
			.get(url)
			.then(res => {
				let results = null;
				const dogBreeds = res.data;
				results = filterSearch
					? dogBreeds?.filter(row => row.name.toLowerCase().includes(filterSearch.toLowerCase()))
					: dogBreeds;

				setDogBreeds(results);

				dispatch(hideSpinner());
			})
			.catch(e => {
				console.log(e);
				showNotyf(new Error('System Error, please try again later'));
				dispatch(hideSpinner());
				setDogBreeds([]);
			});
	};

	const filterSearch_OnChange = debounce(e => {
		setFilterSearch(e.target.value);
	});

	return (
		<React.Fragment>
			<div className="flex-between mb-3" data-testid="test-search-container">
				<h3 className="mb-0">Search</h3>
			</div>
			<Card>
				<Card.Body>
					<div className="mb-3">
						<Button
							className="me-3"
							onClick={() => setUrl(VALID_ENDPOINT)}
							disabled={url === VALID_ENDPOINT}
						>
							Test Valid API
						</Button>
						<Button onClick={() => setUrl(INVALID_ENDPOINT)} disabled={url === INVALID_ENDPOINT}>
							Test Invalid API
						</Button>
					</div>

					<FormControl
						id="formtext"
						type="text"
						placeholder="Search by name"
						className="mb-3"
						onChange={filterSearch_OnChange}
						data-testid="test-filter-search"
					/>

					<DataTable
						columns={columns}
						data={dogBreeds || []}
						defaultSortFieldId={1}
						sortIcon={<AiOutlineArrowDown />}
						pagination
					/>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
};

export default SearchPage;
