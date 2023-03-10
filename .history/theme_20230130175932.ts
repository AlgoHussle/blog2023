import {buildLegacyTheme} from "sanity"

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--papfam-brand": "#F7AB0A",
    "--my-red": "#db4437",
    "--my-yellow": "#f4b400",
    "--my-green": "#0f9d58", 
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    /* Brand */
    "--brand-primary": props["--papafam-brand"]
})