import React from 'react';

const AboutMe = () => {
	return (
		<div id="about-me">
			<p className="mt-5 sm:mt-10 text-2xl sm:text-4xl text-zinc-300 font-mono">About Me</p>
			<div className="text-zinc-400 font-mono sm:ml-10 mt-4">
				<p>
					I am currently studying Computer Science at the University of Montreal (UdeM), with an expected graduation date in 2027 (BSc). Alongside my studies, I balance part-time work and a variety of personal interests, including:
				</p>
				<ul className="list-disc list-inside ml-4 mt-2">
					<li>Coding and exploring web frameworks like React.</li>
					<li>Learning tools like LaTeX and Notion.</li>
					<li>Engaging in mathematical problem-solving.</li>
					<li>Working out and staying physically healthy.</li>
				</ul>
				<p className="mt-4">
					I enjoy switching between different projects and concepts, finding the process of problem-solving both stimulating and rewarding.
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
