import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col w-2xl m-auto mt-10 text-black items-stretch'>
      <h2 aria-label='FAQ Not Found'>FAQ Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='bg-white border border-primary text-primary font-bold mt-4 py-2 px-4 rounded hover:bg-green-100 transition' aria-label='Return Home' href="/">Return Home</Link>
    </div>
  )
}