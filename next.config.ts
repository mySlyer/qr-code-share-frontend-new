import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	async rewrites() {
		return [
			{
				source: '/api/qr-code-share/:path*',
				destination: 'http://localhost:3000/api/qr-code-share/:path*',
			},
		];
	},
};

export default nextConfig;
