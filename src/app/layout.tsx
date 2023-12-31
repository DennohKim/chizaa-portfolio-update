import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import FooterCredit from '@/components/FooterCredit';
import AuthProvider from '@/utils/AuthProvider';

const quickSand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Dennis Kimathi Website',

  description: 'Dennis Kimathi is a full-stack Web Developer From Kenya.',
  keywords: [
    'Dennis Kimathi',
    'Chizaa',
    'Mbiebuz',
    'Dennis Kimathi Website',
    'Web developer in Kenya',
    'Fullstack developer in Nairobi Kenya',
    'Denno',
    'Blockcahin developer in Kenya',
    'Devops Engineer in Kenya',
    'DevSecOps Engineer Kenya',
    'Frontend developer Kenya',
    'Go developer from Kenya',
    'Rust developer from Kenya',
    'Dennis Kimathi js developer',
    'Dennis Kimathi next.js developer',
    'Dennis Kimathi react developer',
    'Dennis Kimathi react',
    'Dennis Kimathi kenyawebdeveloper',
    'Chizaa web developer',
    'Dennis Kimathi web dev from Nairobi',
    'Dennis Kimathi Mbaabu',
    'web developer',
    'web developer from Kenya',
    'js developer',
    'next.js developer',
    'react developer',
    'react native developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${quickSand.className} mx-auto max-w-screen-2xl text-[#e6ebff]`}
      >
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
