import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // packages/* の TS ソースをそのまま読み込むのに必要
  transpilePackages: ["@ronten/shared-types"],
};

export default nextConfig;
