import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  metadataBase: new URL('https://swaratsarkar.dev'),
  title: 'Swarat Sarkar — AI/ML Engineer',
  description:
    'Portfolio of Swarat Sarkar — AI/ML Engineer specializing in computer vision, deep learning, and production ML systems. MS AI from University at Buffalo.',
  openGraph: {
    title: 'Swarat Sarkar — AI/ML Engineer',
    description:
      'Portfolio of Swarat Sarkar — AI/ML Engineer specializing in computer vision, deep learning, and production ML systems.',
    siteName: 'Swarat Sarkar Portfolio',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
