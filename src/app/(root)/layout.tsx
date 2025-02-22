import Footer from '@/sections/Footer/Footer'
import Navbar from "@/sections/Navbar/Navbar"

export default function UserLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="w-screen overflow-x-hidden">
			<div className="top-0 h-10 lg:h-24 fixed z-10">
				<Navbar />
			</div>
			{children}
			<Footer />
		</div >
	)
}
