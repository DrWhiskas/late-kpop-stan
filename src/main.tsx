import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const root = createRoot(document.getElementById('root')!);

root.render(
	<StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</HashRouter>
	</StrictMode>
);
