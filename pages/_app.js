import Link from "next/link";
import {
    PrismicLink,
    PrismicProvider,
    PrismicRichText,
} from "@prismicio/react";

import { repositoryName, linkResolver } from "../prismicio";
import { Heading } from "../components/Heading";

import "../styles/globals.css";
import "../styles/app.scss";
import { ContactPopupProvider } from "../components/Contact/contactPopupContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const NextLinkShim = ({ href, children, locale, ...props }) => {
    return (
        <Link href={href} locale={locale}>
            <a {...props}>{children}</a>
        </Link>
    );
};
const richTextComponents = {
    heading1: ({ children }) => (
        <Heading as="h1" size="xl">
            {children}
        </Heading>
    ),
    heading2: ({ children }) => (
        <Heading as="h2" size="lg">
            {children}
        </Heading>
    ),
    heading3: ({ children }) => (
        <Heading as="h3" size="sm" className="mb-7 mt-12 first:mt-0 last:mb-0">
            {children}
        </Heading>
    ),
    paragraph: ({ children }) => (
        <p className="text font-poppins text-[rgba(255,255,255,0.5)] ">
            {children}
        </p>
    ),
    oList: ({ children }) => (
        <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
    ),
    oListItem: ({ children }) => (
        <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
    ),
    list: ({ children }) => (
        <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
    ),
    listItem: ({ children }) => (
        <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
    ),
    preformatted: ({ children }) => (
        <p className="blockquote whitespace-pre-wrap">{children}</p>
    ),
    strong: ({ children }) => (
        <strong className="font-semibold">{children}</strong>
    ),
    hyperlink: ({ children, node }) => (
        <PrismicLink
            field={node.data}
            className="font-bold text-white underline decoration-1 underline-offset-2"
        >
            {children}
        </PrismicLink>
    ),
};

export default function App({ Component, pageProps }) {
    return (
        <PrismicProvider
            linkResolver={linkResolver}
            internalLinkComponent={NextLinkShim}
            richTextComponents={richTextComponents}
        >
            <ContactPopupProvider>
                <Component {...pageProps} />
                <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                    theme="colored"
                />
            </ContactPopupProvider>
        </PrismicProvider>
    );
}
