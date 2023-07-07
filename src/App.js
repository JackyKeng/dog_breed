import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import SearchPage from './page/SearchPage';
import NotFoundPage from './page/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
