import Link from "next/link"
import { Key } from "react"
import { useProductContext } from '@/context/ProductContext'

export default function CategoryList() {
	const { allCategory } = useProductContext()

	const createCategoryLink = (category: string) => {
		return category.toLowerCase().split(' ').join('-')
	}

	const createCategoryValue = (category: string) => {
		return category.split('-').join(' ')
	}

	return (
		<div className="flex text-xs px-4 lg:px-10 pt-8 lg:pt-3 pb-1 h-min overflow-hidden" style={{ fontWeight: 600, background: "linear-gradient(90deg, rgba(181,182,184,0) 0%, rgba(181,182,184,0.1) 20%, #8161d677 100%)" }}>
			<Link href={`/shop-all`} className="py-4 p-4 text-center hover:text-secondary opacity-80 hover:opacity-100">
				Shop All
			</Link>
			{allCategory && Object.keys(allCategory)?.map((category: any, i: Key | null | undefined) => {
				return (
					<Link href={`/${createCategoryLink(category)}`} key={i} className="py-4 p-4 capitalize text-center hover:text-secondary opacity-80 hover:opacity-100">
						{createCategoryValue(category)}
					</Link>
				)
			})}
		</div>
	)
}