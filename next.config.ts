// @ts-check
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;
