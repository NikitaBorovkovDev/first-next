import Link from 'next/link';

const Header = () => {
	return (
		<div className="bg-slate-500 flex justify-center gap-6">
			<Link href="/">home</Link>
			<Link href="/blog">BLOG</Link>
			<Link href="/about">about</Link>
		</div>
	);
};

export default Header;
