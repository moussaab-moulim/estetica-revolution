import React from 'react';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import { AutoContainer } from '../../components/Containers';
import { Heading, SectionTitle } from '../../components/Heading';
import { PrismicNextImage } from '@prismicio/next';
import * as prismicH from '@prismicio/helpers';
const listComponent = {
  list: ({ children }) => <ul className='price-list'>{children}</ul>,
  listItem: ({ children }) => <li className=''>{children}</li>,
};
const PricingPackages = ({ slice }) => (
  <section
    className='pricing-section'
    style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1092)' }}
  >
    <AutoContainer>
      <SectionTitle
        heading={slice.primary.title}
        text={slice.primary.description}
      />
      <div className='clearfix flex flex-row flex-wrap'>
        {/* Pricing Block */}

        {slice.items.map((item, index) => (
          <div
            key={index}
            className='price-block col-lg-4 col-md-4 col-sm-12 basis-full px-[15px] md:basis-1/3 '
          >
            <Heading as='h3' className='side-text leading-[unset]'>
              <PrismicText field={item.title} />
            </Heading>

            <div
              className='inner-box wow fadeInLeft h-full'
              data-wow-delay='0ms'
              data-wow-duration='1500ms'
            >
              <div className='icon-box'>
                <span className='icon'>
                  <PrismicNextImage
                    field={item.icon}
                    layout='fixed'
                    height={70}
                  />
                </span>
              </div>
              <PrismicRichText field={item.list} components={listComponent} />

              <div className='price'>
                {prismicH.asText(item.price).split('/')[0]}
                {prismicH.asText(item.price).split('/')[1] && (
                  <span>{prismicH.asText(item.price).split('/')[1]}</span>
                )}
              </div>
              <div className='theme-btn btn-style-one purchase-box-btn'>
                <span className='txt'>PURCHASE NOW</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AutoContainer>
  </section>
);

export default PricingPackages;
