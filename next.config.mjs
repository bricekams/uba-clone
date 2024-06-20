/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/auth",
        destination: "/auth/signin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
