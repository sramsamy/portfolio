import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sachin Ramsamy",
  description: 'Sachin is an aspiring full-stack developer and IT student at Griffith University.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-200 relative`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
