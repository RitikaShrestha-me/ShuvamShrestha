import { useEffect, useRef } from 'react';

export default function MyJourney() {
	let stats = [{
		title: 'Driving Innovation: ERP Development & Digital Transformation',
		description: 'Started working on a Product Based Project. Currently working for the ERP system with a focus to automate the operation of school and colleges. Recently completed an export based company’s website.',
		date: '2025',
		image: '/images/story6.jpeg',
	}, {
		title: 'Agile Leadership & Project Mobilization',
		description: 'Geared up fully on development of projects and team mobilization following an agile mindset. Utilizing Scrum and Kanban during the project effectiveness during my stay at webpoint solution.',
		date: '2024',
		image: '/images/story5.jpeg',
	}, {
		title: 'Career Pivot: From Marketing to Tech',
		description: 'A major turn around in my career from full time Marketing personnel to a tech starter. Challenging myself to unlearn, re-learn and initiate new ideas to accelerate IT project management journey. Successfully completed Diploma in IT from Pearson Board facilitated by Webpoint Training Wing - Kingsway Academy.',
		date: '2023',
		image: '/images/story4.jpeg',
	}, {
		title: 'Strategic Marketing & Institutional Growth',
		description: 'Result-driven Senior Marketing Officer with a strategic mindset, leading brand growth, student engagement, and enrollment initiatives to drive institutional success.',
		date: '2021',
		image: '/images/story3.jpeg',
	}, {
		title: 'MBA Journey & Creative Exploration',
		description: 'Enrolled as an MBA student at Purbanchal University. Start of covid -19 period when I was actively involved into creative works and explored my extra curricular skills.',
		date: '2020',
		image: '/images/story2.jpeg'
	}, {
		title: 'Corporate Foundations & Public Speaking Growth',
		description: 'My first job at National Life Insurance was truly a learning and exploring journey. Got a chance to refine myself as an extrovert personality with an immense boost towards public speaking and training through corporate experience.',
		date: '2018',
		image: '/images/story1.jpeg'
	}
	]

	return (
		<div id={'experience'} className="w-screen text-black mb-8">
			<div className='flex flex-col items-center my-12'>
				<p className="text-4xl text-center text-[#333333] font-bold lg:w-156">My Professional Growth Story</p>
			</div>
			<div className="flex overflow-x-auto scrollbar-hide h-[488px] gap-4 mx-4 lg:mx-20">
				<div className='flex justify-center gap-5' style={{
					height: '447px',
					borderBottom: '1px solid #D1D1D1'
				}}>
					{stats?.map((stat, index) =>
						<div key={`stats-${index}`} className="h-96 text-center" style={{ width: '360px' }}>
							<div className='h-52 bg-cover' style={{ backgroundImage: `url(${stat.image})` }}></div>
							<div className='h-40 py-4 px-2 lg:px-8'>
								<p className='text-md leading-5 mb-2 font-bold text-center h-[41px] overflow-auto'>{stat?.title}</p>
								<p className='text-sm text-justify h-[100px] overflow-auto'>{stat?.description}</p>
							</div>
							<div className='flex top-[18px] justify-center relative'>
								<div className='h-[60px] w-0.5 bg-primary'></div>
								<div className='absolute w-2 h-2 rounded-3xl -bottom-1 bg-primary'></div>
								<div className='absolute border-2 w-6 h-6 border-primary rounded-3xl -bottom-3'></div>
								{/* <div className='absolute border w-10 h-10 border-primary rounded-3xl -bottom-5'></div> */}
								<p className='font-bold absolute -bottom-9 w-full text-sm'>{stat?.date}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}