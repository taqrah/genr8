'use server';
import { auth, currentUser } from '@clerk/nextjs';
import Image from 'next/image';

async function Profile() {
  const { userId } = auth();
  
  const user = await currentUser();
  
  if (!userId || !user) {
    return (
      <div className='min-h-screen grid place-content-center'>
        <h1>Can&apos;t access this page without logging in</h1>
      </div>
    );
  }

  const getImageUrl = () => {
    return user?.imageUrl || '';
  };

  console.log(user);

  const sendCode = async () => {
    // Extract The User ID of who is receiving the one-to-one Direct Message (OTP). 
    const participant_id = user?.externalAccounts[0].externalId; 
  
    const res = await fetch(`https://api.twitter.com/2/dm_conversations/with/:${participant_id}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
      },
      body: JSON.stringify({ text: 'Hello World!' }),
    });
}

  return (
    <div className='min-h-[85vh] grid place-content-center'>
      <h1 className='mb-8 text-center text-3xl font-bold'>
        Hello, {user?.firstName}
      </h1>
      <div className='flex flex-col p-6 gap-8'>
        <div className='flex justify-center'>
          {/* <Image
            loader={getImageUrl}
            src={user?.imageUrl || ''}
            alt='profile picture'
            width={100}
            height={100}
            className='rounded-full'
          /> */}
        </div>
        <div className='flex gap-2'>
          <h2 className='font-semibold'>First Name:</h2>
          <p>{user?.firstName}</p>
        </div>
        {user.lastName && (
          <div className='flex gap-2'>
            <h2 className='font-semibold'>Last Name:</h2>
            <p>{user?.lastName}</p>
          </div>
        )}
        <div className='flex gap-2'>
          <h2 className='font-semibold'>Email:</h2>
          <p>{user?.emailAddresses[0]?.emailAddress || 'not provided'}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
