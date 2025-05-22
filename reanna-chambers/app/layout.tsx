'use client';
import Cursor from './components/Cursor';
import './globals.css';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="2FOPKWZkWJ8rTe1bCMmjVQ" async></script>
      <body>
        <Cursor></Cursor>
        
        {children}
        
        
      </body>
    </html>
  );
}
