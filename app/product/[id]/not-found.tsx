import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex justify-center items-center flex-col h-screen'>
			<h2 className='text-xl mb-3'>Not Found</h2>
			<p className='mb-3'>Could not find requested resource</p>
			<p className='text-blue-600 hover:underline cursor-pointer'>
				View <Link href="/">Home</Link>
			</p>
		</div>
	);
}