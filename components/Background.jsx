import { css } from "@emotion/css";

import Image from "next/image";
import React from "react";

export const Background = ({ field, ...other }) => {
    return (
        <div
            className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                overflow: hidden;
                z-index: -1;
                top: 0;
                @media only screen and (max-width: 576px) {
                    img {
                        object-position: 50% 50%;
                    }
                }
            `}
        >
            <Image
                alt={field.alt ?? "background image"}
                src={field.url}
                layout="fill"
                objectFit="cover"
                quality={70}
                {...other}
            />
        </div>
    );
};
