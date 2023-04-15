'use client';

import { Nunito } from 'next/font/google'
import Navbar from './navbar'

const nunito = Nunito({ subsets: ['latin'] })

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={nunito.className}>
        {children}
      </main>
    </>
  )
}