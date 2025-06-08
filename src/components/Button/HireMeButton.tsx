'use client';

import Link from 'next/link';

export default function HireMeButton() {
	return (
		<Link href="/#my-services" className="btn btn-ghost border h-12 border-primary cursor-pointer text-neutral text-sm w-full hover:bg-primary hover:text-white">
			<p className="lg:px-2 lg:text-sm">Free Consultation</p>
		</Link>
	)
}