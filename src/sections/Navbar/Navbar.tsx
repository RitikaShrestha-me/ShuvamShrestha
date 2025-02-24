'use client';

import HireMeButton from "@/components/Button/HireMeButton";
import Image from "next/image";
import NavLinks, { allCategory } from '@/sections/Navbar/NavLinks/NavLinks';
import { HamburgerIcon } from '@/assets/svg';
import useScreenSize from '@/hook/useScreenSize';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const { isMobileScreen } = useScreenSize();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="navbar z-20 w-screen justify-between bg-white text-neutral h-24">
			<div className="px-2 lg:px-8">
				<div
					className="text-secondary"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						fontSize: '24px',
					}}
				>
					<Image alt="logo" src='/images/logo.jpg' height={200} width={200} className="h-18 w-24" />
				</div>
			</div>
			{isMobileScreen ?
				<div className="dropdown">
					<button onClick={() => setShowMenu(!showMenu)} className="btn btn-ghost lg:hidden">
						<HamburgerIcon />
					</button>
				</div> :
				<NavLinks />
			}
			{!isMobileScreen && <div className="pr-8">
				<HireMeButton />
			</div>}
			{showMenu && (
				<div className='absolute h-screen w-screen top-0 left-0 bg-white flex flex-col p-8 gap-8' onClick={() => setShowMenu(!showMenu)}>
					<div
						className="text-secondary"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							fontSize: '24px',
						}}
					>
						<Image alt="logo" src='/images/logo.jpg' height={200} width={200} className="h-20 w-32" />
					</div>
					<ul tabIndex={0} className="bg-white text-lg w-full flex flex-col gap-3">
						{allCategory?.map((category: any, i: number) => {
							return <Link href={`/#${category?.toLowerCase()}`}><li className='hover:bg-slate-100 p-2 cursor-pointer'>{category}</li></Link>
						})}
					</ul>
					<HireMeButton />
				</div>
			)}
		</div>
	);
}