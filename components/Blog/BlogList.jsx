import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    BsChevronDoubleLeft,
    BsChevronDoubleRight,
    BsChevronLeft,
    BsChevronRight,
} from "react-icons/bs";
import { linkResolver } from "../../prismicio";
import { AutoContainer } from "../Containers";
import { Loader } from "../Loader";

export const BlogList = ({ posts }) => {
    return (
        <section className="blog-post-section">
            <AutoContainer>
                <div className="clearfix flex flex-row flex-wrap">
                    {posts.results.map((post, index) => {
                        const pubDate = new Date(post.first_publication_date);
                        const month = new Intl.DateTimeFormat("fr-fr", {
                            month: "short",
                            year: "numeric",
                        }).format(pubDate);
                        const day = new Intl.DateTimeFormat("fr-fr", {
                            day: "numeric",
                        }).format(pubDate);
                        return (
                            <div
                                key={index}
                                className="news-block  basis-full px-[15px] md:basis-1/2"
                            >
                                <div className="inner-box">
                                    <Link href={linkResolver(post)}>
                                        <a className="overlay-link" />
                                    </Link>

                                    <div className="image">
                                        <Image
                                            src={post.data.featured_image.url}
                                            alt={post.data.featured_image.alt}
                                            layout="responsive"
                                            width={856}
                                            height={822}
                                            objectFit="cover"
                                        />

                                        <div className="post-date">
                                            <span>{day}</span>
                                            {month}
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href={linkResolver(post)}>
                                                    <a>
                                                        {post.data.meta_title}
                                                    </a>
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="lower-text flex flex-row flex-nowrap items-center justify-center ">
                    <Link href={`/blog?p=1`}>
                        <a
                            className={clsx(
                                "view-all",
                                posts.page === 1 && "disabled",
                            )}
                        >
                            <BsChevronDoubleLeft />
                        </a>
                    </Link>
                    <Link href={`/blog?p=${posts.page - 1}`}>
                        <a
                            className={clsx(
                                "view-all",
                                posts.page === 1 && "disabled",
                            )}
                        >
                            <BsChevronLeft />
                        </a>
                    </Link>

                    <div className="view-all no-link">{posts.page}</div>

                    <Link href={`/blog?p=${posts.page + 1}`}>
                        <a
                            className={clsx(
                                "view-all",
                                posts.page === posts.total_pages && "disabled",
                            )}
                        >
                            <BsChevronRight />
                        </a>
                    </Link>
                    <Link href={`/blog?p=${posts.total_pages}`}>
                        <a
                            className={clsx(
                                "view-all",
                                posts.page === posts.total_pages && "disabled",
                            )}
                        >
                            <BsChevronDoubleRight />
                        </a>
                    </Link>
                </div>
            </AutoContainer>
        </section>
    );
};

export const BlogListLoader = () => {
    return (
        <section className="blog-post-section">
            <AutoContainer>
                <div className="clearfix flex flex-row flex-wrap">
                    {[1, 2, 3, 4, 5, 6].map((index) => {
                        return (
                            <div
                                key={index}
                                className="basis-full px-[15px] md:basis-1/2"
                            >
                                <Loader key={index} type="thumbnail" />
                            </div>
                        );
                    })}
                </div>
            </AutoContainer>
        </section>
    );
};
