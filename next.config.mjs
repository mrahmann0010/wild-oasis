/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'dnlgyvgizgujozbqdspo.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/photos//**',
            search: '',
          },
        ],
      },
      // output:'export',
};

export default nextConfig;
