import './globals.css'

export const metadata = {
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
      <body>
        {/* <header>This is Header</header> */}
        {children}
        {/* <footer>This is Footer</footer> */}
      </body>
    </html>
  )
}
