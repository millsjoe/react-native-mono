const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  transpilePackages: [
    "expo",
    "react-native",
    "expo-status-bar",
    "expo-constants",
    "expo-modules-core",
  ],
});

module.exports = nextConfig;