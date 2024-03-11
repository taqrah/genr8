import Link from 'next/link';
import { Home } from './icons';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs';

const Navbar: React.FC = () => {
  const { userId } = auth();

  return (
    <>
      <header className='shadow-md py-4 lg:py-5 px-6'>
        <div className='flex justify-between items-center max-w-screen-lg mx-auto'>
          <div className='tracking-widest font-semibold'>
            <Link href='/'>
              <Home aria-hidden='true' />
            </Link>
          </div>
          <nav>
            <ul
              id='navbar-menu'
              className={` flex justify-between items-center gap-10 bg-transparent text-accent p-0 text-lg font-medium transition duration-300`}
            >
              {!userId ? (
                <li>
                  <Link
                    href='/sign-up'
                    className=' btn text-darkTxt dark:text-lightTxt p-2 rounded-md hover:shadow-sm block min-w-[5rem] text-center'
                  >
                    Sign up
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href='/profile'
                    className=' btn text-darkTxt dark:text-lightTxt p-2 rounded-md hover:shadow-sm block min-w-[5rem] text-center'
                  >
                    Profile
                  </Link>
                </li>
              )}
              {userId && (
                <li>
                  <UserButton afterSignOutUrl='/' />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
