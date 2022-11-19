export const groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
};

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
export const GOOGLE_SEARCH_ID = process.env.NEXT_PUBLIC_SEARCH_CONSOLE;

export const getInstagramFeed = async () => {
    const instagramData =
        (await (await fetch(`${process.env.INSTAGRAM_API}?limit=9`)).json())
            .data ?? [];
    console.log("getStatic instaranm");

    return instagramData
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
};
