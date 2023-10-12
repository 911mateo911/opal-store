import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from './_shared/molecules/Navbar'
import { ToastController } from './_shared/molecules/Toast/ToastController'

export const metadata: Metadata = {
  title: 'Opal Albania',
  description: 'Opal store description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-grey-100' >
        <ToastController />
        <Navbar />
        <div className='pt-24' >
          {children}
        </div>
      </body>
    </html>
  )
}
