'use client'

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebaseConfig';
import {
	collection,
	getDocs,
	query,
	orderBy,
} from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/types/types';

export default function ViewBlogs() {
	const router = useRouter();
	const [blogs, setBlogs] = useState<BlogPost[]>([]);

	const handleRedirect = (index: number) => {
		router.push(`/blog/${index}`);
		localStorage.setItem('selectedBlog', JSON.stringify(blogs[index]));
	};
	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
				const snapshot = await getDocs(q);
				const data: BlogPost[] = snapshot.docs.map((doc) => {
					const docData = doc.data();
					return {
						id: doc.id,
						type: docData.type,
						title: docData.title,
						content: docData.content,
						imageUrl: docData.imageUrl,
						createdAt: docData.createdAt,
					};
				});
				setBlogs(data);
				localStorage.setItem('allBlogs', JSON.stringify(blogs));
			} catch (err) {
				console.error('Error fetching blogs:', err);
			}
		}; fetchBlogs();
	}, []);

	return (
		<div className="mt-20 p-6 md:p-10">
			<h1 className="text-3xl text-center font-bold text-gray-900 mb-6">My Blogs</h1>

			{blogs.length === 0 ? (
				<p className="text-gray-500">No blog posts yet.</p>
			) : (
				<div>
					<div className='grid grid-cols-2 px-16 gap-x-4 cursor-pointer'
						onClick={() => handleRedirect(0)}
					>
						{blogs?.[0].imageUrl && (
							<img
								src={`/blog-images/${blogs?.[0].imageUrl}`}
								alt={blogs?.[0].title}
								className="w-full h-80 object-cover rounded-lg border mt-2"
							/>
						)}
						<div className='p-4 flex flex-col justify-center'>
							<p className='text-sm text-teal-500 py-2'>{blogs?.[0].type}</p>
							<h2 className="text-4xl font-semibold text-gray-800 py-2 leading-10">{blogs?.[0].title}</h2>
							{/* <p className="text-base text-gray-500 mb-4 line-clamp-3">{blogs?.[0].content}</p> */}

							{blogs?.[0].createdAt && (
								<p className="text-sm text-gray-500 pt-4">
									Posted on {blogs?.[0].createdAt.toDate().toLocaleString()}
								</p>
							)}
						</div>
					</div>
					<div className="grid grid-cols-3 p-4 lg:p-12 gap-12">
						{blogs?.map((blog, index) => (
							index !== 0 &&
							<div
								key={blog?.id}
								className="bg-white cursor-pointer rounded-2xl hover:shadow-lg transition-shadow duration-200"
								onClick={() => handleRedirect(index)}
							>
								{blog?.imageUrl && (
									<img
										src={`/blog-images/${blog?.imageUrl}`}
										alt={blog?.title}
										className="w-full h-56 object-cover rounded-lg border mt-2"
									/>
								)}
								<div className='p-4'>
									<p className='text-sm text-teal-500 py-2'>{blog.type}</p>
									<h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
									<p className="text-base text-gray-500 mb-4 line-clamp-3">{blog.content}</p>

									{blog.createdAt && (
										<p className="text-sm text-gray-500 mb-2">
											Posted on {blog?.createdAt?.toDate()?.toLocaleString()}
										</p>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

