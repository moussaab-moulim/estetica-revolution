import React, { useState, Fragment } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { AutoContainer } from '../../components/Containers';
import { SectionTitle } from '../../components/Heading';
import { css } from '@emotion/css';
import clsx from 'clsx';
import { useContactPopup } from '../../components/ContactPopup/contactPopupContext';
import { useForm, Controller } from 'react-hook-form';

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
  const { handleSubmit, control } = useForm({
    defaultValues: {
      height: null,
      weight: null,
      age: null,
    },
  });
  const { openPopup } = useContactPopup();

  const [bmi, setBmi] = useState(null);
  const onSubmit = (data) => {
    setBmi(((data.weight / data.height / data.height) * 10000).toFixed(2));
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='clearfix flex flex-row flex-wrap'>
                <FieldContainer className='form-group basis-full md:basis-1/3 '>
                  <Controller
                    name='height'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input type='text' placeholder='Height / Cm' {...field} />
                    )}
                  />
                </FieldContainer>

                <FieldContainer className='form-group basis-full md:basis-1/3 '>
                  <Controller
                    name='weight'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input type='text' placeholder='Weight / kg' {...field} />
                    )}
                  />
                </FieldContainer>

                {/*  <FieldContainer className='form-group basis-full md:basis-1/2 '>
                  <Controller
                    name='age'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input type='text' placeholder='Age' {...field} />
                    )}
                  />
                </FieldContainer> */}

                <FieldContainer className='form-group basis-full md:basis-1/3 '>
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

            {bmi && (
              <Fragment>
                <div className='relative my-[80px] text-center'>
                  Ton score est : {bmi}
                </div>
                <div className='clearfix flex flex-row flex-wrap'>
                  <FieldContainer className='form-group basis-full md:basis-1/2 '>
                    <button
                      className='theme-btn btn-style-one'
                      onClick={() => {
                        setBmi(null);
                      }}
                    >
                      <span className='txt'>Fermer</span>
                    </button>
                  </FieldContainer>
                  <FieldContainer className='form-group basis-full md:basis-1/2 '>
                    <button
                      className='theme-btn btn-style-one'
                      onClick={openPopup}
                    >
                      <span className='txt'>Consultation gratuite</span>
                    </button>
                  </FieldContainer>
                </div>
              </Fragment>
            )}

            {/*End Default Form */}
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

export default BmiCalculator;
