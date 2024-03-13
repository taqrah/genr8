import { SignIn } from '@clerk/nextjs';

function Page() {
  return (
    <div className='grid place-content-center min-h-[85vh] px-4'>
      <SignIn path='/sign-in'/>
    </div>
  );
}

export default Page;
