import Link from "next/link";

export default function Footer() {

	return (
		<div className="w-full bg-black text-slate-200">
			<footer className="footer z-10 grid-cols-1 text-center md:text-left md:grid-cols-4 p-10 place-content-around">
				<div className="place-items-center mx-auto">
					<p>Copyright © 2025. All Rights Reserved</p>
				</div>
				<nav className="mx-auto text-center md:text-left">
					<Link href={'/'} className="link link-hover w-full">LinkedIn</Link>
					<Link href={'/Search'} className="link link-hover w-full">Fb</Link>
					<Link href={'/Cart'} className="link link-hover w-full">Insta</Link>
				</nav>
			</footer>
			<footer className="rounded">
				<div className="flex flex-col-reverse md:flex-row text-center justify-between mx-10 py-5 border-t-2">
					<aside>
						<p>Copyright © 2023 - All right reserved</p>
					</aside>
					<nav className="grid grid-flow-col gap-4 mb-4">
						<a className="link link-hover">LinkedIn</a>
						<a className="link link-hover">Facebook</a>
						<a className="link link-hover">Instagram</a>
					</nav>
				</div>
			</footer>
		</div>
	)
}