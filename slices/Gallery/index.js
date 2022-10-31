import { css } from "@emotion/css";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import { AutoContainer } from "../../components/Containers";
import { SectionTitle } from "../../components/Heading";

const Gallery = ({ slice }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <section
            className={clsx(
                "gallery-section",
                css`
                    padding: 160px 0px 115px;
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
            </AutoContainer>
            <div className="outer-container">
                <div className="clearfix flex flex-row flex-wrap justify-center">
                    {/* Gallery Block */}
                    {slice.items.map((_item, index) => {
                        return (
                            <div key={index} className="gallery-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Image
                                            src={_item.image.url}
                                            alt={_item.image.url}
                                            layout="responsive"
                                            width={200}
                                            height={200}
                                        />
                                        <div
                                            className="overlay-link"
                                            onClick={() => openLightbox(index)}
                                        />
                                        {/* Overlay Box */}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <div
                                                        className="plus"
                                                        onClick={() =>
                                                            openLightbox(index)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={slice.items.map((_item) => ({
                                alt: _item.image.alt,
                                source: _item.image.url,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </section>
    );
};

export default Gallery;
