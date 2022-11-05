import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { useMemo } from "react";
import { Fragment, useState } from "react";
import * as Icon from "react-icons/fa";
import Image from "next/image";
import { webLinkResolver } from "../prismicio";
export const Header = ({ navigation, logo, site_name, social_media }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const links = useMemo(() => {
        const groupedLink = [];

        navigation.data?.links.forEach((link) => {
            if (link.parent === null) {
                groupedLink.push({ ...link, childen: [] });
            } else {
                if (
                    groupedLink.some(
                        (_link) => _link.label[0].text === link.parent,
                    )
                ) {
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
                href="/"
                className="block text-xl font-semibold tracking-tight"
            >
                <Image
                    src={logo.url}
                    alt={logo.alt}
                    width={38.87}
                    height={46}
                    layout="responsive"
                    objectFit="contain"
                />
            </PrismicLink>
        ) : (
            <PrismicLink
                href="/"
                className="text-xl font-semibold tracking-tight"
            >
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
            <header className="main-header header-style-one">
                <div className="header-upper">
                    <div className="outer-container">
                        <div className="inner-container flex items-center justify-between">
                            <div className="header-social-box clearfix">
                                {social_media.map((_social, key) => {
                                    const SocialIcon = Icon[_social.icon];
                                    return (
                                        <PrismicLink
                                            key={key}
                                            field={_social.link}
                                        >
                                            <SocialIcon size={26} />
                                        </PrismicLink>
                                    );
                                })}
                            </div>
                            {/* Logo Box */}
                            <div className="logo-box !md:py-[20px] !py-[10px]">
                                <div className="logo !w-[42px] md:!w-[60px]">
                                    {logoElement}
                                </div>
                            </div>

                            <div className="outer-box relative">
                                {/* Hidden Nav Toggler */}
                                <div className="nav-toggler ">
                                    <div className="nav-btn">
                                        <button
                                            onClick={handleMenuOpen}
                                            className="hidden-bar-opener"
                                        >
                                            Menu
                                        </button>
                                    </div>
                                </div>
                                {/* / Hidden Nav Toggler */}
                            </div>
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler
                                 */}
                                <div
                                    className={`mobile-nav-toggler`}
                                    onClick={handleMenuOpen}
                                >
                                    <span className="icon">
                                        <HiOutlineMenuAlt3
                                            color="#ffffff"
                                            size={35}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* FullScreen Menu */}

            <div
                className={`fullscreen-menu ${
                    menuOpen ? "visible opacity-100" : "invisible opacity-0"
                } fixed left-0 top-0 z-[99999] h-full w-full overflow-y-auto bg-black/[.92]  transition-all duration-700 ease-linear`}
            >
                {/*Close Btn*/}
                <div
                    onClick={handleMenuClose}
                    className="close-menu absolute top-[55px] right-[48px] z-10 cursor-pointer font-poppins text-base font-semibold uppercase tracking-[2px] text-white transition-all duration-700 ease-linear"
                >
                    <span>Fermer</span>
                </div>

                <div className="menu-outer-container transaction-all absolute left-0 top-0 table h-full w-full align-middle duration-300 ease-linear">
                    <div className="menu-box relative table-cell w-full align-middle">
                        <nav className="full-menu relative my-0 mx-auto block max-w-[600px] px-[15px] pt-[55px] text-center">
                            <ul className="navigation relative block">
                                {links.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${
                                            item.childen.length > 0
                                                ? "dropdown"
                                                : ""
                                        } relative block pb-[20px]`}
                                    >
                                        {prismicH.isFilled.link(item.link) ? (
                                            <PrismicLink
                                                field={item.link}
                                                className="relative inline-block cursor-pointer font-momentun text-[20px] font-bold uppercase text-white transition-all duration-300 ease-linear md:text-[30px]"
                                                onClick={handleMenuClose}
                                                linkResolver={webLinkResolver}
                                            >
                                                <PrismicText
                                                    field={item.label}
                                                />
                                            </PrismicLink>
                                        ) : (
                                            <div
                                                onClick={() =>
                                                    handleToggleSubmenu(index)
                                                }
                                                className="relative inline-block cursor-pointer font-momentun text-[20px] font-bold uppercase text-white transition-all duration-300 ease-linear md:text-[30px]"
                                            >
                                                <PrismicText
                                                    field={item.label}
                                                />
                                            </div>
                                        )}
                                        {item.childen.length > 0 && (
                                            <ul
                                                className={`${
                                                    index === openSubmenu
                                                        ? "max-h-[500px] duration-1000 ease-linear"
                                                        : "max-h-0 duration-700 ease-linear"
                                                } relative overflow-hidden transition-[max-height] `}
                                            >
                                                {item.childen.map(
                                                    (_child, childIndex) => (
                                                        <li
                                                            key={childIndex}
                                                            className={`relative ${
                                                                childIndex ===
                                                                item.length
                                                                    ? " mb-[15px]"
                                                                    : "mb-[8px]"
                                                            }  block ${
                                                                childIndex ===
                                                                    0 &&
                                                                "mt-[15px]"
                                                            }`}
                                                        >
                                                            {prismicH.isFilled.link(
                                                                _child.link,
                                                            ) ? (
                                                                <PrismicLink
                                                                    field={
                                                                        _child.link
                                                                    }
                                                                    className="inline-block cursor-pointer font-poppins text-[16px] font-normal capitalize text-[#666666] transition-all duration-300 ease-linear hover:text-white"
                                                                    onClick={
                                                                        handleMenuClose
                                                                    }
                                                                    linkResolver={
                                                                        webLinkResolver
                                                                    }
                                                                >
                                                                    <PrismicText
                                                                        field={
                                                                            _child.label
                                                                        }
                                                                    />
                                                                </PrismicLink>
                                                            ) : (
                                                                <div className="inline-block cursor-pointer font-poppins text-[16px] font-normal capitalize text-[#666666] transition-all duration-300 ease-linear hover:text-white">
                                                                    <PrismicText
                                                                        field={
                                                                            _child.label
                                                                        }
                                                                    />
                                                                </div>
                                                            )}
                                                        </li>
                                                    ),
                                                )}
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
