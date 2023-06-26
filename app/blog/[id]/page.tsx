import { Metadata } from 'next';
type Props = {
	params: {
		id: string;
	};
};

const getData = async (id: string) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
		{
			next: { revalidate: 60 },
		}
	);
	// next всегда кеширует данные, по дефолту
	return await res.json();
};

export const generateMetadata = async ({
	params: { id },
}: Props): Promise<Metadata> => {
	const post = await getData(id);
	return {
		title: post.title,
	};
};

const Post = async ({ params: { id } }: Props) => {
	const post = await getData(id);
	return (
		<>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</>
	);
};

export default Post;
