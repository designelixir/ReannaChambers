'use client';


import Cursor from './components/Cursor';
import CustomCursor from './components/CustomCursor';
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
