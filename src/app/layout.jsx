import './globals.css';
import { Inter } from 'next/font/google'
import Head from 'next/head';
import HeaderUi from './components/header-ui/headerui';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thintry - Microblog',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://thintry.com/boxicons/css/boxicons.min.css" />
        <link rel="stylesheet" href="style.css" />
      </Head>
      <body className={inter.className}>
        <HeaderUi />
        {children}
      </body>
    </html>
  )
}
