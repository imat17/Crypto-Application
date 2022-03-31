import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Routes>
							<Route path='/' element={<Homepage />} />
							{/* <Route path='/exchanges' element={<Exchanges />} /> */}
							<Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
							<Route path='/crypto/:coinId' element={<CryptoDetails />} />
							<Route path='/news' element={<News />} />
						</Routes>
					</div>
				</Layout>
				<div className='footer'>
					<Typography.Title level={5} style={{ color: '#FFCB74', textAlign: 'center' }}>
						Cryptoverse <br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link style={{color: '#FFCB74'}} to='/'>Home</Link>
						<Link style={{color: '#FFCB74'}} to='/exchanges'>Exchanges</Link>
						<Link style={{color: '#FFCB74'}} to='/news'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
