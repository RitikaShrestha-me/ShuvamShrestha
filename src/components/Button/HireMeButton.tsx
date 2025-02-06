'use client';

import Link from 'next/link';

export default function HireMeButton() {

	return (
		<div className="dropdown dropdown-end">
			<label className="btn hover:bg-transparent btn-ghost">
				<Link href="/#contact" className="btn btn-ghost border text-neutral border-primary text-sm p-0 lg:py-2 lg:px-6 lg:text-sm cursor-pointer hover:bg-primary hover:text-white">Hire Me</Link>
			</label>
		</div>
	)
}