import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center w-full'>
      <div className='w-10 h-10 rounded-full border-4 border-b-transparent animate-spin border-primary-color' />
    </div>
  );
}
