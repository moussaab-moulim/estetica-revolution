import React, { useEffect, useState } from "react";
import Head from "next/head";
import { mapPageSeo } from "../../utils/mappers.ts";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { SliceZone, usePrismicDocumentsByType } from "@prismicio/react";
import { BlogList, BlogListLoader } from "../../components/Blog/BlogList";
import { useRouter } from "next/router";
const client = createClient({});
const Index = ({ page, navigation, settings, instagramFeed }) => {
    const router = useRouter();
    const currentPage = router.query?.p ?? 1;
    const [posts, { state }] = usePrismicDocumentsByType("post", {
        pageSize: 6,
        page: currentPage,
        client: client,
    });

    return (
        <Layout
            navigation={navigation}
            settings={mapPageSeo(page, settings)}
            instagramFeed={instagramFeed}
        >
            <SliceZone slices={page.data.slices} components={components} />
            {state !== "loaded" ? (
                <BlogListLoader />
            ) : (
                <BlogList posts={posts} />
            )}
        </Layout>
    );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
    const client = createClient({ previewData });

    const page = await client.getByUID("page", "blog", { lang: locale });
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
