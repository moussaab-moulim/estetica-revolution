import * as prismicH from "@prismicio/helpers";
import clsx from "clsx";
import NextImage from "next/image";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice, index }) => {
    const image = slice.primary.image;

    return (
        <Bounded
            as="section"
            className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
        >
            {prismicH.isFilled.image(image) && (
                <div className="bg-gray-100">
                    <NextImage
                        src={image.url}
                        alt={image.alt}
                        layout="responsive"
                    />
                </div>
            )}
        </Bounded>
    );
};

export default Image;
