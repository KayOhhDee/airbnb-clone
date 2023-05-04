import { Nunito } from 'next/font/google'
import Navbar from '@/components/navbar'
import RegisterModal from '@/components/modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import LoginModal from '@/components/modals/LoginModal';

import './globals.css'
import getCurrentUser from '@/actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const nunito = Nunito({ 
  subsets: ['latin'], 
});


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}