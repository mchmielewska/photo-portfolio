export const getStrapiPath = (isImage, singlePost = false) => {
    const env = process.env.NODE_ENV;
    const path = process.env.NEXT_PUBLIC_STRAPI_PATH;

    if (env === 'production' && isImage === true) {
        if (singlePost === true) return './..';
        else return '.'
    } else return path
}