import Link from "next/link";

export const allCategory = ['My Services', 'Projects', 'Contact', 'Blogs']

export default function NavLinks() {

	const createCategoryLink = (category: string) => {
		if (['Blogs', 'Contact']?.includes(category)) {
			return `${category.toLowerCase()}`
		}
		return `#${category.toLowerCase().split(' ').join('-')}`
	}

	const createCategoryValue = (category: string) => {
		return category.split('-').join(' ')
	}

	return (
		<div className="flex text-xs px-4 lg:px-1 pb-1 h-min overflow-hidden" style={{
			fontWeight: 600,
		}}>
			{allCategory?.map((category: any, i: number) => {
				return (
					<Link href={`/${createCategoryLink(category)}`} key={i} className="pt-6 pb-2 text-center hover:text-neutral opacity-80 hover:cursor-pointer hover:opacity-100">
						<span className='px-4 cursor-pointer'>{createCategoryValue(category)}</span>
					</Link>
				)
			})}
		</div>
	)
}