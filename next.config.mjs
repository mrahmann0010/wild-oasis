/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'sjiagjiexfdzqwetocfs.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/firstbucket//**',
            search: '',
          },
        ],
      },
      // output:'export',
};

export default nextConfig;
