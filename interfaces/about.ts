export interface AboutType {
	title: string;
	expect: string;
	image?: {
		url: string;
	};
	badge: BadgeType;
	id: string;
	createdAt: Date;
	start: string;
	stoped: string;
	certificate: { url: string };
	url: string;
}

export interface BadgeType {
	raw: string;
	text: string;
	html: string;
	markdown: string;
}
