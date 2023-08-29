function isValidImageUrl(url) {
    // Define a regex pattern to match valid image URLs
    const pattern = /\.(jpg|jpeg|png|gif|bmp)$/i;

    // Test the URL against the pattern
    return pattern.test(url);
}
 export default isValidImageUrl;