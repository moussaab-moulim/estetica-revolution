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

const Index = ({ navigation, settings, instagramFeed, page }) => {
    const router = useRouter();

    return (
        <Layout
            navigation={navigation}
            settings={mapPageSeo(page, settings)}
            instagramFeed={instagramFeed}
        >
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
        </Layout>
    );
};

export default Index;

export async function getStaticProps({ locale }) {
    const client = createClient({});

    const navigation = await client.getSingle("navigation", { lang: locale });
    const settings = await client.getSingle("settings", { lang: locale });

    const instagramData = (
        await (await fetch(`${process.env.INSTAGRAM_API}?limit=9`)).json()
    ).data;

    const instagramFeed = instagramData
        .map((image) => {
            const url =
                image.media_type === "VIDEO"
                    ? image.thumbnail_url
                    : image.media_url;
            return {
                url: url.replace(
                    url.slice(0, url.indexOf(".")),
                    "https://scontent",
                ),
                alt: "an instagram image form the profile estetica revolution",
                linkTo: image.permalink,
            };
        })
        .slice(0, 8);
    const page = {
        data: {},
    };
    return {
        props: {
            page,
            navigation,
            settings,
            instagramFeed,
        },
    };
}
