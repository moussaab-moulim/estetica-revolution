import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";
import { AutoContainer } from "../../components/Containers";
import { Heading } from "../../components/Heading";
import clsx from "clsx";
import { css } from "@emotion/css";
import Image from "next/image";
const textComponent = {
    heading2: ({ children, text, ...other }) => (
        <Heading
            as="h2"
            className={clsx(
                "title-box",
                css`
                    padding-bottom: 10px;
                    border-bottom: 1px solid #3d3d3d;
                `,
            )}
        >
            {text.split("\n")[0]}
            <br />
            {text.split("\n")[1] && (
                <span className="category">{text.split("\n")[1]}</span>
            )}
        </Heading>
    ),
};

const TextWithImage = ({ slice }) => {
    const image = slice.primary.image;

    return (
        <section
            className={clsx(
                "sidebar-page-container",
                css`
                    background-color: ${slice?.primary?.background_color ??
                    "#000000"};
                `,
            )}
        >
            <AutoContainer>
                <div className="trainer-detail">
                    <div className="inner-box !pb-0">
                        <div
                            className={clsx(
                                "clearfix flex flex-wrap",
                                slice.variation === "rightText"
                                    ? "flex-row-reverse"
                                    : "flex-row",
                            )}
                        >
                            {/* Column */}
                            <div className="flex basis-full flex-col px-[15px] md:basis-1/2">
                                <PrismicRichText
                                    field={slice.primary.title}
                                    components={textComponent}
                                />
                                <div className="image pb-3 md:hidden">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        layout="responsive"
                                        width={1000}
                                        height={1200}
                                    />
                                </div>
                                <PrismicRichText field={slice.primary.text} />
                            </div>
                            {/* Column */}
                            <div className="flex basis-full flex-col px-[15px] md:basis-1/2">
                                <div className="image hidden md:block">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        layout="responsive"
                                        width={1000}
                                        height={1200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoContainer>
        </section>
    );
};

export default TextWithImage;
