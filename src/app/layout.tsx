import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from './_shared/molecules/Navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-grey-100' >
        <Navbar />
        <div className='pt-24' >
          {children}
        </div>
      </body>
    </html>
  )
}