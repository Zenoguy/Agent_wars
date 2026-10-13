import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // GitHub project Pages uses /<repository>/; local development uses /.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
