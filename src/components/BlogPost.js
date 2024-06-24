import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

function BlogPost() {
	const { postId } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const docRef = doc(db, "posts", postId);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					const postData = docSnap.data();
					const date = postData.date.toDate();
					setPost({ id: docSnap.id, ...postData, date: date });
				} else {
					console.log("No such document!");
				}
			} catch (error) {
				console.error("Error fetching post:", error);
			}
		};

		fetchPost();
	}, [postId]);

	if (!post) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-col z-10 p-4 mt-14 w-9/12 sm:w-3/12 content-center self-center">
				<div className="mt-28 text-zinc-300 font-mono">
					<h1 className="text-4xl sm:text-2xl">{post.title}</h1>
					<p className="mb-4 text-zinc-500">{post.date.toLocaleDateString()}</p>
					<div dangerouslySetInnerHTML={{ __html: post.content }} />
				</div>
			</div>
		</div>
	);
}

export default BlogPost;
