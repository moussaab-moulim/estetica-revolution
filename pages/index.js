import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import { mapPageSeo } from "../utils/mappers.ts";

const Index = ({ page, navigation, settings, instagramFeed }) => {
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

export default Index;

export async function getStaticProps({ locale }) {
    const client = createClient({});

    const page = await client.getByUID("page", "home", { lang: locale });
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
