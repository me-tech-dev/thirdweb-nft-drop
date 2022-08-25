/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    myNftDropContractAddress: process.env.NFT_DROP_CONTRACT_ADDRESS,
  },
}

module.exports = nextConfig
