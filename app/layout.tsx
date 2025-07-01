import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from './lib/query-client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <QueryClientProvider client={getQueryClient()}>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    // </QueryClientProvider>
  );
}
