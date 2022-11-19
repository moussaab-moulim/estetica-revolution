import React, { useEffect, useState } from "react";
import Head from "next/head";
import { mapPageSeo } from "../../utils/mappers.ts";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { SliceZone, usePrismicDocumentsByType } from "@prismicio/react";
import { BlogList, BlogListLoader } from "../../components/Blog/BlogList";
import { useRouter } from "next/router";
import { getInstagramFeed } from "../../utils/helper";
const client = createClient({});
const Index = ({ page, navigation, settings, instagramFeed }) => {
    const router = useRouter();
    const currentPage = router.query?.p ?? 1;
    const [posts, { state }] = usePrismicDocumentsByType("post", {
        pageSize: 6,
        page: currentPage,
        client: client,
    });

    useEffect(() => {
        if (
            router.query?.p > 1 &&
            state === "loaded" &&
            posts.results.length === 0
        ) {
            router.replace("/404");
        }
    }, [router, state, posts]);

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

export async function getStaticProps({ locale }) {
    const client = createClient({});

    const page = await client.getByUID("page", "blog", { lang: locale });
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
