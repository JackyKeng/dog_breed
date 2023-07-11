import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './page/MainPage';
import SearchPage from './page/SearchPage';
import NotFoundPage from './page/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { useSelector } from 'react-redux';

function App() {
	const showSpinner = useSelector(state => state.spinner.show);

	return (
		<div className="app-wrapper">
			<Header />
			<main className="content" id="content">
				<Routes>
					<Route path="/" element={<Navigate to="/search" />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
			<Spinner show={showSpinner} />
		</div>
	);
}

export default App;
