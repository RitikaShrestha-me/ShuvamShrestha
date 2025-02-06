'use client';

import Link from 'next/link';

export default function FilledButton({ content, href }: { content: any; href?: string }) {

	return (
		<div>
			<Link href={href || '/'} className="btn border text-neutral bg-primary text-base p-0 lg:py-2 lg:px-6 lg:text-sm hover:cursor-pointer hover:bg-[#85C87F] hover:text-white">{content}</Link>
		</div>
	)
}