import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LapInsight - Find Your Perfect Laptop',
  description: 'Compare and find the best laptops at the best prices.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}