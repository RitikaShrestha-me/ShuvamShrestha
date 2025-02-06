'use client';

import React, { useCallback, useState } from 'react';
import { SearchIcon } from '@/assets/svg'
import { useProductContext } from "@/context/ProductContext";
import { useRouter } from "next/navigation";

const Search = () => {
	const { allCategory } = useProductContext();
	const router = useRouter();
	const [searchItem, setSearchItem] = useState("")

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams()
			params.set(name, value)

			return params.toString()
		},
		[]
	)

	const applySearch = (e: any) => {
		e.preventDefault();

		if (searchItem) {
			if (allCategory && Object.keys(allCategory)?.find(element => element?.includes(searchItem))) {
				router.push(`/${Object.keys(allCategory)?.find(element => element?.includes(searchItem))}`)
			} else {
				router.push('/shop-all?' + createQueryString("search", searchItem))
			}
		}
	}

	return (
		<div>
			<form onSubmit={applySearch} className="form-control relative w-96 mr-10 hidden lg:flex">
				<input type="text" placeholder="Search" onChange={(e) => setSearchItem(e.target.value)} className="input focus:outline-none text-sm hover:bg-primary focus:border-neutral hover:border-neutral border-secondary focus:bg-primary bg-white rounded-3xl input-bordered pl-6 pr-20 md:w-auto" />
				<button type="submit" className="btn bg-secondary hover:bg-neutral text-base-100 btn-ghost absolute right-0 rounded-l-none px-6 rounded-r-3xl">
					<SearchIcon />
				</button>
			</form>
		</div>
	)
}

export default Search
