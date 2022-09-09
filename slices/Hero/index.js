import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { Bounded } from '../../components/Bounded';
import { Heading } from '../../components/Heading';

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

  return (
    <section
      className='relative h-[957px] w-screen overflow-hidden before:absolute
     before:left-0 before:bottom-0 before:right-0 before:z-[9] before:h-[120px]
     before:w-full '
    >
      <style jsx>{`
        ::before {
          content: '';
          background: linear-gradient(
            to bottom,
            rgba(34, 34, 34, 0) 0%,
            rgba(0, 0, 0, 0.99) 99%,
            rgba(0, 0, 0, 1) 100%
          );
        }
      `}</style>
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
            {prismicH.isFilled.link(slice.primary.buttonLink) && (
              <PrismicLink
                field={slice.primary.buttonLink}
                className={`rounded-zero before: relative left-0 inline-block cursor-pointer 
                overflow-hidden border-2 border-solid border-white/20 py-[14px] px-[46px]
                font-poppins text-[16px] font-semibold uppercase text-white transition-all 
                duration-300 ease-linear
                before:absolute before:top-0 before:left-0
                before:z-[1] before:h-full before:w-full before:scale-x-100
                before:scale-y-50 before:bg-white before:opacity-0 before:transition-all 
                before:duration-300 before:ease-linear hover:border-white hover:text-black 
                hover:before:scale-y-100 hover:before:opacity-100`}
              >
                <span className='relative z-[1]'>
                  {slice.primary.buttonText || 'Learn More'}
                </span>
              </PrismicLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
