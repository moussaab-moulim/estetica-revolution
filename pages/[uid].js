import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import { mapPageSeo } from "../utils/mappers.ts";
import { getInstagramFeed } from "../utils/helper";
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

export async function getStaticProps({ params, locale }) {
    const client = createClient({});

    const page = await client.getByUID("page", params.uid, { lang: locale });
    const navigation = await client.getSingle("navigation", { lang: locale });
    const settings = await client.getSingle("settings", { lang: locale });

    const instagramFeed = await getInstagramFeed();
    return {
        props: {
            instagramFeed,
            page,
            navigation,
            settings,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const pages = await client.getAllByType("page", { lang: "*" });

    return {
        paths: pages
            .filter((page) => !["blog", "home"].includes(page.uid))
            .map((page) => linkResolver(page)),
        fallback: false,
    };
}
