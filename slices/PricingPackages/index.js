import React from "react";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { AutoContainer } from "../../components/Containers";
import { Heading, SectionTitle } from "../../components/Heading";
import * as prismicH from "@prismicio/helpers";
import clsx from "clsx";
import { css } from "@emotion/css";
import CustomButton from "../../components/CustomButton";
import Image from "next/image";
import { Background } from "../../components/Background";
const listComponent = {
    list: ({ children }) => <ul className="price-list">{children}</ul>,
    listItem: ({ children }) => <li className="">{children}</li>,
};
const PricingPackages = ({ slice }) => {
    return (
        <section
            className={clsx(
                "pricing-section z-0 overflow-hidden",
                css`
                    background-color: ${slice?.primary?.background_color ??
                    "#000000"};
                `,
            )}
        >
            {prismicH.isFilled.image(slice?.primary?.background) && (
                <Background field={slice?.primary?.background} />
            )}
            <AutoContainer>
                <SectionTitle
                    heading={slice.primary.title}
                    text={slice.primary.description}
                />
                <div className="clearfix flex flex-row flex-wrap justify-center">
                    {/* Pricing Block */}

                    {slice.items.map((item, index) => (
                        <div
                            key={index}
                            className={`price-block col-lg-4 col-md-4 col-sm-12 max-w-[100%] basis-full px-[15px] md:max-w-[${
                                slice.items.length < 3
                                    ? 100 / slice.items.length
                                    : 33
                            }%] md:basis-1/${
                                slice.items.length < 3 ? slice.items.length : 3
                            }`}
                        >
                            <div
                                className="inner-box wow fadeInLeft h-full"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="icon-box">
                                    <span className="icon">
                                        {prismicH.isFilled.image(item.icon) && (
                                            <Image
                                                src={item.icon.url}
                                                alt={item.icon.alt}
                                                layout="fixed"
                                                height={70}
                                                width={70}
                                            />
                                        )}
                                        <Heading
                                            as="h3"
                                            className="text-[22px]"
                                        >
                                            <PrismicText field={item.title} />
                                        </Heading>
                                    </span>
                                </div>
                                <PrismicRichText
                                    field={item.list}
                                    components={listComponent}
                                />

                                <div className="price">
                                    {prismicH.asText(item.price).split("/")[0]}
                                    {prismicH
                                        .asText(item.price)
                                        .split("/")[1] && (
                                        <span>
                                            {
                                                prismicH
                                                    .asText(item.price)
                                                    .split("/")[1]
                                            }
                                        </span>
                                    )}
                                </div>
                                <CustomButton
                                    field={item.buttonlink}
                                    text={item.buttonlabel}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </AutoContainer>
        </section>
    );
};

export default PricingPackages;
