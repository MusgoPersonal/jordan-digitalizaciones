import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactCompiler: true,
  // Fija la raíz del workspace (evita que Next elija un lockfile ajeno).
  turbopack: { root: projectRoot },
};

export default nextConfig;
