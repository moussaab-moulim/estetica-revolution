import { PrismicLink } from '@prismicio/react';
import React from 'react';
import { ConditionalWrap } from './ConditionalWrap';
import { useContactPopup } from './ContactPopup/contactPopupContext';

function CustomButton(props) {
  const { openPopup } = useContactPopup();
  const { field, text } = props;
  return (
    <ConditionalWrap
      condition={field.url.includes('https://action:')}
      wrap={({ children }) => (
        <div className={`theme-btn btn-style-one`} onClick={openPopup}>
          {children}
        </div>
      )}
      antiWrap={({ children }) => (
        <PrismicLink field={field} className={`theme-btn btn-style-one`}>
          {children}
        </PrismicLink>
      )}
    >
      <span className='relative z-[1]'>{text || 'Découvrir'}</span>
    </ConditionalWrap>
  );
}

export default CustomButton;
