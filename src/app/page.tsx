import OtpField from '@/components/otp';
import { auth } from '@clerk/nextjs';

export default async function Home() {
  const { userId } = auth();

  return (
    <div className='grid place-content-center px-4 min-h-[85vh]'>
      <div>
        {userId ? (
          <OtpField />
        ) : (
          <div>
            <h1 className='text-3xl font-bold'>Hi There</h1>
            <p className='text-lg'>PLease Sign up to use this service.</p>
          </div>
        )}
      </div>
    </div>
  );
}
