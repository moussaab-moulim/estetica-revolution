import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Bounded } from './Bounded';
import { PrismicNextImage } from '@prismicio/next';
import { useMemo } from 'react';
import { Fragment, useState } from 'react';
import { AutoContainer } from './Containers';

export const Footer = () => {
  return (
    <footer
      className='main-footer'
      style={{
        backgroundImage:
          'url(http://blackfit.getmytemplate.com/images/background/2.jpg)',
      }}
    >
      <AutoContainer>
        {/* Widgets Section */}
        <div className='widgets-section'>
          <div className='clearfix flex flex-row'>
            {/* Big Column */}
            <div className='big-column basis-full px-[15px]'>
              <div className='clearfix flex flex-row justify-center'>
                {/*Footer Column*/}
                <div className='footer-column basis-full px-[15px] md:basis-1/2 lg:basis-1/3'>
                  <div className='footer-widget logo-widget'>
                    <div className='logo'>
                      <a href='index.html'>
                        <img src='https://via.placeholder.com/230x46' alt='' />
                      </a>
                    </div>
                    {/* Footer Mobile Logo */}
                    <div className='footer-mobile-logo'>
                      <a href='index.html'>
                        <img
                          src='https://via.placeholder.com/180x78'
                          alt=''
                          title=''
                        />
                      </a>
                    </div>
                    <ul className='info-list'>
                      <li>
                        <span>Address:</span>4578 Marmora Road, Glasgow
                      </li>
                      <li>
                        <span>Phones:</span>
                        <a href='tel:1-123-456-78-89'>+1-123-456-78-89</a>
                        <br />
                        <a href='tel:1-123-456-78-80'>+1-123-456-78-80</a>
                      </li>
                      <li>
                        <span>Working Hours:</span>Monday-Sunday: 07:00 - 22:00
                      </li>
                      <li>
                        <span>Email:</span>
                        <a href='mailto:info@bigbear.com'>info@bigbear.com</a>
                      </li>
                      <li className='social-links'>
                        <span>Our Socials:</span>
                        <a href='#' className='fa fa-facebook'></a>
                        <a href='#' className='fa fa-twitter'></a>
                        <a href='#' className='fa fa-instagram'></a>
                        <a href='#' className='fa fa-linkedin'></a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Footer Column*/}
                <div className='footer-column  basis-full px-[15px] md:basis-1/2 lg:basis-1/3'>
                  <div className='footer-widget news-widget'>
                    <h6>BLOG POSTS</h6>
                    <div className='widget-content'>
                      <div className='post'>
                        <div className='thumb'>
                          <a href='blog-single.html'>
                            <img
                              src='https://via.placeholder.com/85x85'
                              alt=''
                            />
                          </a>
                        </div>
                        <h5>
                          <a href='blog-single.html'>
                            HOW TO MAXIMISE TIME SPENT AT THE GYM
                          </a>
                        </h5>
                        <span className='date'>JUNE 21, 2020</span>
                      </div>

                      <div className='post'>
                        <div className='thumb'>
                          <a href='blog-single.html'>
                            <img
                              src='https://via.placeholder.com/85x85'
                              alt=''
                            />
                          </a>
                        </div>
                        <h5>
                          <a href='blog-single.html'>
                            10 TIPS HOW TO PREPARE MEALS FAST AND EASY
                          </a>
                        </h5>
                        <span className='date'>JUNE 21, 2020</span>
                      </div>

                      <div className='post'>
                        <div className='thumb'>
                          <a href='blog-single.html'>
                            <img
                              src='https://via.placeholder.com/85x85'
                              alt=''
                            />
                          </a>
                        </div>
                        <h5>
                          <a href='blog-single.html'>
                            SIMPLE CONDITION FOR ALL AROUND FITNESS
                          </a>
                        </h5>
                        <span className='date'>JUNE 21, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Column */}
                <div className='footer-column  basis-full px-[15px] md:basis-1/2 lg:basis-1/3'>
                  <div className='footer-widget gallery-widget'>
                    <h6>Instagram</h6>
                    <div className='widget-content'>
                      <div className='images-outer clearfix'>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                        {/*Image Box*/}
                        <figure className='image-box'>
                          <a
                            href='https://via.placeholder.com/320x320'
                            className='lightbox-image'
                            data-fancybox='footer-gallery'
                            title='Image Title Here'
                            data-fancybox-group='footer-gallery'
                          >
                            <img
                              src='https://via.placeholder.com/80x80'
                              alt=''
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='footer-bottom'>
          <div className='copyright'>DESIGN BY Uchiha Digital. 2022</div>
        </div>
      </AutoContainer>
    </footer>
  );
};
