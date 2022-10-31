const prismic = require("@prismicio/client");

const sm = require("./sm.json");

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
    return {
        reactStrictMode: true,
        basePath: "",
        images: {
            formats: ["image/webp", "image/avif"],
            domains: [
                "images.prismic.io",
                "scontent.cdninstagram.com",
                "estetica-revolution.cdn.prismic.io",
            ],
            // next/image support `srcSet` using the below deviceSizes
            // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#device-sizes
            deviceSizes: [
                320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
            ],
            // https://nextjs.org/docs/basic-features/image-optimization#image-sizes
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        },
        i18n: {
            localeDetection: false,
            locales: ["fr"],
            defaultLocale: "fr",
        },
    };
};

module.exports = nextConfig;
