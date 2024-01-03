/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dvw41cvga/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
