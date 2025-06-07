import { Timestamp } from "firebase/firestore";

export type BlogPost = {
	id: string;
	title: string;
	type: string;
	content: string;
	imageUrl: string;
	createdAt?: Timestamp;
};
