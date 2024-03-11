import { SignUp } from '@clerk/nextjs';

function Page() {
  return (
    <div className='grid place-content-center min-h-[85vh]'>
      <SignUp path='/sign-up'/>
    </div>
  );
}

export default Page;
