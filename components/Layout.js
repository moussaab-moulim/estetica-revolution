import { NextSeo } from 'next-seo';
import ContactPopup from './ContactPopup/ContactPopup';
import {
  ContactPopupProvider,
  useContactPopup,
} from './ContactPopup/contactPopupContext';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div className='bg-black text-white'>
      <ContactPopupProvider>
        <NextSeo
          title={settings.meta_title}
          titleTemplate={`%s | ${settings.site_name}`}
          description={settings.meta_description}
          openGraph={{
            title: settings.meta_title,
            description: settings.meta_description,
            url: settings.domain + settings.path,
            //TODO dynamic type
            type: settings.type,
            locale: settings.locale,
            site_name: settings.site_name,
            images: settings.featured_image
              ? [
                  {
                    url: settings.featured_image.url.replace(
                      'auto=compress,format',
                      ''
                    ),
                    alt: settings.featured_image.alt,
                    type: 'image/jpeg',
                    width: 1200,
                    height: 630,
                  },
                ]
              : [],
          }}
          twitter={{
            cardType: 'summary_large_image',
            handle: settings.twitterHandle,
          }}
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
            },
            {
              httpEquiv: 'x-ua-compatible',
              content: 'IE=edge',
            },
            {
              name: 'keywords',
              content: settings.keywords,
            },
            {
              name: 'msapplication-TileColor',
              content: settings.theme_color,
            },
            {
              name: 'theme-color',
              content: settings.theme_color,
            },
            {
              name: 'google-site-verification',
              content: settings.search_console_key,
            },
          ]}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: settings.favico?.md?.url ?? '',
              sizes: '32x32',
              type: 'image/png',
            },
            {
              rel: 'icon',
              href: settings.favico?.url ?? '',
              sizes: '16x16',
              type: 'image/png',
            },
            {
              rel: 'apple-touch-icon',
              href: settings.favico?.lg?.url ?? '',
              sizes: '180x180',
              type: 'image/png',
            },
            {
              rel: 'mask-icon',
              href: settings.logo?.url ?? '',
              color: settings.theme_color,
            },
            ...[
              'OpenSans-BoldItalic',
              'OpenSans-SemiBoldItalic',
              'OpenSans-Italic',
              'OpenSans-Medium',
              'OpenSans-LightItalic',
              'OpenSans-SemiBold',
              'OpenSans-MediumItalic',
              'OpenSans-Bold',
              'OpenSans-ExtraBold',
              'OpenSans-Light',
              'OpenSans-Regular',
              'OpenSans-ExtraBoldItalic',
            ].map((font) => ({
              rel: 'preload',
              href: `/assets/fonts/OpenSans/${font}.woff2`,
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            })),
            ...[
              'Roboto-Regular',
              'Roboto-Bold',
              'Roboto-Black',
              'Roboto-LightItalic',
              'Roboto-Light',
              'Roboto-Thin',
              'Roboto-MediumItalic',
              'Roboto-Italic',
              'Roboto-BoldItalic',
              'Roboto-Medium',
              'Roboto-BlackItalic',
              'Roboto-ThinItalic',
            ].map((font) => ({
              rel: 'preload',
              href: `/assets/fonts/Roboto/${font}.woff2`,
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            })),
            ...['MonumentExtended-Ultrabold', 'MonumentExtended-Regular'].map(
              (font) => ({
                rel: 'preload',
                href: `/assets/fonts/Monument/${font}.woff2`,
                as: 'font',
                type: 'font/woff2',
                crossOrigin: 'anonymous',
              })
            ),
            //TODO alternate languages
          ]}
        />
        <Header
          navigation={navigation}
          logo={settings.logo}
          site_name={settings.site_name}
        />
        <main>{children}</main>
        <ContactPopup />
        <Footer />
      </ContactPopupProvider>
    </div>
  );
};
