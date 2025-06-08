'use client';

import Hero from "@/sections/Home/Hero/Hero";
import MyJourney from "@/sections/Home/MyJourney/MyJourney";
import Toolbox from '@/sections/Home/Toolbox/Toolbox';
import ExpertiseShowcase from '@/sections/Home/ExpertiseShowcase/ExpertiseShowcase';
import Achievements from '@/sections/Home/Achievements/Achievements';
import ServicesSection from '@/sections/Home/Services/ServicesSection';

const Home = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between bg-base-100">
			<Hero />
			<MyJourney />
			{/* <AcademicTimeline /> */}
			<Toolbox />
			<ServicesSection />
			<ExpertiseShowcase />
			<Achievements />
		</div>
	)
}

export default Home;