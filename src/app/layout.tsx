import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/components/providers/ThemeRegistry'
import Navbar from '@/components/layout/Navbar'
import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LNReader Web',
  description: 'Web version of LNReader',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Navbar />
          <Box sx={{ paddingTop: '64px' }}>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}