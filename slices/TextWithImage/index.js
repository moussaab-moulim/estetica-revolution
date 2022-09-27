import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { Bounded } from '../../components/Bounded';
import { AutoContainer } from '../../components/Containers';
import { Heading } from '../../components/Heading';
import clsx from 'clsx';
import { css } from '@emotion/css';
const textComponent = {
  heading2: ({ children, text, ...other }) => (
    <Heading as='h2' className='title-box text-[40px]'>
      {text.split('\n')[0]}
      <br />
      {text.split('\n')[1] && (
        <span className='category'>{text.split('\n')[1]}</span>
      )}
    </Heading>
  ),
};

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <section
      className={clsx(
        'sidebar-page-container',
        css`
          background-color: ${slice?.primary?.background_color ?? '#000000'};
        `
      )}
    >
      <AutoContainer>
        <div className='trainer-detail'>
          <div className='inner-box'>
            <div
              className={clsx(
                'clearfix flex ',
                slice.variation === 'rightText'
                  ? 'flex-row-reverse'
                  : 'flex-row'
              )}
            >
              {/* Column */}
              <div className='flex basis-full flex-col px-[15px] md:basis-1/2'>
                <PrismicRichText
                  field={slice.primary.title}
                  components={textComponent}
                />
                <PrismicRichText field={slice.primary.text} />
              </div>
              {/* Column */}
              <div className='flex basis-full flex-col px-[15px] md:basis-1/2'>
                <div className='image'>
                  <PrismicNextImage field={image} layout='responsive' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default TextWithImage;
