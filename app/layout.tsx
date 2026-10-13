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

export const metadata: Metadata={title:'Agent Wars — The Reliability Frontier',description:'A source-traced technology intelligence study of computer-using agents across four frontier AI labs.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${mono.variable}`}>{children}</body></html>}
