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
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      <body className='dark:bg-grey-100' >
        <ToastController />
        <Navbar />
        <div className='pt-24 max-w-[1000px] mx-auto px-4 max-tablet-sm:px-1.5' >
          {children}
        </div>
      </body>
    </html>
  )
}
