export const getAssets = (name: string) => {
    if (name) {
        return new URL(`../assets/${name}`, import.meta.url).href;
    } else {
        return false
    }
}