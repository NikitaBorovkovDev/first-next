import { Metadata } from 'next';
import Link from 'next/link';

const getData = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: { revalidate: 60 },
	});
	// next всегда кеширует данные, по дефолту
	return await res.json();
};

export const metadata: Metadata = {
	title: 'about children',
};

const Blog = async () => {
	const posts = await getData();
	return (
		<>
			<h1>Blog</h1>
			<ul>
				{posts.map((posts: any) => (
					<li key={posts.id}>
						<Link href={`/blog/${posts.id}`}>{posts.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Blog;
