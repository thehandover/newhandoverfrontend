/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    // loader: 'cloudinary',
    // path: 'https://example.com/myaccount/',
    domains: ['handoverstorage.s3.us-east-2.amazonaws.com', 'handoverstorage.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
