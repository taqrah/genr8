import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
// import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';
import Navbar from '@/components/navigation';

const space = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genr8',
  description: 'Genr8 is a modern web app to generate OTPs for your projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={space.className}>
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
