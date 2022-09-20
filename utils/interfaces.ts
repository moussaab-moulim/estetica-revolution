import { PrismicNextImageProps } from '@prismicio/next';
import { ImageField } from '@prismicio/types';

export interface PageSeo {
  featured_image: ImageField;
  keywords: string;
  meta_description: string;
  meta_title: string;
  logo: ImageField;
  logo_invert: ImageField;
  favico: ImageField<'lg,md'>;
  domain: string;
  search_console_key: string;
  site_name: string;
  theme_color: string;
  path: string;
  locale: string;
  type: string;
  social_media: any;
}
