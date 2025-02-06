import HireMeButton from "@/components/Button/HireMeButton";
import Image from "next/image";
import NavLinks from '@/components/NavLinks/NavLinks';

export default function Navbar() {
	return (
		<div className="navbar z-20 w-screen justify-between bg-white text-neutral h-24">
			<div className="px-0 lg:px-8">
				{/* <div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<HamburgerMenu />
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box w-52">
						<li><Link href={"/"}>Home</Link></li>
						<li><Link href={"/shop-all"}>Products</Link></li>
						<li><Link href={"/about"}>About Us</Link></li>
						<li><Link href={"/contact"}>Contact</Link></li>
					</ul>
				</div> */}
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
			<NavLinks />
			<div className="pr-8">
				<HireMeButton />
			</div>
		</div>
	);
}