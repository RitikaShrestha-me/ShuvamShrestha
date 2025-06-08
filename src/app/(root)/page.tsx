'use client';

import Hero from "@/sections/Home/Hero/Hero";
import MyJourney from "@/sections/Home/MyJourney/MyJourney";
import AcademicTimeline from "@/sections/Home/AcademicTimeline/AcademicTimeline";
import Toolbox from '@/sections/Home/Toolbox/Toolbox';
import ExpertiseShowcase from '@/sections/Home/ExpertiseShowcase/ExpertiseShowcase';
import Achievements from '@/sections/Home/Achievements/Achievements';
import ContactForm from '@/sections/Home/ContactForm/ContactForm';

const Home = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between bg-base-100">
			<Hero />
			<MyJourney />
			{/* <AcademicTimeline /> */}
			<Toolbox />
			<ExpertiseShowcase />
			<Achievements />
			<ContactForm />
		</div>
	)
}

export default Home;