export interface IAuthors {
	id: string;
	name: string;
	about: string;
	blog: ICards[];
	avatar: {
		url: string;
	};
}

export interface ICards {
	githubUrl: string;
	expect: string;
	title: string;
	id: string;
	url: string;
	slug: string;
	image: {
		url: string;
	};
}
