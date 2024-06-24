import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function BlogPage() {
	const [skillsData, setSkillsData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = [];

			try {
				const querySnapshot = await getDocs(collection(db, "posts"));
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					const date = data.date.toDate();
					posts.push({ id: doc.id, ...data, date: date });
				});

				posts.reverse();

				setSkillsData(posts);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};

		fetchPosts();
	}, []);

	const handlePostClick = (postId) => {
		navigate(`/blog/${postId}`);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-col z-10 p-4 mt-14 w-9/12 sm:w-3/12 content-center self-center">
				<div className="mt-28">
					<p className="text-4xl sm:text-2xl text-zinc-300 font-mono">Blog</p>
					<div className="text-zinc-300 mt-5 font-mono">
						{skillsData.length > 0 ? (
							<ul>
								{skillsData.map((post) => (
									<li key={post.id} className="flex space-x-5" onClick={() => handlePostClick(post.id)}>
										<p>{post.date.toLocaleDateString()}</p>
										<p>{post.title}</p>
									</li>
								))}
							</ul>
						) : (
							<p>Loading...</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogPage;
