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

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  paragraph: ({ children }) => (
    <p className='relative mt-[30px] mb-[40px] font-poppins text-[16px] font-normal leading-[1.8em] text-white opacity-50'>
      {children}
    </p>
  ),
};
const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;
  console.log('slice.primary.buttonLink', slice.primary.buttonLink);
  const { openPopup } = useContactPopup();
  return (
    <section
      className={clsx(
        'relative h-[957px] w-screen overflow-hidden before:absolute before:left-0 before:bottom-0 before:right-0 before:z-[9] before:h-[120px] before:w-full',
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
      {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=''
          layout='fill'
          className='pointer-events-none select-none object-cover opacity-100'
        />
      )}

      <div className='relative bg-cover bg-center py-[300px]'>
        <div className='static my-0 mx-auto max-w-[1200px] py-0 px-[15px]'>
          <div className='relative text-center'>
            <Heading
              as='h1'
              className='relative uppercase leading-[1em] md:text-[70px]'
            >
              <span className='outlined text-transparent'>
                {slice.primary.title.split(',')[0]}
              </span>
              <br />
              <span className='text-white'>
                {slice.primary.title.split(',')[1]}
              </span>
            </Heading>
            <PrismicRichText
              components={components}
              field={slice.primary.text}
            />
            <CustomButton
              field={slice.primary.buttonLink}
              text={slice.primary.buttonText}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
