/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    // domains: [
    //   "shepper.com",
    //   "thumbor.forbes.com",
    //   "thumbs.dreamstime.com",
    //   "www.intouchinsight.com",
    // ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
