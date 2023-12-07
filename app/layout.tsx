import Header from "@/components/header"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/themeProvider"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
        attribute="class" 
        defaultTheme="system" 
        enableSystem
        >
          <Header />
          <div className='px-4 lg:px-2 max-w-4xl mx-auto'>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
