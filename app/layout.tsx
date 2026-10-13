import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Agent Wars — The Reliability Frontier',description:'A source-traced technology intelligence study of computer-using agents across four frontier AI labs.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
