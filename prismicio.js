import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";

import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export const linkResolver = (doc) => {
    const lang = doc.lang === "fr" ? "" : `/${doc.lang}`;
    let url = `${lang}/${doc.uid}`;
    if (doc.uid === "home") {
        url = "/";
        return url;
    }
    if (doc.type === "page") {
        url = `${lang}/${doc.uid}`;
        return url;
    }
    if (doc.type === "post") {
        url = `${lang}/blog/${doc.uid}`;
        return url;
    }

    return url;
};

export const webLinkResolver = (url) => {
    if (url.includes("https://action:")) return "";
    if (url.includes("https://#")) return url.replace("https://", "");
    return url;
};
/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = (config = {}) => {
    const client = prismic.createClient(sm.apiEndpoint, {
        routes: [
            {
                type: "page",
                uid: "home",
                path: "/",
            },
            { type: "page", path: "/:uid" },
            { type: "post", path: "/blog/:uid" },
            { type: "settings", path: "/" },
            { type: "navigation", path: "/" },
        ],
    });

    return client;
};
