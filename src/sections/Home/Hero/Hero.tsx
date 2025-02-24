'use client';
import FilledButton from '@/components/Button/FilledButton';
import { MailIcon, FacebookIcon, InstagramIcon, LinkedInIcon, QuotesIcon } from '@/assets/svg';
import Image from "next/image";
import Link from "next/link";
import { EMAIL_ID } from '@/constants/consts';
import useScreenSize from '@/hook/useScreenSize';

export default function Hero() {
	const { isMobileScreen } = useScreenSize();

	const renderMainImage = () => {
		return (
			<div className='relative w-full scale-75 flex justify-center h-[350px] md:scale-100 md:px-24'>
				<div className='h-80 w-72' style={{
					left: isMobileScreen ? '40px' : undefined,
					top: isMobileScreen ? '-40px' : undefined,
					zIndex: 6
				}}>
					<Image src={'/images/Profile.png'} alt="Profile" width={1350} height={1000} />
				</div>
				{isMobileScreen ? null :
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
					</div>}
			</div>)
	}
	return (
		<div id={'about'} className="hero">
			<div className="flex flex-col md:flex-col">
				<div className="h-full lg:h-full">
					<div className="flex items-start justify-center pt-20 lg:pt-24 bg-white px-4 gap-12 mt-12 flex-col lg:px-20 lg:h-screen lg:flex-row">
						<div className='flex flex-col gap-4 lg:gap-7 lg:pt-8'>
							<div className='flex flex-col gap-2 lg:gap-4'>
								<p className="pb-4 text-sm lg:text-base"><span className="px-3 py-2 lg:px-6 lg:py-4 text-base-100 bg-secondary">Available for work</span></p>
								<p className="text-3xl relative lg:text-5xl w-fit font-medium" style={{ lineHeight: '1.25' }}>
									<div className='absolute -right-3 -top-2 md:-right-6 md:-top-6'><QuotesIcon height={isMobileScreen ? 16 : 32} width={isMobileScreen ? 16 : 32} /></div>
									I&apos;m <span className='text-primary'>SHUVAM SHRESTHA</span>
								</p>
								<p className="text-2xl lg:text-3xl font-medium" style={{ lineHeight: '1.25' }}>Project Manager</p>
							</div>
							<p className="text-sm lg:text-base">MBA Finance | Diploma in IT</p>
							{isMobileScreen && renderMainImage()}
							<p className="text-sm lg:text-sm text-justify">With 4 years of marketing experience, strong academic achievements, and a passion for project management, I thrive on creating value-driven business solutions through technology. As a proactive team player and self-starter, I excel in negotiation, problem-solving, and analytical thinking, always striving for excellence and continuous growth.</p>
							<FilledButton
								content={
									<span className='flex gap-2 px-4 text-base-100 justify-center items-center'>
										Let&apos;s Talk <MailIcon />
									</span>
								}
								href={`mailto:${EMAIL_ID}`}
							/>
						</div>
						{!isMobileScreen && renderMainImage()}
					</div>
				</div>
			</div>
		</div>
	)
}