'use client';
import Cursor from './components/Cursor';
import './globals.css';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor></Cursor>
        {children}
      </body>
    </html>
  );
}
