import ProjectCard from '@/components/ProjectCard/ProjectCard'

let projectsList = [
	{
		id: '1',
		title: 'Momo Takeaway service',
		liveDemoUrl: 'https://momokhau.vercel.app/',
		imageUrl: 'https://wyjpcnghseplposxfrja.supabase.co/storage/v1/object/public/photos/Freelance%20project%20photos/Screenshot%202025-06-19%20at%2013.21.46.png',
		summary: "Momo Takeaway Service offers freshly prepared momos for quick pickup or delivery, catering to busy urban food lovers. With a focus on authentic taste and fast service, it brings Nepal's favorite comfort food straight to your doorstep.",
		dataAiHint: "Momo Takeaway Service Website",
		technologies: ['NextJs', 'Tailwind CSS', 'Radix UI', 'Supabase', 'Recharts']
	},
	{
		id: '2',
		title: 'Single vendor ecommerce',
		liveDemoUrl: 'https://closetbyaras.vercel.app/',
		imageUrl: 'https://wyjpcnghseplposxfrja.supabase.co/storage/v1/object/public/photos/Freelance%20project%20photos/Screenshot%202025-06-19%20at%2013.19.56.png',
		summary: "A streamlined online store platform where one brand sells products directly to customers. It supports product listings, cart, payments, and order tracking in a simple, scalable setup.",
		dataAiHint: "Single vendor online store platform",
		technologies: ['Woocommerce', 'NextJs', 'Daisyui', 'Typescript']
	},
	{
		id: '3',
		title: 'School Management system',
		liveDemoUrl: 'https://consultaras.vercel.app/',
		imageUrl: 'https://wyjpcnghseplposxfrja.supabase.co/storage/v1/object/public/photos/Freelance%20project%20photos/Screenshot%202025-06-19%20at%2013.19.33.png',
		summary: "An all-in-one digital platform for managing student records, attendance, fees, and academic progress. It simplifies communication between teachers, students, and parents while improving school operations.",
		dataAiHint: "School Management all-in-one digital platform for improving school operations",
		technologies: ['NextJs', 'Tailwind CSS']
	},
	{
		id: '4',
		title: 'Consultancy Full stack project',
		liveDemoUrl: 'https://quantumedu.vercel.app/',
		imageUrl: 'https://wyjpcnghseplposxfrja.supabase.co/storage/v1/object/public/photos/Freelance%20project%20photos/Screenshot%202025-06-19%20at%2013.18.55.png',
		summary: "A full-featured platform for booking, managing, and promoting consultancy services. Includes scheduling, service pages, admin dashboards, and CRM features to streamline client interactions.",
		dataAiHint: "Consultancy full-featured website",
		technologies: ['NextJs', 'Supabase']
	},
]

export default function FreelanceProjects() {
	return (
		<div className='my-20'>
			<div className='mt-32 text-center text-3xl font-bold'>Freelance Projects</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-20 xl:gap-8 py-8">
				{projectsList.map((project, index) => (
					<ProjectCard key={project.id} project={project} index={index} />
				))}
			</div>
		</div>
	)
}