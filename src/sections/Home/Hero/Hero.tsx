'use client';
import FilledButton from '@/components/Button/FilledButton';
import { MailIcon, FacebookIcon, InstagramIcon, LinkedInIcon, QuotesIcon } from '@/assets/svg';
import Image from "next/image";
import Link from "next/link";
import { EMAIL_ID } from '@/constants/consts';

export default function Hero() {
	return (
		<div id={'about'} className="hero w-full">
			<div className="flex flex-col md:flex-col w-full">
				<div className="h-screen lg:h-screen">
					<div className="flex items-start justify-center pt-24 bg-white h-screen w-screen px-20 gap-12 mt-12">
						<div className='flex flex-col gap-7 pt-8'>
							<div className='flex flex-col gap-4'>
								<p className="pb-8 text-sm lg:pb-4 lg:text-base"><span className="px-6 py-4 text-base-100 bg-secondary">Available for work</span></p>
								<p className="text-4xl relative lg:text-5xl w-fit font-medium" style={{ lineHeight: '1.25' }}>
									<div className='absolute -right-6 -top-6 h-7 w-7'><QuotesIcon /></div>
									I&apos;m <span className='text-primary'>SHUVAM SHRESTHA</span>
								</p>
								<p className="text-4xl lg:text-3xl font-medium" style={{ lineHeight: '1.25' }}>Project Manager</p>
							</div>
							<p className="text-sm lg:text-base">MBA Finance | Diploma in IT</p>
							<p className="text-sm lg:text-sm text-justify">With 4 years of marketing experience, strong academic achievements, and a passion for project management, I thrive on creating value-driven business solutions through technology. As a proactive team player and self-starter, I excel in negotiation, problem-solving, and analytical thinking, always striving for excellence and continuous growth.</p>
							<FilledButton
								content={
									<span className='flex gap-2 text-base-100 justify-center items-center'>
										Let&apos;s Talk <MailIcon />
									</span>
								}
								href={`mailto:${EMAIL_ID}`}
							/>
						</div>
						<div className='relative flex justify-center px-24 items-center'>
							<div className='border-primary border-2 absolute h-96 w-72 top-20 left-16 -z-1'></div>
							<div className='h-80 w-72' style={{
								zIndex: 6
							}}>
								<Image src={'/images/Profile.png'} alt="Profile" width={1350} height={1000} />
							</div>
							<div className='absolute h-80 w-72' style={{
								top: '42.5px'
							}}>
								<Image src={'/images/bg.png'} alt="Profile" width={1000} height={800} />
							</div>
							<div className='flex gap-8 flex-col absolute items-center right-0 top-28 text-base text-primary'>
								<div className='rotate-90 mb-12'>
									Follow me on:
								</div>
								<div className='h-12 w-0.5 bg-primary'></div>
								<div className='flex gap-0 flex-col w-8 text-base text-primary'>
									<Link href={'https://www.facebook.com/shresthashreyash'} target='_blank' className="btn border-base-100 bg-transparent hover:border-base-100 hover:bg-base-100 p-0"><FacebookIcon /></Link>
									<Link href={'https://www.instagram.com/szpradhan/?hl=en'} target='_blank' className="btn border-base-100 bg-transparent hover:border-base-100 hover:bg-base-100 p-0"><InstagramIcon /></Link>
									<Link href={'https://www.linkedin.com/in/shuvam-shrestha/'} target='_blank' className="btn border-base-100 bg-transparent hover:border-base-100 hover:bg-base-100 p-0"><LinkedInIcon /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}