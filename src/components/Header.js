import React from 'react';

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full p-4 z-50 mt-4">
			<nav>
				<ul className="flex space-x-12 justify-center">
					<li>
						<a
							href="/"
							className="text-zinc-300 font-mono"
						>
							<p>Home</p>
						</a>
					</li>
					<li>
						<a
							href="/blog"
							className="text-zinc-300 font-mono"
						>
							<p>Blog</p>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
