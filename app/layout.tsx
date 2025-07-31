// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Clarity Reflection Bot',
  description: 'I Can If? | Kaya Liwanag',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
