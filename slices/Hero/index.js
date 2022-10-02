import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { Bounded } from '../../components/Bounded';
import { Heading } from '../../components/Heading';
import { ConditionalWrap } from '../../components/ConditionalWrap';
import { useContactPopup } from '../../components/Contact/contactPopupContext';
import clsx from 'clsx';
import { css } from '@emotion/css';
import { linkResolver } from '../../prismicio';
import CustomButton from '../../components/CustomButton';
import { AutoContainer } from '../../components/Containers';
import { useRouter } from 'next/router';

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  paragraph: ({ children }) => <p className='text'>{children}</p>,
};
const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;
  const router = useRouter();
  if (slice.variation === 'noActionHero') {
    return (
      <section
        className='page-title'
        style={{ backgroundImage: `url(${backgroundImage.url})` }}
      >
        <AutoContainer
          className={css`
            @media only screen and (min-width: 600px) {
              h1 {
                font-size: 40px;
              }
            }
          `}
        >
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
          position: relative;
          padding-top: 300px;
          padding-bottom: 300px;
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
      {router.route !== '/' ? (
        <div
          className='image-layer'
          style={{ backgroundImage: `url(${backgroundImage.url})` }}
        />
      ) : (
        <div
          className={clsx(
            css`
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
              position: absolute;
              overflow: hidden;
              z-index: 0;
              direction: ltr;
            `
          )}
        >
          <video
            autoPlay
            loop
            muted
            className={clsx(
              'opacity-40',
              css`
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                object-fit: cover;
                max-width: unset;
                height: unset;
              `
            )}
          >
            <source
              src='https://prismic-io.s3.amazonaws.com/estetica-revolution/e3fa36ea-42e7-407e-91dc-1881e5a9ef84_ER+-+Video+Presentation.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <AutoContainer className='z-1'>
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
    </section>
  );
};

export default Hero;
