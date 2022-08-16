import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { Bounded } from '../../components/Bounded';
import { Heading, SectionTitle } from '../../components/Heading';
import { ConditionalWrap } from '../../components/ConditionalWrap';
import { hrefResolver } from '../../prismicio';
import { CustomLink } from '../../components/CustomLink';
import React from 'react';
import { css } from '@emotion/css';
import clsx from 'clsx';
import { AutoContainer } from '../../components/Containers';

const ImageCard = ({ item, parenSize }) => {
  const image = item.image;

  return (
    <div
      className={`coach-block basis-full  p-0 sm:basis-1/${
        parenSize < 2 ? parenSize : 2
      } md:basis-1/${parenSize < 3 ? parenSize : 3} lg:basis-1/${
        parenSize < 4 ? parenSize : 4
      } xl:basis-1/${parenSize < 5 ? parenSize : 5}`}
    >
      <div className='inner-box'>
        <div className='image'>
          <PrismicNextImage field={image} layout='responsive' />
          {/* Overlay Box */}
          <div className='overlay-box'>
            <CustomLink link={item.buttonLink} className='overlay-link' />
            <div className='overlay-inner'>
              <div className='content'>
                <Heading as='h3' size='md'>
                  <CustomLink
                    link={item.buttonLink}
                    linkText={prismicH.asText(item.title)}
                    className={clsx('text-[30px]')}
                  />
                </Heading>
              </div>
            </div>
          </div>
          {/* Overlay Box Two */}
          <div className='overlay-box-two'>
            <CustomLink link={item.buttonLink} className={'overlay-link-two'} />
            <div className='content'>
              <PrismicRichText field={item.text} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ImageCardNotext = ({ item }) => {
  const image = item.image;
  console.log('button link ', item.buttonLink);
  return (
    <div className='service-block relative basis-full  p-0 sm:basis-1/2 md:basis-1/3  lg:basis-1/4 xl:basis-1/5'>
      <div className='inner-box relative'>
        <div
          className={clsx(
            'image relative overflow-hidden',
            css`
              &:hover .overlay-box:before {
                height: 0%;
              }
            `
          )}
        >
          <CustomLink
            link={item.buttonLink}
            className={css`
              position: absolute;
              left: 0px;
              top: 0px;
              right: 0px;
              bottom: 0px;
              z-index: 2;
            `}
          />
          <PrismicNextImage field={image} layout='responsive' />

          <div
            className={clsx(
              'overlay-box',
              css`
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: all 900ms ease;
                &:before {
                  position: absolute;
                  content: '';
                  left: 0px;
                  top: 0px;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0, 0, 0, 0.5);
                  transition: all 900ms ease;
                }
              `
            )}
          >
            <div
              className={css`
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                display: table;
                vertical-align: middle;
                padding: 10px 0px;
              `}
            >
              <div
                className={css`
                  position: relative;
                  display: table-cell;
                  vertical-align: middle;
                `}
              >
                <Heading
                  as='h3'
                  size='md'
                  className={css`
                    position: relative;
                    line-height: 1.2em;
                    margin-bottom: 0px;
                    letter-spacing: 2px;
                    text-transform: capitalize;
                    font-weight: normal;
                  `}
                >
                  <CustomLink
                    link={item.buttonLink}
                    linkText={prismicH.asText(item.title)}
                    className={clsx(
                      css`
                        position: relative;
                        color: transparent;
                        -webkit-text-stroke-width: 1px;
                        -webkit-text-stroke-color: #ffffff;
                        text-transform: uppercase;
                        transition: all 900ms ease;
                      `,
                      'text-[24px]'
                    )}
                  />
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageCards = ({ slice }) => {
  return (
    <section className='relative'>
      {prismicH.isFilled.richText(slice.primary.heading) && (
        <AutoContainer>
          <SectionTitle
            heading={slice.primary.heading}
            text={slice.primary.text}
          />
        </AutoContainer>
      )}

      <div className='outer-container four-item-carousel flex flex-wrap justify-center'>
        {slice.items.map((item, index) =>
          slice.variation === 'imageCardsWithNoText' ? (
            <ImageCardNotext item={item} key={index} />
          ) : (
            <ImageCard item={item} key={index} parenSize={slice.items.length} />
          )
        )}
      </div>
    </section>
  );
};

export default ImageCards;
