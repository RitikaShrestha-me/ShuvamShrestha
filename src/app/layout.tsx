import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const roboto = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shuvam Shrestha",
	description: "Personal Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				{children}
			</body>
		</html>
	);
}
