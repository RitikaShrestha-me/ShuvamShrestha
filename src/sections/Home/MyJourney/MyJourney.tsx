import { useEffect, useRef } from 'react';

export default function MyJourney() {
	const count = useRef([0, 0, 0, 0])

	useEffect(() => {
		let max = [2, 15, 50, 500]

		let counter = () => {
			count.current?.map((e, i) => {
				let range = max[i] - e;
				let increment = max[i] > e ? 1 : 0;
				let step = range !== 0 ? Math.abs(Math.floor(600 / range)) : 0;
				let timer = setInterval(() => {
					e += increment;
					count.current[i] = e
					if (count.current === max) {
						clearInterval(timer);
					}
				}, step);
			})
		}

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 100) {
				counter();
				// console.log(scrollPosition);
			}
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	let stats = [{
		title: 'Started working on a Product Based Project. Currently working for the ERP system with a focus to automate the operation of school and colleges. Recently completed an export based company’s website.',
		date: '2025',
		image: '/images/story6.jpeg'
	}, {
		title: 'Geared up fully on development of projects and team mobilization following an agile mindset. Utilizing Scrum and Kanban during the project effectiveness during my stay at webpoint solution.',
		date: '2024',
		image: '/images/story5.jpeg'
	}, {
		title: 'A major turn around in my career from full time Marketing personnel to a tech starter. Challenging myself to unlearn, re-learn and initiate new ideas to accelerate IT project management journey. Successfully completed Diploma in IT from Pearson Board facilitated by Webpoint Training Wing - Kingsway Academy.',
		date: '2023',
		image: '/images/story4.jpeg'
	}, {
		title: 'Result-driven Senior Marketing Officer with a strategic mindset, leading brand growth, student engagement, and enrollment initiatives to drive institutional success.',
		date: '2021',
		image: '/images/story3.jpeg'
	}, {
		title: 'Enrolled as an MBA student at Purbanchal University. Start of covid -19 period when I was actively involved into creative works and explored my extra curricular skills.',
		date: '2020',
		image: '/images/story2.jpeg'
	}, {
		title: 'My first job at National Life Insurance was truly a learning and exploring journey. Got a chance to refine myself as an extrovert personality with an immense boost towards public speaking and training through corporate experience.',
		date: '2018',
		image: '/images/story1.jpeg'
	}
	]

	return (
		<div id={'experience'} className="w-screen text-black mb-8">
			<div className='flex flex-col items-center my-16'>
				<p className="text-4xl text-center text-[#333333] w-156 font-bold">My Professional Growth Story</p>
			</div>
			<div className="flex overflow-x-auto scrollbar-hide mb-8 h-100 gap-4 mx-20">
				<div className='flex justify-center gap-5' style={{
					height: '415px',
					borderBottom: '1px solid #D1D1D1'
				}}>
					{stats?.map((stat, index) =>
						<div key={`stats-${index}`} className="h-96 text-center" style={{ width: '360px' }}>
							<div className='h-48 bg-cover' style={{ backgroundImage: `url(${stat.image})` }}></div>
							<div className='h-36 py-4 px-8'>
								<p className='font-bold text-lg'>{stat?.date}</p>
								<p className='text-sm text-justify h-24 overflow-auto'>{stat?.title}</p>
							</div>
							<div className='flex top-3.5 justify-center relative'>
								<div className='h-16 w-0.5 bg-primary'></div>
								<div className='absolute w-2 h-2 rounded-3xl -bottom-1 bg-primary'></div>
								<div className='absolute border-2 w-6 h-6 border-primary rounded-3xl -bottom-3'></div>
								{/* <div className='absolute border w-10 h-10 border-primary rounded-3xl -bottom-5'></div> */}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}