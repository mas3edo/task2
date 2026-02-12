/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // أي ريكويست يبدأ بـ /api عندنا
        destination: 'https://skipapp.ae/api/:path*', // حوله للسيرفر الحقيقي ده
      },
    ]
  },
}

module.exports = nextConfig