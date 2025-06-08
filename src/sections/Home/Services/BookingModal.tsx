import React, { useState } from 'react';
import { CalendarIcon, UserIcon, MailIcon, CallIcon, MessageSquare } from '@/assets/svg';
import { formatDateToInputValue, formatFullDate } from '@/util/dateFormat';
import { db } from '@/lib/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

interface BookingModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedService: string;
}

export default function BookingModal({ isOpen, onClose, selectedService }: BookingModalProps) {
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [time, setTime] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		message: ''
	});
	const slots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

	const onChange = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!date || !time || !form.name || !form.email) {
			return alert("Please fill all required fields");
		}
		setIsSubmitting(true);

		try {
			await addDoc(collection(db, 'consultation'), {
				id: uuidv4(),
				...form,
				selectedService: selectedService,
				createdAt: serverTimestamp()
			});

			setForm({ name: '', email: '', phone: '', company: '', message: '' });
			setDate(undefined);
			setTime('');

			alert("Booking Submitted! We'll reach out soon.");
		} catch (err) {
			console.error('Error submitting contact:', err);
			alert('Something went wrong.');
		} finally {
			setIsSubmitting(false);
		}
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
			<div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg p-6">
				<h2 className="text-2xl font-bold text-center">Book Your Consultation</h2>
				<p className="text-center text-gray-600 mb-6">Service: <strong>{selectedService}</strong></p>

				<form onSubmit={onSubmit} className="space-y-6">
					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<h3 className="text-lg font-medium flex items-center">
								<UserIcon className="w-5 h-5 mr-2" /> Personal Info
							</h3>

							{/* Name */}
							<div>
								<label className="block text-sm font-medium">Full Name *</label>
								<input
									required
									type="text"
									value={form.name}
									onChange={e => onChange('name', e.target.value)}
									placeholder="Enter full name"
									className="w-full border p-2 rounded"
								/>
							</div>

							{/* Email */}
							<div className="relative">
								<label className="block text-sm font-medium">Email *</label>
								<div className="flex items-center">
									<MailIcon className="absolute left-3 top-[36px] w-4 h-4 text-gray-400" />
									<input
										required
										type="email"
										value={form.email}
										onChange={e => onChange('email', e.target.value)}
										placeholder="your@email.com"
										className="w-full border p-2 pl-10 rounded mt-1"
									/>
								</div>
							</div>

							{/* Phone */}
							<div className="relative">
								<label className="block text-sm font-medium">Phone</label>
								<CallIcon className="absolute left-3 top-[36px] w-4 h-4 text-gray-400" />
								<input
									type="tel"
									value={form.phone}
									onChange={e => onChange('phone', e.target.value)}
									placeholder="+977-98XXXXXXXX"
									className="w-full border p-2 pl-10 rounded mt-1"
								/>
							</div>

							{/* Company */}
							<div>
								<label className="block text-sm font-medium">Company (optional)</label>
								<input
									type="text"
									value={form.company}
									onChange={e => onChange('company', e.target.value)}
									placeholder="Company name"
									className="w-full border p-2 rounded mt-1"
								/>
							</div>
							{/* Message */}
							<div className="relative">
								<label className="block text-sm font-medium">Message</label>
								<MessageSquare className="absolute left-3 top-[36px] w-4 h-4 text-gray-400" />
								<textarea
									value={form.message}
									onChange={e => onChange('message', e.target.value)}
									placeholder="How may I help you?"
									rows={4}
									className="w-full border p-2 pl-10 rounded mt-1"
								/>
							</div>
						</div>

						{/* Date & Time */}
						<div className="space-y-4">
							<h3 className="text-lg font-medium flex items-center">
								<CalendarIcon className="w-5 h-5 mr-2" /> Schedule
							</h3>

							{/* Date Picker */}
							<div>
								<label className="block text-sm font-medium">Select Date *</label>
								<input
									required
									type="date"
									value={date ? formatDateToInputValue(date) : ''}
									onChange={e => setDate(e.target.valueAsDate!)}
									min={formatDateToInputValue(new Date())}
									className="w-full border p-2 rounded"
								/>
								<small className="text-xs text-gray-500">Mon–Fri only</small>
							</div>

							{/* Time Picker */}
							<div>
								<label className="block text-sm font-medium">Select Time *</label>
								<select
									required
									value={time}
									onChange={e => setTime(e.target.value)}
									className="w-full border p-2 rounded"
								>
									<option value="" disabled>Choose a time slot</option>
									{slots.map(s => (
										<option key={s} value={s}>{s}</option>
									))}
								</select>
							</div>

							{/* Summary */}
							{date && time && (
								<div className="p-4 border border-green-200 bg-green-50 rounded">
									<h4 className="font-medium text-primary mb-2">Summary</h4>
									<p><strong>Service:</strong> {selectedService}</p>
									<p><strong>Date:</strong> {formatFullDate(date)}</p>
									<p><strong>Time:</strong> {time}</p>
									<small className="text-xs text-gray-500">
										You’ll receive a calendar invite via email.
									</small>
								</div>
							)}
						</div>
					</div>

					{/* Actions */}
					<div className="flex justify-end gap-3 pt-4 border-t">
						<button type="button" onClick={onClose} className="px-4 py-2 border rounded hover:bg-gray-100">
							Cancel
						</button>
						<button
							type="submit"
							disabled={isSubmitting}
							className="px-4 py-2 bg-primary text-white rounded hover:bg-primary">
							{isSubmitting ? 'Your Booking is Processing...' : 'Book Consultation'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
