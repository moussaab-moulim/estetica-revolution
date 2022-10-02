import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React, { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useContactPopup } from './contactPopupContext';

const StepperComponent = dynamic(() => import('./CustomStepper'), {
  ssr: false,
});

function ContactPopup() {
  const { open, closePopup } = useContactPopup();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      age: '',
      height: '',
      weight: '',
      wantedWeight: '',
      objectives: [],
      name: '',
      mail: '',
      phone: '',
      message: '',
    },
  });
  const [step, setStep] = useState(1);
  const onSubmit = (data) => {
    setBmi(((data.weight / data.height / data.height) * 10000).toFixed(2));
  };
  return (
    <div
      id='purchase-popup'
      className={clsx('purchase-popup', open && 'popup-visible')}
    >
      <div className='close-search theme-btn' onClick={closePopup}>
        <span>Close</span>
      </div>
      <div className='popup-inner'>
        <div className='overlay-layer'></div>

        <div className='purchase-form'>
          <div className='sec-title centered'>
            <h2>
              <span>Bilan</span> Personnalisé
            </h2>
            <div className='text'>
              Ton rendez-vous est offert et sans engagement
            </div>
          </div>

          <form className='default-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col flex-nowrap'>
              <StepperComponent activeStep={step - 1} />

              <div
                className={clsx(
                  step === 1 ? 'flex' : 'hidden',
                  'flex-col flex-nowrap'
                )}
              >
                <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                  <Controller
                    name='age'
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Veuillez remplir le champ :Age',
                      },
                    }}
                    render={({ field }) => (
                      <input type='number' placeholder='ÂGE :' {...field} />
                    )}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                  <Controller
                    name='height'
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Veuillez remplir le champ :Taille',
                      },
                    }}
                    render={({ field }) => (
                      <input
                        type='number'
                        placeholder='TAILLE (CM) :'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                  <Controller
                    name='weight'
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Veuillez remplir le champ :Poids actuel',
                      },
                    }}
                    render={({ field }) => (
                      <input
                        type='number'
                        placeholder='POIDS ACTUEL (KG) :'
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                  <Controller
                    name='wantedWeight'
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Veuillez remplir le champ :Poids souhaité',
                      },
                    }}
                    render={({ field }) => (
                      <input
                        type='number'
                        placeholder='POIDS SOUHAITÉ (KG) :'
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>

              <div
                className={clsx(
                  step === 2 ? 'flex' : 'hidden',
                  ' flex-col flex-nowrap'
                )}
              >
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='objectives'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Fragment>
                        <input
                          type='checkbox'
                          value='Perte de poids'
                          {...field}
                        />{' '}
                        Perte de poids
                      </Fragment>
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='objectives'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Fragment>
                        <input
                          type='checkbox'
                          value='Remise en forme'
                          {...field}
                        />{' '}
                        Remise en forme
                      </Fragment>
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='objectives'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Fragment>
                        <input
                          type='checkbox'
                          value='Bien-être (cardio et renforcement)'
                          {...field}
                        />{' '}
                        Bien-être (cardio et renforcement)
                      </Fragment>
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='objectives'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Fragment>
                        <input
                          type='checkbox'
                          value='Raison médicale'
                          {...field}
                        />{' '}
                        Raison médicale
                      </Fragment>
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='objectives'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Fragment>
                        <input
                          type='checkbox'
                          value='Tonification et renforcement musculaire'
                          {...field}
                        />{' '}
                        Tonification et renforcement musculaire
                      </Fragment>
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='objectives'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Fragment>
                        <input
                          type='checkbox'
                          value='Préparation physique et performances'
                          {...field}
                        />{' '}
                        Préparation physique et performances
                      </Fragment>
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='objectives'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Fragment>
                        <input
                          type='checkbox'
                          value='Prise de masse'
                          {...field}
                        />{' '}
                        Prise de masse
                      </Fragment>
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='objectives'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Fragment>
                        <input type='checkbox' value='Autre' {...field} /> Autre
                      </Fragment>
                    )}
                  />
                </div>
              </div>

              <div
                className={clsx(
                  step === 3 ? 'flex' : 'hidden',
                  ' flex-col flex-nowrap'
                )}
              >
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='name'
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Veuillez remplir le champ :Nom',
                      },
                    }}
                    render={({ field }) => (
                      <input type='text' placeholder='NOM :' {...field} />
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='mail'
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Veuillez remplir le champ :Adresse mail',
                      },
                    }}
                    render={({ field }) => (
                      <input
                        type='email'
                        placeholder='ADRESSE MAIL :'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='phone'
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Veuillez remplir le champ :Téléphone',
                      },
                    }}
                    render={({ field }) => (
                      <input type='tel' placeholder='TÉLÉPHONE :' {...field} />
                    )}
                  />
                </div>

                <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                  <Controller
                    name='message'
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Veuillez remplir le champ :Message',
                      },
                    }}
                    render={({ field }) => (
                      <textarea
                        className='darma'
                        placeholder='MESSAGE :'
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>

              <div className='form-group col-lg-12 col-md-12 col-sm-12 text-center'>
                {Object.values(errors).map((_error) => (
                  <span className='font-poppins text-red-600'>
                    {_error.message} <br />
                  </span>
                ))}

                {step > 1 && (
                  <button
                    className='theme-btn btn-style-one mb-3'
                    name='submit-form'
                    onClick={() => setStep(step - 1)}
                  >
                    <span className='txt'>Précédent</span>
                  </button>
                )}
                {step < 3 && (
                  <button
                    className='theme-btn btn-style-one mb-3'
                    name='submit-form'
                    onClick={() => setStep(step + 1)}
                  >
                    <span className='txt'>Suivant</span>
                  </button>
                )}
                {step === 3 && (
                  <button
                    className='theme-btn btn-style-one'
                    type='submit'
                    name='submit-form'
                  >
                    <span className='txt'>ENVOYER</span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
