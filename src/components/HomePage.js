import React from 'react';
import AboutMe from './mainPage/AboutMe';
import Skills from './mainPage/Skills';

const HomePage = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col z-10 p-4 mt-14 sm:w-7/12 w-9/12 content-center self-center">
				<div className="mt-28">
					<p className="text-4xl sm:text-8xl text-zinc-300 font-mono">Richard Gajda</p>
					<p className="text-zinc-400 font-mono">I make stuff</p>
				</div>
				<p className="mt-5 sm:mt-10 text-2xl text-zinc-300 font-mono">Computer science student @ UdeM</p>
				<p className="text-zinc-400 font-mono">I use this site as a way to present myself and might post some of my progress in the <a href="/blog" className="text-indigo-400">Blog</a> here and then.</p>
				<AboutMe />
				<Skills />
			</div>
		</div>
	);
};

export default HomePage;