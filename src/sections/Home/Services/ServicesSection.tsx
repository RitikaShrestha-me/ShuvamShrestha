import React, { useState } from 'react';
import { CheckCircleIcon, ArrowRightIcon, UsersIcon, LightbulbIcon, CalendarIcon } from '@/assets/svg';
import { Card, CardContent } from '@/components/Card'
import BookingModal from './BookingModal';

const ServicesSection = () => {
	const [isBookingOpen, setIsBookingOpen] = useState(false);
	const [selectedService, setSelectedService] = useState('');

	const services = [
		{
			id: 'free-guidance',
			title: 'Free Guidance',
			description: 'Complimentary consultation and support',
			icon: LightbulbIcon,
			color: 'bg-green-50 border-green-200',
			iconColor: 'text-green-600',
			features: [
				'New product Idea generation',
				'Mind Mapping',
				'Career Consultation',
				'Basics of Sales and Marketing'
			]
		}, {
			id: 'business',
			title: 'Creating a Business',
			description: 'Comprehensive business development solutions',
			icon: UsersIcon,
			color: 'bg-blue-50 border-blue-200',
			iconColor: 'text-blue-600',
			features: [
				'Brand consultation',
				'Customer segmentation',
				'Sales Strategy',
				'SWOT analysis',
				'Market Penetration'
			]
		},
		{
			id: 'it-solutions',
			title: 'IT Solutions',
			description: 'Complete technology solutions for your business',
			icon: LightbulbIcon,
			color: 'bg-purple-50 border-purple-200',
			iconColor: 'text-purple-600',
			features: [
				'Company Website',
				'Admin Management System',
				'E-commerce',
				'Use of AI for quick iteration',
				'Helping to create a dynamic team'
			]
		}
	];

	const handleBookService = (serviceTitle: string) => {
		setSelectedService(`${serviceTitle}`);
		setIsBookingOpen(true);
	};

	return (
		<section id='my-services' className="py-16 px-4 bg-background">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Book My Service
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Transform your business ideas into reality with our comprehensive service offerings.
						Choose the perfect solution for your needs.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{services.map((service) => {
						const IconComponent = service.icon;
						return (
							<Card
								key={service.id}
								className={`${service.color} border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
							>
								<CardContent>
									<div className="text-center pb-4">
										<div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
											<IconComponent className={`w-8 h-8 ${service.iconColor}`} />
										</div>
										<h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
										<p className="text-sm text-muted-foreground">{service.description}</p>
									</div>

									<div className="space-y-3 mt-4">
										{service.features.map((feature, index) => (
											<div key={index} className="flex items-start space-x-3">
												<CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
												<span className="text-sm text-foreground">{feature}</span>
											</div>
										))}
									</div>

									<button
										onClick={() => handleBookService(service.title)}
										className="w-full py-3 mt-4 text-white flex justify-center items-center bg-primary hover:bg-primary rounded-lg font-semibold transition duration-200 disabled:opacity-50"
									>
										Book Now
										<ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
									</button>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="text-center">
					<div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
						<CalendarIcon className="w-5 h-5 text-primary" />
						<span className="text-sm text-muted-foreground">
							Schedule a consultation that fits your timeline
						</span>
					</div>
				</div>
			</div>

			<BookingModal
				isOpen={isBookingOpen}
				onClose={() => setIsBookingOpen(false)}
				selectedService={selectedService}
			/>
		</section>
	);
};

export default ServicesSection;
