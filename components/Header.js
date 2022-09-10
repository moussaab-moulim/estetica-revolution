import { PrismicLink, PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Bounded } from './Bounded';
import { PrismicNextImage } from '@prismicio/next';
import { useMemo } from 'react';
import { Fragment, useState } from 'react';

export const Header = ({ navigation, logo, site_name }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const links = useMemo(() => {
    const groupedLink = [];

    navigation.data?.links.forEach((link) => {
      if (link.parent === null) {
        groupedLink.push({ ...link, childen: [] });
      } else {
        if (groupedLink.some((_link) => _link.label[0].text === link.parent)) {
          groupedLink
            .find((_link) => _link.label[0].text === link.parent)
            .childen.push(link);
        } else {
          groupedLink.push({ ...link, childen: [] });
        }
      }
    });
    return groupedLink;
  }, [navigation]);

  const logoElement = useMemo(() => {
    return prismicH.isFilled.image(logo) ? (
      <PrismicLink
        href='/'
        className='block text-xl font-semibold tracking-tight'
      >
        <PrismicNextImage
          field={logo}
          alt=''
          width={38.87}
          height={46}
          layout='responsive'
        />
      </PrismicLink>
    ) : (
      <PrismicLink href='/' className='text-xl font-semibold tracking-tight'>
        {site_name}
      </PrismicLink>
    );
  }, [logo, site_name]);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };
  const handleToggleSubmenu = (index) => {
    if (index === openSubmenu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(index);
    }
  };

  return (
    <Fragment>
      <header className='absolute z-[99] m-0 w-full'>
        <div className='header-upper'>
          <div className='relative py-0 px-[60px]'>
            <div className='relative'>
              {/* Logo Box */}
              <div className='absolute left-2/4 inline-block -translate-x-2/4 py-5 px-0'>
                <div className='relative w-[66px]'>{logoElement}</div>
              </div>

              {/* Logo */}
              <div className='float-left hidden'>{logoElement}</div>

              {/* Header Social Box // TODO social icons */}

              {/*  <div className='header-social-box clearfix'>
              <a href='#' className='fa fa-facebook'></a>
              <a href='#' className='fa fa-twitter'></a>
              <a href='#' className='fa fa-instagram'></a>
              <a href='#' className='fa fa-linkedin'></a>
            </div> */}

              <div className='outer-box clearfix relative float-right ml-0 px-0 pt-[55px] pb-[20px]'>
                {/* Hidden Nav Toggler */}
                <div className='nav-toggler relative float-left'>
                  <div className='nav-btn'>
                    <button
                      onClick={handleMenuOpen}
                      className='hidden-bar-opener cursor-pointer bg-none font-poppins text-base font-semibold uppercase tracking-[1px] text-white'
                    >
                      Menu
                    </button>
                  </div>
                </div>
                {/* / Hidden Nav Toggler */}
              </div>

              <div className='nav-outer clearfix relative float-right'>
                {/*Mobile Navigation Toggler
                 */}
                <div className='mobile-nav-toggler relative float-right hidden cursor-pointer text-[36px] leading-[50px] text-white'>
                  <span className='icon'>
                    <HiOutlineMenuAlt3 color='#ffffff' size={28} />
                  </span>
                </div>
                {/* Main Menu  // TODO i cans see the function*/}
                <nav className='main-menu navbar-expand-md relative float-left hidden transition-all duration-300 ease-linear md:flex-row md:flex-nowrap md:justify-start'>
                  <div className='navbar-header'>
                    {/* Toggle Button */}
                    <button
                      className='navbar-toggler hi'
                      type='button'
                      data-toggle='collapse'
                      data-target='#navbarSupportedContent'
                      aria-controls='navbarSupportedContent'
                      aria-expanded='false'
                      aria-label='Toggle navigation'
                    >
                      <span className='icon-bar'></span>
                      <span className='icon-bar'></span>
                      <span className='icon-bar'></span>
                    </button>
                  </div>
                  {/*removed navbar-collapse collapse clearfix */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FullScreen Menu */}

      <div
        className={`fullscreen-menu ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        } fixed left-0 top-0 z-[99999] h-full w-full overflow-y-auto bg-black/[.92]  transition-all duration-700 ease-linear`}
      >
        {/*Close Btn*/}
        <div
          onClick={handleMenuClose}
          className='close-menu absolute top-[55px] right-[48px] z-10 cursor-pointer font-poppins text-base font-semibold uppercase tracking-[2px] text-white transition-all duration-700 ease-linear'
        >
          <span>Fermer</span>
        </div>

        <div className='menu-outer-container transaction-all absolute left-0 top-0 table h-full w-full align-middle duration-300 ease-linear'>
          <div className='menu-box relative table-cell w-full align-middle'>
            <nav className='full-menu relative my-0 mx-auto block max-w-[600px] px-[15px] pt-[55px] text-center'>
              <ul className='navigation relative block'>
                {links.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      item.childen.length > 0 ? 'dropdown' : ''
                    } relative block pb-[20px]`}
                  >
                    {prismicH.isFilled.link(item.link) ? (
                      <PrismicLink
                        field={item.link}
                        className='relative inline-block cursor-pointer font-momentun text-[30px] font-bold uppercase text-white transition-all duration-300 ease-linear'
                      >
                        <PrismicText field={item.label} />
                      </PrismicLink>
                    ) : (
                      <div
                        onClick={() => handleToggleSubmenu(index)}
                        className='relative inline-block cursor-pointer font-momentun text-[30px] font-bold uppercase text-white transition-all duration-300 ease-linear'
                      >
                        <PrismicText field={item.label} />
                      </div>
                    )}
                    {item.childen.length > 0 && (
                      <ul
                        className={`${
                          index === openSubmenu
                            ? '  max-h-[500px] duration-1000 ease-linear'
                            : '  max-h-0 duration-700 ease-linear'
                        } relative overflow-hidden transition-[max-height] `}
                      >
                        {item.childen.map((_child, childIndex) => (
                          <li
                            key={childIndex}
                            className={`relative ${
                              childIndex === item.length
                                ? ' mb-[15px]'
                                : 'mb-[8px]'
                            }  block ${childIndex === 0 && 'mt-[15px]'}`}
                          >
                            {prismicH.isFilled.link(_child.link) ? (
                              <PrismicLink
                                field={_child.link}
                                className='inline-block cursor-pointer font-poppins text-[16px] font-normal capitalize text-[#666666] transition-all duration-300 ease-linear hover:text-white'
                              >
                                <PrismicText field={_child.label} />
                              </PrismicLink>
                            ) : (
                              <div className='inline-block cursor-pointer font-poppins text-[16px] font-normal capitalize text-[#666666] transition-all duration-300 ease-linear hover:text-white'>
                                <PrismicText field={_child.label} />
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* End FullScreen Menu */}
    </Fragment>
  );
};
