import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

function App() {
	return (
		<div className="relative bg-background">
			<Router>
				<Header />
				<ParticleCanvas />
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/blog/:postId" element={<BlogPost />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
