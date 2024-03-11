import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='grid place-content-center min-h-[85vh]'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold'>Conflict</h2>
        <p className='max-w-[300px]'>
          A user with that account already exists, If this is you please sign in
          instead.
        </p>
        <Link
          href='/sign-in'
          className=' btn text-darkTxt dark:text-lightTxt p-2 rounded-md hover:shadow-sm block min-w-[5rem] text-center'
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
