'use client';

import { useState } from 'react';
import { db } from '@/lib/firebaseConfig';
import {
	collection,
	addDoc,
	serverTimestamp
} from 'firebase/firestore';

export default function AddBlog() {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [type, setType] = useState<string>('');
	const [imageUrl, setImageUrl] = useState<string>('');
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [isVerified, setIsVerified] = useState(false);
	const [passcode, setPasscode] = useState('');

	const handleSubmit = async () => {
		if (!title || !content || !imageUrl || !type) {
			alert('Please fill in all title, type, content and image name.');
			return;
		}

		setIsUploading(true);

		try {
			await addDoc(collection(db, 'blogs'), {
				title,
				type,
				content,
				imageUrl,
				createdAt: serverTimestamp()
			});

			alert('Blog post submitted!');
			setTitle('');
			setContent('');
			setType('');
			setImageUrl('');
		} catch (err) {
			console.error('Error uploading blog:', err);
			alert('Something went wrong.');
		} finally {
			setIsUploading(false);
		}
	};

	const verifyPasscode = () => {
		if (passcode === process.env.NEXT_PUBLIC_PASSCODE) {
			setIsVerified(true)
		}
	}

	return (
		<>
			{!isVerified ?
				<div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8 mt-32 mb-8 space-y-6">
					<input
						type="text"
						placeholder="Enter Passcode"
						value={passcode}
						onChange={(e) => setPasscode(e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>

					<button
						onClick={verifyPasscode}
						className="w-full py-3 mt-4 text-white bg-primary hover:bg-primary rounded-lg font-semibold transition duration-200 disabled:opacity-50"
					>
						Submit Passcode
					</button>
				</div>
				:
				<div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8 mt-28 mb-8 space-y-6">
					<h1 className="text-2xl font-bold text-gray-900">Add a Blog Post</h1>

					<input
						type="text"
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>

					<input
						type="text"
						placeholder="Type"
						value={type}
						onChange={(e) => setType(e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>

					<textarea
						placeholder="Content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
						rows={6}
					/>

					<input
						type="text"
						placeholder="Image Url"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>

					{/*<div>
				<label className="block mb-1 text-sm font-medium text-gray-700">Upload Cover Image</label>
				 <input
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-primary file:text-primary
        hover:file:bg-blue-100"
				/> 
			</div>*/}

					<button
						onClick={handleSubmit}
						disabled={isUploading}
						className="w-full py-3 mt-4 text-white bg-primary hover:bg-primary rounded-lg font-semibold transition duration-200 disabled:opacity-50"
					>
						{isUploading ? 'Uploading...' : 'Submit Blog'}
					</button>
				</div>
			}
		</>
	);
}
