import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/font';
import { Suspense } from 'react';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchLatestInvoices } from '@/app/lib/data';


export default async function Page() {

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['latestInvoices'],
    queryFn: fetchLatestInvoices,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <HydrationBoundary state={dehydratedState}>
            <LatestInvoices />
          </HydrationBoundary>
        </Suspense>

      </div>
    </main>
  );
}
