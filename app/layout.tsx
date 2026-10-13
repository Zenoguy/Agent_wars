import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({
  src: [
    { path: '../public/fonts/inter-latin-400-normal.woff2', weight: '400' },
    { path: '../public/fonts/inter-latin-500-normal.woff2', weight: '500' },
    { path: '../public/fonts/inter-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-inter',
  display: 'swap',
});
const mono = localFont({
  src: '../public/fonts/ibm-plex-mono-latin-400-normal.woff2',
  variable: '--font-mono',
  display: 'swap',
});

const title = 'Agent Wars | The Reliability Frontier';
const description = 'Independent research by Shreyan Ghosh on computer-using agents across four frontier AI labs, with traceable primary sources and enterprise R&D priorities.';
export const metadata: Metadata = {
  metadataBase: new URL('https://agents.shreyanghosh.dev'),
  title,
  description,
  authors: [{ name: 'Shreyan Ghosh', url: 'https://github.com/Zenoguy' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: '/', siteName: 'Agent Wars', title, description,
    images: [{ url: '/share-image.png', width: 1200, height: 630, alt: 'Agent Wars: The Reliability Frontier. Independent research by Shreyan Ghosh across four frontier AI labs.' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/share-image.png'] },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${mono.variable}`}>{children}</body></html>}
