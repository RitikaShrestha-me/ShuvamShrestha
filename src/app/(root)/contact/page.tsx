'use client';

import { AddressIcon, CallIcon, MailIcon } from '@/assets/svg';
import { EMAIL_ID } from '@/constants/consts';
import React, { useState } from "react";
import { db } from '@/lib/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	name: '',
	email: '',
	phone: '',
	budget: '',
	message: ''
};

const ContactForm = () => {
	const [contact, setContact] = useState(initialState);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async () => {
		const { name, email, phone, budget, message } = contact;

		if (!name || !email || !phone || !budget || !message) {
			alert('Please fill in all the fields.');
			return;
		}

		setIsSubmitting(true);

		try {
			await addDoc(collection(db, 'contact'), {
				id: uuidv4(),
				...contact,
				createdAt: serverTimestamp()
			});

			setContact({
				name: '',
				email: '',
				phone: '',
				budget: '',
				message: ''
			});

			alert('Contact submitted!');
		} catch (err) {
			console.error('Error submitting contact:', err);
			alert('Something went wrong.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full py-10 mb-8 mt-20">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-2xl font-bold text-center mb-14">
					Let&apos;s Discuss Your Project
				</h2>
				<div className="flex shadow-lg flex-col lg:flex-row rounded-xl">
					{/* Contact Information */}
					<div className="bg-primary text-xs md:text-sm text-white px-[40px] lg:px-[60px] py-[60px] lg:py-[90px] rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl">
						<div className="space-y-6">
							{/* Call Me */}
							<div className="flex items-center bg-white text-primary rounded-lg p-4 gap-4 shadow-md">
								<div className='h-14 w-14 bg-primary rounded-xl text-white flex justify-center items-center'><CallIcon /></div>
								<div>
									<p className="text-gray-500">Call me</p>
									<p className="text-neutral">{process.env.NEXT_PUBLIC_PHONE_NUMBER}</p>
								</div>
							</div>
							{/* Email Me */}
							<div className="flex items-center bg-white text-primary rounded-lg p-4 gap-4 shadow-md">
								<div className='h-14 w-14 bg-primary rounded-xl text-white flex justify-center items-center'><MailIcon height={20} width={26} /></div>
								<div>
									<p className="text-gray-500">Email me</p>
									<p className="text-neutral">{EMAIL_ID}</p>
								</div>
							</div>
							{/* Address */}
							<div className="flex items-center bg-white rounded-lg p-4 gap-4 shadow-md">
								<div className='h-14 w-14 bg-primary rounded-xl flex justify-center items-center'><AddressIcon /></div>
								<div>
									<p className="text-gray-500">Address</p>
									<p className="text-neutral">Kathmandu, Nepal</p>
								</div>
							</div>
						</div>
					</div>
					{/* Form Section */}
					<div className="bg-[#F2EBDB] px-5 py-11 md:px-[60px] md:py-[80px] w-full rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl">
						<form className="space-y-4 lg:space-y-6">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
								<input
									type="text"
									value={contact.name}
									placeholder="Full name"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
									onChange={(evt) => setContact({ ...contact, name: evt.target.value?.toString() })}
								/>
								<input
									type="email"
									value={contact.email}
									placeholder="Your email"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
									onChange={(evt) => setContact({ ...contact, email: evt.target.value?.toString() })}
								/>
							</div>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
								<input
									type="text"
									value={contact.phone}
									placeholder="Phone number"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
									onChange={(evt) => setContact({ ...contact, phone: evt.target.value?.toString() })}
								/>
								<input
									type="text"
									value={contact.budget}
									placeholder="Budget"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
									onChange={(evt) => setContact({ ...contact, budget: evt.target.value?.toString() })}
								/>
							</div>
							<textarea
								rows={4}
								placeholder="Message"
								value={contact.message}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
								onChange={(evt) => setContact({ ...contact, message: evt.target.value?.toString() })}
							></textarea>
							<div className="flex justify-end">
								<button
									onClick={handleSubmit}
									disabled={isSubmitting}
									className="bg-primary h-[50px] flex items-center justify-center text-xs w-full md:w-fit text-white md:py-2 md:px-4 rounded-lg hover:bg-primary-focus transition">
									{isSubmitting ? 'Submitting...' : 'Submit'} Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
