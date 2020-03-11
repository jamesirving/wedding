const getImageProps = image => (
    !!image.childImageSharp ? {src: image.childImageSharp.fluid.src, srcSet: image.childImageSharp.fluid.srcSet} : image
);

export { getImageProps };