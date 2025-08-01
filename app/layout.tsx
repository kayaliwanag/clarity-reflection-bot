export const metadata = {
  title: 'Clarity Reflection Bot',
  description: 'Daily journaling with care.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
