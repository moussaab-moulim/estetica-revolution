import { css } from '@emotion/react';
import * as prismicH from '@prismicio/helpers';
import { PrismicLink } from '@prismicio/react';
import clsx from 'clsx';
export const CustomLink = ({ className, link, linkText }) => {
  return prismicH.isFilled.link(link) ? (
    <PrismicLink field={link} className={className}>
      {linkText ?? ''}
    </PrismicLink>
  ) : (
    <a className={className}>{linkText ?? ''}</a>
  );
};
