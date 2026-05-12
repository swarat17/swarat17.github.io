import { Inter_Tight, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://swarat17.github.io'),
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
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
