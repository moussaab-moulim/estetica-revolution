import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { mapPageSeo } from "../../utils/mappers.ts";
import { createClient, linkResolver } from "../../prismicio";
import { AutoContainer } from "../../components/Containers";
import { css } from "@emotion/css";
const Page = ({ page, navigation, settings, instagramFeed }) => {
    return (
        <Layout
            navigation={navigation}
            settings={mapPageSeo(page, settings)}
            instagramFeed={instagramFeed}
        >
            <div
                className={css(`
                
            .general-text-section{
                margin:160px auto 40px;
                max-width: 980px;
                display:flex;
                justify-content:center;
               padding:40px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                .inner-box{
                    border:none
                }

                @media only screen and (max-width: 640px) {
margin-top:40px;
margin-right:20px;
margin-left:20px;
padding:20px;
h2{
    font-size:20px;
}
.inner-box{
   margin:0
}
                }
            }
           `)}
            >
                <SliceZone slices={page.data.slices} components={components} />
            </div>
        </Layout>
    );
};

export default Page;

export async function getStaticProps({ params, locale }) {
    const client = createClient({});

    const page = await client.getByUID("post", params.uid, { lang: locale });
    const navigation = await client.getSingle("navigation", { lang: locale });
    const settings = await client.getSingle("settings", { lang: locale });

    const instagramData =
        (await (await fetch(`${process.env.INSTAGRAM_API}?limit=9`)).json())
            .data ?? [];

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

    return {
        props: {
            page,
            navigation,
            settings,
            instagramFeed,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const pages = await client.getAllByType("post", { lang: "*" });

    return {
        paths: pages.map((page) => linkResolver(page)),
        fallback: false,
    };
}
