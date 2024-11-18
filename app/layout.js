import './globals.css'

export const metadata = {
  title: 'Sarvesh Mishra - YouTuber, Podcaster, Digital Marketer',
  description: 'Portfolio of Sarvesh Mishra, a retired journalist turned YouTuber, podcaster, and digital marketing expert.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}