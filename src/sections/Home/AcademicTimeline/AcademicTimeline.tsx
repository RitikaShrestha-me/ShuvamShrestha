export default function AcademicTimeline() {
	const education = [
		{ title: "Master of Business Administration - Finance", university: "Purbanchal University", duration: "2020 - 2024", desc1: "GPA: 3.61", desc2: "Distinction holder from 2020 Fall batch", desc3: "Conducted Case Study on Sastodeal - Ecommerce platform" },
		{ title: "Diploma in Information Technology", university: "Pearson Board", duration: "2023 - 2023", desc1: "Grade: Merit", desc2: "Specialisation: Project Management", desc3: "Awarded with Full time role as Project Manager after completion" },
		{ title: "Bachelor of Business Management - Finance", university: "Davangere University", duration: "2015 - 2018", desc1: "Percentage obtained- 88.5% Grade", desc2: "Grade - 1st Class with Distinction", desc3: "Award: University Rank Holder" },
		{ title: "Higher Secondary Education - Management", university: "Sainik Awasiya Mahavidhyalaya", duration: "2012 - 2014", desc1: "Percentage obtained- 76.10%", desc2: "Grade - Distinction", desc3: "Award: Top 5 Candidate" },
	];

	return (
		<div className="container mx-auto px-6 lg:px-20 py-12">
			<h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">My Academic Foundation</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{education.map((item, index) => (
					<div key={index} className="relative">
						<div className='absolute w-2 h-2 rounded-3xl bg-primary left-[-4px] top-3'></div>
						<div className='absolute border-2 w-6 h-6 border-primary rounded-3xl left-[-12px] top-[4px]'></div>
						<h3 className="text-xl pl-6 font-semibold text-primary">{item.title}</h3>
						<div className="pl-6 border-l-2 border-primary">
							<p className="text-gray-700 pt-1 font-medium">{item.university}<span className="text-gray-500"> - ({item.duration})</span></p>
							<p className="text-gray-600 mt-2 text-sm">{item.desc1}</p>
							<p className="text-gray-600 mt-1 text-sm">{item.desc2}</p>
							<p className="text-gray-600 mt-1 text-sm">{item.desc3}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}