import React from "react";

const achievements = [
	{
		id: 1,
		image: "/images/certificates/BAFundamentals.png",
		description: "Business Analytics Fundamentals - Udemy",
	},
	{
		id: 2,
		image: "/images/certificates/JiraScrumProject.png",
		description: "Create Jira Scrum Project - Coursera",
	},
	{
		id: 3,
		image: "/images/certificates/BA&PMCollab.png",
		description: "Business Analytics and Project Management Collaboration - LinkedIn",
	},
	{
		id: 4,
		image: "/images/certificates/Tableau.png",
		description: "Tableau A-Z - Udemy",
	},
	{
		id: 5,
		image: "/images/certificates/PowerBI.png",
		description: "Power BI Visualization - Great Learning",
	},
];

const getCertificateDom = (id: number, image: string, description: string, height: string, width: string) => (
	<div key={id} className='relative flex justify-center'
		style={{ height: height, width: width }}>
		<div
			style={{ backgroundImage: `url(${image})`, height: height, width: width }}
			className="bg-contain bg-center"
		/>
		<div className="absolute flex w-full justify-center bottom-[-30px]">
			<p className="text-base-100 h-12 w-[80%] rounded-md px-2 flex items-center justify-center bg-primary text-xs">{description}</p>
		</div>
	</div>
)

const Achievements = () => {
	return (
		<div id='certificate' className="py-10 w-full">
			<div className="max-w-6xl px-4 mx-auto text-center">
				<h2 className="text-2xl font-bold mb-8">Achievements & Credentials</h2>
				<div className="flex container gap-6">
					<div className='flex flex-col flex-1 gap-12'>
						{getCertificateDom(
							achievements[0]?.id,
							achievements[0]?.image,
							achievements[0]?.description,
							"208px",
							"275px"
						)}
						{getCertificateDom(
							achievements[1]?.id,
							achievements[1]?.image,
							achievements[1]?.description,
							"208px",
							"275px"
						)}
					</div>
					<div className='flex-auto flex justify-center items-center'>
						{getCertificateDom(
							achievements[2]?.id,
							achievements[2]?.image,
							achievements[2]?.description,
							"365px",
							"480px"
						)}
					</div>
					<div className='flex flex-col flex-1 gap-12'>
						{getCertificateDom(
							achievements[3]?.id,
							achievements[3]?.image,
							achievements[3]?.description,
							"208px",
							"275px"
						)}
						{getCertificateDom(
							achievements[4]?.id,
							achievements[4]?.image,
							achievements[4]?.description,
							"208px",
							"275px"
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
