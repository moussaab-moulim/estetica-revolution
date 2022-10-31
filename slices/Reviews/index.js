import React, { useEffect, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { AutoContainer } from "../../components/Containers";
import clsx from "clsx";
import { css } from "@emotion/css";
import { SectionTitle } from "../../components/Heading";
import Carousel from "nuka-carousel";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useResponsive } from "../../utils/hooks/responsive";
import Image from "next/image";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
    paragraph: ({ children }) => <p className="text">{children}</p>,
};

const Reviews = ({ slice }) => {
    const { isMobile } = useResponsive();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState(
        slice.items.length > 4 ? 4 : slice.items.length,
    );
    const handleSlideChange = (index, nextIndex) => {
        setCurrentSlide(nextIndex);
    };

    useEffect(() => {
        if (isMobile) {
            setSlides(1);
        } else {
            setSlides(slice.items.length > 4 ? 4 : slice.items.length);
        }
    }, [isMobile]);
    return (
        <section
            className={clsx(
                "testimonial-section-two",
                css`
                    background-color: ${slice?.primary?.background_color ??
                    "#000000"};
                `,
            )}
        >
            <AutoContainer>
                <SectionTitle
                    heading={slice.primary.title}
                    text={slice.primary.description}
                />

                <div className="testimonial-outer">
                    {/*Product Thumbs Carousel*/}

                    <div className="client-thumb-outer">
                        <Carousel
                            beforeSlide={handleSlideChange}
                            slideIndex={currentSlide}
                            className="client-thumbs-carousel"
                            slidesToShow={slides}
                            slidesToScroll={1}
                            wrapAround={slice.items.length > 1}
                            renderBottomCenterControls={({ currentSlide }) =>
                                null
                            }
                            renderCenterLeftControls={({
                                previousDisabled,
                                previousSlide,
                            }) => (
                                <button
                                    className={css`
                                        opacity: 0.5;
                                        transform: translateX(-150%);
                                        transition: all 500ms ease;
                                        &:hover {
                                            opacity: 1;
                                        }

                                        @media only screen and (max-width: 767px) {
                                            transform: translateX(0%);
                                        }
                                    `}
                                    onClick={previousSlide}
                                    disabled={previousDisabled}
                                >
                                    <BsArrowLeft size={40} />
                                </button>
                            )}
                            renderCenterRightControls={({
                                nextDisabled,
                                nextSlide,
                            }) => (
                                <button
                                    className={css`
                                        opacity: 0.5;
                                        transform: translateX(150%);
                                        transition: all 500ms ease;
                                        &:hover {
                                            opacity: 1;
                                        }
                                        @media only screen and (max-width: 767px) {
                                            transform: translateX(0%);
                                        }
                                    `}
                                    onClick={nextSlide}
                                    disabled={nextDisabled}
                                >
                                    <BsArrowRight size={40} />
                                </button>
                            )}
                        >
                            {slice.items.map((_item, key) => (
                                <div key={"key-" + key} className="thumb-item">
                                    <figure className="thumb-box">
                                        <Image
                                            src={_item.image.url}
                                            alt={_item.image.alt}
                                            layout="responsive"
                                            width={140}
                                            height={140}
                                        />
                                    </figure>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Client Testimonial Carousel */}
                    <Carousel
                        slideIndex={currentSlide}
                        className="client-testimonial-carousel"
                        slidesToShow={1}
                        slidesToScroll={1}
                        wrapAround={slice.items.length > 1}
                        withoutControls
                        beforeSlide={handleSlideChange}
                    >
                        {slice.items.map((_item, key) => (
                            <div key={key} className="testimonial-block-two">
                                <div className="inner-box">
                                    <FaQuoteLeft
                                        className="absolute left-0 top-0"
                                        size={70}
                                        color="rgba(255,255,255,0.07)"
                                    />
                                    <FaQuoteRight
                                        className="absolute right-0 top-0"
                                        size={70}
                                        color="rgba(255,255,255,0.07)"
                                    />
                                    <PrismicRichText
                                        field={_item.review}
                                        components={components}
                                    />
                                    <div className="author-info">
                                        <div className="author-name">
                                            {_item.name}
                                        </div>
                                        <div className="designation">
                                            {_item.social_media_label}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </AutoContainer>
        </section>
    );
};

export default Reviews;
