import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React, { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Heading } from '../Heading';
import { useContactPopup } from './contactPopupContext';

function ContactForm() {
  const { open, closePopup } = useContactPopup();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      mail: '',
      message: '',
    },
  });
  const onSubmit = async (data) => {
    const mailData = {
      //from: `estetica revolution <contact@fabiencarrichon.ch>`,
      // to: 'moussaabmma@gmail.com',
      subject: `Esteteticarevolition - Demande de contact`,
      replyTo: data.mail,
      text: data.message,
      html: `
        <div>
          <p>name: ${data.name}</p>
          <p>email: ${data.mail}</p>
          <p>message: ${data.message}</p>
        </div>`,
    };
    const contactResposne = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailData),
    });

    if (contactResposne.status === 200) {
      toast.success('Fomulaire envoyé avec success.\n');
      reset();
    } else {
      toast.error("Echec d'envoi.");
    }
  };

  return (
    <section id='contact' className='comment-form'>
      <div className='group-title text-center md:px-2'>
        <Heading as='h2'>Contactez nous</Heading>
      </div>
      <div className='form-text text-center md:px-2'>
        If you need of a Personal Trainer, Fitness Instructor advice, or a
        healthy living product review, <br /> please feel free to contact us
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='clearfix flex flex-row flex-wrap'>
          <div className='form-group basis-full md:basis-1/2 md:px-2'>
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
                <input type='text' placeholder='NOM' {...field} />
              )}
            />
          </div>

          <div className='form-group basis-full md:basis-1/2 md:px-2'>
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
                <input type='text' placeholder='ADRESSE MAIL' {...field} />
              )}
            />
          </div>

          <div className='form-group basis-full md:px-2'>
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
                <textarea className='darma' placeholder='MESSAGE' {...field} />
              )}
            />
          </div>

          <div className='clearfix form-group basis-full text-center md:px-2'>
            {Object.values(errors).map((_error) => (
              <span className='font-poppins text-red-600'>
                {_error.message} <br />
              </span>
            ))}
          </div>
          <div className='clearfix form-group basis-full text-center md:px-2'>
            <button
              className='theme-btn btn-style-one'
              type='submit'
              name='submit-form'
            >
              <span className='txt'>ENVOYER</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
