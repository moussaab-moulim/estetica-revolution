import clsx from 'clsx';
import { Fragment } from 'react';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import { css } from '@emotion/css';
export const Heading = ({
  as: Comp = 'h1',
  size = 'lg',
  children,
  className,
}) => {
  return (
    <Comp
      className={clsx(
        'font-momentun font-bold uppercase',
        css`
          em {
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
            color: transparent;
            font-style: normal;
          }
        `,
        className
      )}
    >
      {children}
    </Comp>
  );
};

export const SectionTitle = ({ heading, text }) => {
  return (
    <div className='sec-title relative mb-[80px] text-center'>
      <PrismicRichText field={heading} />
      {text && <PrismicRichText field={text} />}
    </div>
  );
};
