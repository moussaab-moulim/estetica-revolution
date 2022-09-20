import { linkResolver } from '../prismicio';
import { PageSeo } from './interfaces';

export const mapPageSeo = (page, settings): PageSeo => ({
  featured_image: page.data.featured_image,
  keywords: page.data.keywords,
  meta_description: page.data.meta_description,
  meta_title: page.data.meta_title,
  domain: settings.data.domain,
  logo: settings.data.logo,
  logo_invert: settings.data.logo_invert,
  favico: settings.data.favico,
  search_console_key: settings.data.search_console_key,
  site_name: settings.data.site_name,
  theme_color: settings.data.theme_color,
  path: linkResolver(page),
  type: page.type === 'page' ? 'website' : 'article',
  locale: page.lang,
  social_media: settings.data.social_media,
});
