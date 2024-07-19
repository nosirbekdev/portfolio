export interface IProject {
	badge: { html: string };
	category: { label: string; id: string };
	expect: string;
	image: { url: string };
	title: string;
	slug: string;
	url: string;
	githubUrl: string;
	tags: {
		html: string;
	};
	description: { html: string };
	author: IAuthor;
	createdAt: Date;
}

export interface IAuthor {
	avatar: {
		url: string;
	};
	name: string;
	id: string;
	about: string;
}
