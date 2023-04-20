'use client';
import { Nunito } from 'next/font/google'
import Navbar from './navbar'
import RegisterModal from '../modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';

const nunito = Nunito({ subsets: ['latin'] })

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToasterProvider />
      <RegisterModal />
      <Navbar />
      <main className={nunito.className}>
        {children}
      </main>
    </>
  )
}