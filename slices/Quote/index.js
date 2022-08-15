import * as prismicH from '@prismicio/helpers';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import clsx from 'clsx';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import { AutoContainer } from '../../components/Containers';

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  paragraph: ({ children }) => (
    <p className='font-[20px] relative text-center font-momentun font-normal leading-[1.6em]'>
      {children}
    </p>
  ),
};

const Quote = ({ slice }) => {
  return (
    <section className='relative px-0 pt-[160px] pb-[80px]'>
      <AutoContainer>
        <div className='relative py-0 px-[105px]'>
          <FaQuoteLeft
            className='absolute left-0 -top-[60px]'
            size={70}
            color='rgba(255,255,255,0.07)'
          />
          <FaQuoteRight
            className='absolute right-0 -bottom-[60px]'
            size={70}
            color='rgba(255,255,255,0.07)'
          />

          {prismicH.isFilled.richText(slice.primary.quote) && (
            <figure>
              <blockquote>
                <PrismicRichText
                  field={slice.primary.quote}
                  components={components}
                />
              </blockquote>
              {prismicH.isFilled.keyText(slice.primary.source) && (
                <figcaption className='text-right'>
                  &mdash; {slice.primary.source}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </AutoContainer>
    </section>
  );
};

export default Quote;
