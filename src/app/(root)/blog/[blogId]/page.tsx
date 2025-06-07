'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/types/types';

export default function BlogDetail() {
	const [blog, setBlog] = useState<BlogPost | null>(null);
	const router = useRouter();

	useEffect(() => {
		const storedBlog = localStorage.getItem('selectedBlog');
		if (storedBlog) {
			setBlog(JSON.parse(storedBlog));
		} else {
			router.push('/blogs'); // fallback redirect
		}
	}, [router]);

	if (!blog) return <p className="p-8">Loading blog...</p>;

	const milliseconds = (blog?.createdAt?.seconds || 0) * 1000 + Math.floor((blog?.createdAt?.nanoseconds || 0) / 1000000);
	const date = new Date(milliseconds);

	return (
		<div className="max-w-3xl mx-auto px-4 py-20 mt-10">
			<p className="text-sm text-teal-500 mb-6 text-center">
				{blog.type} • {date?.toLocaleDateString()}, {date?.toLocaleTimeString()}
			</p>
			<h1 className="text-4xl text-center font-bold mb-4">{blog.title}</h1>
			{blog.imageUrl && (<img
				src={`/blog-images/${blog.imageUrl}`}
				alt={blog.title}
				className="w-full h-80 object-cover rounded-lg border mt-2 mb-6"
			/>)}
			<p className="text-lg leading-relaxed text-justify">{blog.content}</p>
		</div>
	);
}
