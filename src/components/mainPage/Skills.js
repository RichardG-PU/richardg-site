import React from 'react';
import SkillList from './SkillList';

const Skills = () => {
	return (
		<div id="skills">
			<p className="text-2xl sm:text-4xl mt-5 sm:mt-10 text-zinc-300 font-mono">Skills</p>
			<p className="text-zinc-400 font-mono">Here is an idea of what I can do in the form of a list. This list could be outdated.</p>
			<p className="text-zinc-400 font-mono">Fun fact: the text in the background is made with Kinematics, a canvas html tag and this list. I promise the words are not hardcoded, it's a json... <a href="/skills.json" className="text-indigo-400">It's in my /public dir so here's the proof</a></p>
			<SkillList />
		</div>
	);
};

export default Skills;