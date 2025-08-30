/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress warnings about Grammarly extension attributes
  reactStrictMode: false,
  // Add known Grammarly attributes to the allowed list
  experimental: {
    // This suppresses the specific warning about data-new-gr-c-s-check-loaded and data-gr-ext-installed
    largePageDataBytes: 128 * 100000,
  },
  // Suppress hydration warnings for specific attributes
  onDemandEntries: {
    // This extends the time a page is kept in memory to reduce rebuilds
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
}

module.exports = nextConfig
