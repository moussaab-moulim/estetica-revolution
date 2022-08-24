import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { AutoContainer } from '../../components/Containers';
import { SectionTitle } from '../../components/Heading';
import { css } from '@emotion/css';
import clsx from 'clsx';
const FieldContainer = ({ className, children }) => (
  <div
    className={clsx(
      css`
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
      `,
      'col-lg-4 col-md-6 col-sm-12',
      className
    )}
  >
    {children}
  </div>
);

const BmiCalculator = ({ slice }) => {
  return (
    <section className='calculator-section'>
      <AutoContainer>
        <SectionTitle
          heading={slice.primary.title}
          text={slice.primary.description}
        />

        <div className='inner-container'>
          {/* Default Form */}
          <div className='default-form'>
            {/* Default Form */}
            <form method='post' action='contact.html'>
              <div className='clearfix flex flex-row flex-wrap'>
                <FieldContainer className='form-group basis-full md:basis-1/2 '>
                  <input
                    type='text'
                    name='cm'
                    placeholder='Height / Cm'
                    required
                  />
                </FieldContainer>

                <FieldContainer className='form-group basis-full md:basis-1/2 '>
                  <input
                    type='text'
                    name='weight'
                    placeholder='Weight / kg'
                    required
                  />
                </FieldContainer>

                <FieldContainer className='form-group basis-full md:basis-1/2 '>
                  <input type='text' name='age' placeholder='Age' required />
                </FieldContainer>

                <FieldContainer className='form-group basis-full md:basis-1/2 '>
                  <button
                    className='theme-btn btn-style-one'
                    type='submit'
                    name='submit-form'
                  >
                    <span className='txt'>CALCULATE</span>
                  </button>
                </FieldContainer>
              </div>
            </form>

            {/*End Default Form */}
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default BmiCalculator;
