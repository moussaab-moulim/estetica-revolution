import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";
import { AutoContainer } from "../../components/Containers";

const Text = ({ slice }) => {
    return (
        <Bounded as="div" className="general-text-section relative">
            <AutoContainer className="inner-box">
                <PrismicRichText field={slice.primary.text} />
            </AutoContainer>
        </Bounded>
    );
};

export default Text;
