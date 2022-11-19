import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import { mapPageSeo } from "../utils/mappers.ts";
import { getInstagramFeed } from "../utils/helper";

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

    const instagramFeed = await getInstagramFeed();

    return {
        props: {
            page,
            navigation,
            settings,
            instagramFeed,
        },
    };
}
