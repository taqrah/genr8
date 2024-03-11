import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='grid place-content-center min-h-[85vh]'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold'>Invalid path</h2>
        <p className='max-w-[300px]'>
          You&apos;re trying to access a page that doesn&apos;t exist.
        </p>
        <Link
          href='/sign-in'
          className=' btn text-darkTxt dark:text-lightTxt p-2 rounded-md hover:shadow-sm block min-w-[5rem] text-center'
        >
          Home
        </Link>
      </div>
    </div>
  );
}
