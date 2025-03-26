import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './scss/reset.scss';
import Box from './components/Box.jsx';
import Main from './components/Main.jsx';
import Scroll01 from './components/Scroll01.jsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Main />} />
				<Route path="/box" element={<Box />} />
				<Route path="/scroll1" element={<Scroll01 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
