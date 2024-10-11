import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Da Braidr by Minne",
  description: 'Replicate Typescript Starter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <head>
        <link rel="stylesheet" href="https://use.typekit.net/xkr0sog.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
