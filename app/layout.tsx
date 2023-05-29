import './globals.css';
import { Frank_Ruhl_Libre } from 'next/font/google';
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";

const frl = Frank_Ruhl_Libre({ 
  subsets: ['latin'] 
})

export const metadata = {
  title: 'AI Blog App',
  description: 'AI Blog Application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={frl.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
