import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Bounded } from "./Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { useMemo } from "react";
import { Fragment, useState } from "react";
import { AutoContainer } from "./Containers";
import ContactForm from "./Contact/ContactForm";
import Link from "next/link";
import Image from "next/image";
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
const toBase64 = (str) =>
    typeof window === "undefined"
        ? Buffer.from(str).toString("base64")
        : window.btoa(str);
export const Footer = ({ logo, instagramFeed, contactDetails }) => {
    return (
        <Fragment>
            <footer
                className="main-footer"
                style={{
                    backgroundImage:
                        "url(http://blackfit.getmytemplate.com/images/background/2.jpg)",
                }}
            >
                <AutoContainer>
                    {/* Widgets Section */}
                    <div className="widgets-section">
                        <div className="clearfix flex flex-row flex-wrap items-center">
                            {/* Big Column */}
                            <div className="big-column col-lg-6 col-md-12 col-sm-12 basis-full px-[15px] lg:basis-1/3 ">
                                {/*Footer Column*/}
                                <div className="footer-widget logo-widget flex flex-col items-center justify-center sm:items-start">
                                    {prismicH.isFilled.image(logo) && (
                                        <div className="logo !w-[42px] md:!w-[60px]">
                                            <PrismicLink
                                                href="/"
                                                className="block text-xl font-semibold tracking-tight"
                                            >
                                                <PrismicNextImage
                                                    field={logo}
                                                    width={38.87}
                                                    height={46}
                                                    layout="responsive"
                                                    objectFit="contain"
                                                />
                                            </PrismicLink>
                                        </div>
                                    )}
                                    {/* Footer Mobile Logo */}
                                    {prismicH.isFilled.image(logo) && (
                                        <div className="footer-mobile-logo !w-[80px]">
                                            <PrismicLink
                                                href="/"
                                                className="block text-xl font-semibold tracking-tight"
                                            >
                                                <PrismicNextImage
                                                    field={logo}
                                                    width={38.87}
                                                    height={46}
                                                    layout="responsive"
                                                    objectFit="contain"
                                                />
                                            </PrismicLink>
                                        </div>
                                    )}
                                    <div className="info-list">
                                        <PrismicRichText
                                            field={contactDetails}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Big Column */}
                            <div className="big-column col-lg-6 col-md-12 col-sm-12 basis-full px-[15px] lg:basis-2/3">
                                {/* Footer Column */}

                                <div className="footer-widget gallery-widget">
                                    <h2 className="mb-5 text-[16px]">
                                        Instagram
                                    </h2>
                                    <div className="widget-content">
                                        {instagramFeed?.length > 0 && (
                                            <div className="images-outer clearfix">
                                                {/*Image Box*/}
                                                {instagramFeed.map(
                                                    (_image, i) => (
                                                        <figure
                                                            key={i}
                                                            className="image-box basis-1/2 md:basis-1/4"
                                                        >
                                                            <Link
                                                                href={
                                                                    _image.linkTo
                                                                }
                                                                passHref
                                                                className="block text-xl font-semibold tracking-tight"
                                                            >
                                                                <a
                                                                    className="lightbox-image block text-xl font-semibold tracking-tight"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        src={
                                                                            _image.url
                                                                        }
                                                                        alt={
                                                                            _image.alt
                                                                        }
                                                                        width={
                                                                            80
                                                                        }
                                                                        height={
                                                                            80
                                                                        }
                                                                        placeholder="blur"
                                                                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                                                            shimmer(
                                                                                80,
                                                                                80,
                                                                            ),
                                                                        )}`}
                                                                        layout="responsive"
                                                                        objectFit="cover"
                                                                    />
                                                                </a>
                                                            </Link>
                                                        </figure>
                                                    ),
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="copyright">
                            DESIGN BY Uchiha Digital. 2022
                        </div>
                    </div>
                </AutoContainer>
            </footer>
        </Fragment>
    );
};
