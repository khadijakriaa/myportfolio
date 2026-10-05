import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
    title: 'Khadija Kriaa | Portfolio',
    description: 'Portfolio of Khadija Kriaa — Data & Decisional Systems Engineering student at ENET\'Com, specialising in Data Science. Building LLM, RAG and agentic AI applications.',
    // Use relative path for static export
    icons: {
        icon: './favicon.png', // Note the ./ prefix
        shortcut: './favicon.png',
        apple: './apple-touch-icon.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            {/* Explicit favicon links for static export */}
            <link rel="icon" type="image/png" href="./favicon.png" />
            <link rel="shortcut icon" type="image/png" href="./favicon.png" />
            <link rel="apple-touch-icon" href="./apple-touch-icon.png" />

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
