
const getImageUrl = image => (
    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
);

export {getImageUrl};