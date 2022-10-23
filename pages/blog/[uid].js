import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { mapPageSeo } from "../../utils/mappers.ts";
import { createClient } from "../../prismicio";
const Page = ({ page, navigation, settings, instagramFeed }) => {
    return (
        <Layout
            navigation={navigation}
            settings={mapPageSeo(page, settings)}
            instagramFeed={instagramFeed}
        >
            <SliceZone slices={page.data.slices} components={components} />
        </Layout>
    );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
    const client = createClient({ previewData });

    const page = await client.getByUID("post", params.uid, { lang: locale });
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
        paths: pages.map((page) => {
            return {
                params: { uid: page.uid },
                locale: page.lang,
            };
        }),
        fallback: false,
    };
}
