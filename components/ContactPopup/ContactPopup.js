import clsx from 'clsx';
import React from 'react';
import { useContactPopup } from './contactPopupContext';

function ContactPopup() {
  const { open, closePopup } = useContactPopup();

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
              <span>GET FREE</span> CONSULTATION
            </h2>
            <div className='text'>
              If you need of a Personal Trainer, Fitness Instructor advice, or a
              healthy <br /> living product review, please feel free to contact
              us
            </div>
          </div>

          <form method='post' action='contact.html'>
            <div className='row clearfix'>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input type='text' name='name' placeholder='Name' required />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input type='email' name='email' placeholder='Email' required />
              </div>

              <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  required
                />
              </div>

              <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                <textarea
                  className='darma'
                  name='message'
                  placeholder='Your Message'
                ></textarea>
              </div>

              <div className='form-group col-lg-12 col-md-12 col-sm-12 text-center'>
                <span className='data'>* Personal data will be encrypted</span>
                <button
                  className='theme-btn btn-style-one'
                  type='submit'
                  name='submit-form'
                >
                  <span className='txt'>SEND MESSAGE</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
