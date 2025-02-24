'use client';

import Link from 'next/link';

export default function HireMeButton() {
	return (
		<Link href="/#contact" className="btn btn-ghost border h-14 border-primary cursor-pointer text-neutral text-sm w-full hover:bg-primary hover:text-white">
			<p className="lg:py-2 lg:px-6 lg:text-lg">Hire Me</p>
		</Link>
	)
}