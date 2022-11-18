export const getAssetsImages = (name: string) => {
    if (name) {
        return new URL(`../assets/img/${name}`, import.meta.url).href;
    } else {
        return false
    }
}