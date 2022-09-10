import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { AutoContainer } from '../../components/Containers';

const Reviews = ({ slice }) => (
  <section className='testimonial-section-two'>
    <AutoContainer>
      <SectionTitle
        heading={slice.primary.title}
        text={slice.primary.description}
      />

      <div className='testimonial-outer'>
        {/*Product Thumbs Carousel*/}
        <div className='client-thumb-outer'>
          <div className='client-thumbs-carousel owl-carousel owl-theme'>
            <div className='thumb-item'>
              <figure className='thumb-box'>
                <img src='https://via.placeholder.com/144x144' alt='' />
              </figure>
            </div>
            <div className='thumb-item'>
              <figure className='thumb-box'>
                <img src='https://via.placeholder.com/144x144' alt='' />
              </figure>
            </div>
            <div className='thumb-item'>
              <figure className='thumb-box'>
                <img src='https://via.placeholder.com/144x144' alt='' />
              </figure>
            </div>
            <div className='thumb-item'>
              <figure className='thumb-box'>
                <img src='https://via.placeholder.com/144x144' alt='' />
              </figure>
            </div>
            <div className='thumb-item'>
              <figure className='thumb-box'>
                <img src='https://via.placeholder.com/144x144' alt='' />
              </figure>
            </div>
            <div className='thumb-item'>
              <figure className='thumb-box'>
                <img src='https://via.placeholder.com/144x144' alt='' />
              </figure>
            </div>
          </div>
        </div>

        {/* Client Testimonial Carousel */}
        <div className='client-testimonial-carousel owl-carousel owl-theme'>
          {/*Testimonial Block */}
          <div className='testimonial-block-two'>
            <div className='inner-box'>
              <span className='quote-left flaticon-quote-3'></span>
              <span className='quote-right flaticon-quote-4'></span>
              <div className='text'>
                “BLACKFIT’s 90 day challenge put me back in the gym on a
                consistent basis. I eat clean and listen to the advice of coach
                on every workout”
              </div>
              <div className='author-info'>
                <div className='author-name'>Samantha Green</div>
                <div className='designation'>CEO of Company</div>
              </div>
            </div>
          </div>

          {/*Testimonial Block */}
          <div className='testimonial-block-two'>
            <div className='inner-box'>
              <span className='quote-left flaticon-quote-3'></span>
              <span className='quote-right flaticon-quote-4'></span>
              <div className='text'>
                “BLACKFIT’s 90 day challenge put me back in the gym on a
                consistent basis. I eat clean and listen to the advice of coach
                on every workout”
              </div>
              <div className='author-info'>
                <div className='author-name'>Samantha Green</div>
                <div className='designation'>CEO of Company</div>
              </div>
            </div>
          </div>

          {/*Testimonial Block */}
          <div className='testimonial-block-two'>
            <div className='inner-box'>
              <span className='quote-left flaticon-quote-3'></span>
              <span className='quote-right flaticon-quote-4'></span>
              <div className='text'>
                “BLACKFIT’s 90 day challenge put me back in the gym on a
                consistent basis. I eat clean and listen to the advice of coach
                on every workout”
              </div>
              <div className='author-info'>
                <div className='author-name'>Samantha Green</div>
                <div className='designation'>CEO of Company</div>
              </div>
            </div>
          </div>

          {/*Testimonial Block */}
          <div className='testimonial-block-two'>
            <div className='inner-box'>
              <span className='quote-left flaticon-quote-3'></span>
              <span className='quote-right flaticon-quote-4'></span>
              <div className='text'>
                “BLACKFIT’s 90 day challenge put me back in the gym on a
                consistent basis. I eat clean and listen to the advice of coach
                on every workout”
              </div>
              <div className='author-info'>
                <div className='author-name'>Samantha Green</div>
                <div className='designation'>CEO of Company</div>
              </div>
            </div>
          </div>

          {/*Testimonial Block */}
          <div className='testimonial-block-two'>
            <div className='inner-box'>
              <span className='quote-left flaticon-quote-3'></span>
              <span className='quote-right flaticon-quote-4'></span>
              <div className='text'>
                “BLACKFIT’s 90 day challenge put me back in the gym on a
                consistent basis. I eat clean and listen to the advice of coach
                on every workout”
              </div>
              <div className='author-info'>
                <div className='author-name'>Samantha Green</div>
                <div className='designation'>CEO of Company</div>
              </div>
            </div>
          </div>

          {/*Testimonial Block */}
          <div className='testimonial-block-two'>
            <div className='inner-box'>
              <span className='quote-left flaticon-quote-3'></span>
              <span className='quote-right flaticon-quote-4'></span>
              <div className='text'>
                “BLACKFIT’s 90 day challenge put me back in the gym on a
                consistent basis. I eat clean and listen to the advice of coach
                on every workout”
              </div>
              <div className='author-info'>
                <div className='author-name'>Samantha Green</div>
                <div className='designation'>CEO of Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AutoContainer>
  </section>
);

export default Reviews;
