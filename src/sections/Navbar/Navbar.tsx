'use client';

import HireMeButton from "@/components/Button/HireMeButton";
import Image from "next/image";
import NavLinks, { allCategory } from '@/sections/Navbar/NavLinks/NavLinks';
import { HamburgerIcon } from '@/assets/svg';
import useScreenSize from '@/hook/useScreenSize';
import Link from 'next/link';

export default function Navbar() {
	const { isMobileScreen } = useScreenSize();

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
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<HamburgerIcon />
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content bg-white absolute right-0 mt-3 z-20 p-2 shadow rounded-box w-52">
						{allCategory?.map((category: any, i: number) => {
							return <li><Link href={`/#${category?.toLowerCase()}`}>{category}</Link></li>
						})}
					</ul>
				</div> :
				<NavLinks />
			}
			{!isMobileScreen && <div className="pr-8">
				<HireMeButton />
			</div>}
		</div>
	);
}