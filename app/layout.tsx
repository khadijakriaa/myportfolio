import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
    title: 'Khadija Kriaa | Portfolio',
    description: 'Portfolio of Khadija Kriaa — 2nd-year Data & Decisional Systems Engineering student at ENET\'Com, passionate about AI, ML and NLP.',
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon.png', type: 'image/png', sizes: '32x32' },
        ],
        apple: '/apple-icon.png',
    },
    manifest: '/manifest.json', // If you have a web manifest
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            {/* Fallback favicon link in case metadata doesn't work */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
