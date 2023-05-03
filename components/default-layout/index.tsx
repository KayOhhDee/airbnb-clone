import { Nunito } from 'next/font/google'
import Navbar from './navbar'
import RegisterModal from '../modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import LoginModal from '../modals/LoginModal';

const nunito = Nunito({ subsets: ['latin'] })

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <>
      <ToasterProvider />
      <RegisterModal />
      <LoginModal />
      <Navbar />
      <main className={nunito.className}>
        {children}
      </main>
    </>
  )
}