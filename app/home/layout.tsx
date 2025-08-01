// app/layout.tsx

import "./globals.css"; // optional: only if you have global styles

export const metadata = {
  title: "Clarity Reflection Bot",
  description: "A daily journaling assistant by Kaya Liwanag.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
