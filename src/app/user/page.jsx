import Image from 'next/image'
import { checkAuthentication } from '../../api/auth';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'About - Thintry',
    description: 'Generated by create next app',
  }

export default async function User() {
  let isAuthenticated = await checkAuthentication('/user');
  isAuthenticated ? '' : redirect('/auth/login');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About</h1>
    </main>
  )
}
