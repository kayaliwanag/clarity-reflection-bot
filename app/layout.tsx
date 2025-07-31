// app/layout.tsx
export const metadata = {
  title: "Clarity Reflection Bot",
  description: "Journal with intention.",
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
