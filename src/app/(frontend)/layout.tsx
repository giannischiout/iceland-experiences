import React from 'react'
import './styles.css'
import { Noto_Sans } from 'next/font/google'
import 'simplebar-react/dist/simplebar.min.css';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: '400', // Special Elite has only one weight
  variable: '--font-noto',
})


export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body  className={`${notoSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
