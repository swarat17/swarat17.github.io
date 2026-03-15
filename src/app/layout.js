import { Syne, Space_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
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
      className={`${syne.variable} ${spaceMono.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
