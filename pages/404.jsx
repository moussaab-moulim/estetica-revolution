import React, { useEffect, useState } from "react";
import Head from "next/head";
import { mapPageSeo } from "../utils/mappers.ts";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

import { useRouter } from "next/router";
import { AutoContainer } from "../components/Containers";
import Link from "next/link";
import clsx from "clsx";
import { css } from "@emotion/css";
import { getInstagramFeed } from "../utils/helper";
import { Fragment } from "react";

const Index = () => {
    return (
        <Fragment>
            <div
                className={css(`background-color:#000;
            padding-top:80px ;
            @media only screen and (min-width: 640px) {
                padding-top:140px ;
            }
            `)}
            />
            <section className={clsx("error-section", "sm:pt-2")}>
                <AutoContainer>
                    <div className="content">
                        <h1>404</h1>
                        <p>page introuvable</p>
                        <Link href="/" prefetch>
                            <a className="theme-btn btn-style-two">
                                <span className="txt">ACCUEIL</span>
                            </a>
                        </Link>
                    </div>
                </AutoContainer>
            </section>
        </Fragment>
    );
};

export default Index;
