import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/assets/svg';
import Link from "next/link";

export default function Footer() {

	return (
		<footer className="flex justify-between items-center mx-8 py-8 border-t border-[#BEC0BF] z-10 text-slate-200">
			<div className="text-center text-sm text-gray-500">
				© 2025. All Rights Reserved
			</div>
			<div className='flex items-center gap-2 text-base text-primary'>
				<Link href={'https://www.facebook.com/shresthashreyash'} target='_blank' className="btn bg-transparent border-white hover:bg-white hover:border-white p-0"><FacebookIcon /></Link>
				<Link href={'https://www.instagram.com/szpradhan/?hl=en'} target='_blank' className="btn bg-transparent border-white hover:bg-white hover:border-white p-0"><InstagramIcon /></Link>
				<Link href={'https://www.linkedin.com/in/shuvam-shrestha/'} target='_blank' className="btn bg-transparent border-white hover:bg-white hover:border-white p-0"><LinkedInIcon /></Link>
			</div>
		</footer>
	)
}