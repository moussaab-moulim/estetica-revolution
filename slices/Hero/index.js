import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { Bounded } from '../../components/Bounded';
import { Heading } from '../../components/Heading';
import { ConditionalWrap } from '../../components/ConditionalWrap';
import { useContactPopup } from '../../components/ContactPopup/contactPopupContext';
import clsx from 'clsx';
import { css } from '@emotion/css';
import { linkResolver } from '../../prismicio';
import CustomButton from '../../components/CustomButton';
import { AutoContainer } from '../../components/Containers';

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  paragraph: ({ children }) => <p className='text'>{children}</p>,
};
const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  if (slice.variation === 'noActionHero') {
    return (
      <section
        className='page-title'
        style={{ backgroundImage: `url(${backgroundImage.url})` }}
      >
        <AutoContainer>
          <PrismicRichText field={slice.primary.title} />
        </AutoContainer>
      </section>
    );
  }
  return (
    <section
      className={clsx(
        'banner-section',
        css`
          &::before {
            content: '';
            background: linear-gradient(
              to bottom,
              rgba(34, 34, 34, 0) 0%,
              rgba(0, 0, 0, 0.99) 99%,
              rgba(0, 0, 0, 1) 100%
            );
          }
        `
      )}
    >
      <div className='slide'>
        <div
          className='image-layer'
          style={{ backgroundImage: `url(${backgroundImage.url})` }}
        />
        <AutoContainer>
          <div className='content-boxed'>
            <div className='inner-boxed'>
              <Heading as='h1'>
                {slice.primary.title.split(',')[0]}

                <br />
                <span>{slice.primary.title.split(',')[1]}</span>
              </Heading>
              <PrismicRichText
                components={components}
                field={slice.primary.text}
              />
              <div className='btns-box'>
                <CustomButton
                  field={slice.primary.buttonLink}
                  text={slice.primary.buttonText}
                />
              </div>
            </div>
          </div>
        </AutoContainer>
      </div>
    </section>
  );
};

export default Hero;
