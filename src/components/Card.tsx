import React from "react";

export function Card({ children }: { children: any }) {
	return (
		<div className="bg-white shadow-md rounded-2xl p-4">{children}</div>
	);
}

export function CardContent({ children }: { children: any }) {
	return (
		<div className="text-gray-900">{children}</div>
	);
}