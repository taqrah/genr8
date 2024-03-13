import { SignUp } from '@clerk/nextjs';

function Page() {
  return (
    <div className='grid place-content-center min-h-[85vh] px-4'>
      <SignUp path='/sign-up'/>
    </div>
  );
}

export default Page;
