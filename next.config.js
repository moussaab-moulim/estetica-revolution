const prismic = require('@prismicio/client');

const sm = require('./sm.json');

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    reactStrictMode: true,
    basePath: '',
    images: {
      format: ['image/webp'],
      domains: ['images.prismic.io', 'scontent.cdninstagram.com'],
      // next/image support `srcSet` using the below deviceSizes
      // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#device-sizes
      deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // https://nextjs.org/docs/basic-features/image-optimization#image-sizes
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    i18n: {
      localeDetection: false,
      locales: ['fr'],
      defaultLocale: 'fr',
      // These are all the locales you want to support in
      // your application
      //locales,
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      //defaultLocale: locales[0],
    },
  };
};

module.exports = nextConfig;
