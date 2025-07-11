import { NextResponse } from 'next/server';
import { fetchLatestInvoices } from '@/app/lib/data';

export async function GET() {
  try {
    const invoices = await fetchLatestInvoices();
    return NextResponse.json(invoices);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch latest invoices' },
      { status: 500 }
    );
  }
}