import React, { useEffect, useState } from 'react';

const SkillList = () => {
	const [skillsData, setSkillsData] = useState(null);

	useEffect(() => {
		fetch('/skills.json')
			.then(response => response.json())
			.then(data => setSkillsData(data))
			.catch(error => console.error('Error fetching JSON data:', error));
	}, []);

	if (!skillsData) {
		return <div>Loading skills...</div>;
	}

	return (
		<div className="p-10 text-zinc-300 font-mono">
			<div className="flex justify-center space-x-16">
				<div>
					<p className="text-l sm:text-xl mb-4">Languages</p>
					<ul className="list-none space-y-2">
						{skillsData.skills.Languages.map((skill, index) => (
							<li key={index} className="flex items-center text-zinc-400">
								<span className="text-zinc-600 mr-2">✔</span>{skill}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="text-l sm:text-xl mb-4">Software and Frameworks</h2>
					<ul className="list-none space-y-2">
						{skillsData.skills.Software.map((skill, index) => (
							<li key={index} className="flex items-center text-zinc-400">
								<span className="text-zinc-600 mr-2 text-l">✔</span>{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SkillList;
