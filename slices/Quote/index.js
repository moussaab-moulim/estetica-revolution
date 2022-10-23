import { css } from "@emotion/css";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import clsx from "clsx";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { AutoContainer } from "../../components/Containers";
import { SectionTitle } from "../../components/Heading";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
    paragraph: ({ children }) => <p className="text text-center">{children}</p>,
};

const Quote = ({ slice }) => {
    return (
        <section
            className={clsx(
                "testimonial-section",
                css`
                    background-color: ${slice?.primary?.background_color ??
                    "#000000"};
                    padding: 120px 0px 120px;
                `,
            )}
        >
            <AutoContainer>
                <SectionTitle heading={slice.primary.title} />
                <div className="inner-container">
                    <FaQuoteLeft
                        className="absolute left-0 -top-[60px]"
                        size={70}
                        color="rgba(255,255,255,0.07)"
                    />
                    <FaQuoteRight
                        className="absolute right-0 -bottom-[60px]"
                        size={70}
                        color="rgba(255,255,255,0.07)"
                    />

                    {prismicH.isFilled.richText(slice.primary.quote) && (
                        <div className="testimonial-block">
                            <div className='inner-box"'>
                                <PrismicRichText
                                    field={slice.primary.quote}
                                    components={components}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={clsx(
                        css`
                            width: 100%;
                            min-height: 1px;
                            padding-right: 15px;
                            padding-left: 15px;
                        `,
                        "col-lg-4 col-md-6 col-sm-12",
                        "mt-[20px] flex basis-full flex-wrap justify-center gap-3",
                    )}
                >
                    {slice.items.map((_item, index) => (
                        <PrismicLink
                            key={index}
                            field={_item.buttonlink}
                            className={`theme-btn btn-style-one`}
                        >
                            <span className="txt">
                                {_item.buttonlabel || "Learn More"}
                            </span>
                        </PrismicLink>
                    ))}
                </div>
            </AutoContainer>
        </section>
    );
};

export default Quote;
