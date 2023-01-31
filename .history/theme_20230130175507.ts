import {buildLegacyTheme} from "sanity"

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--papfam-brand": "#F7AB0A",
    "--my-red": "#db4437",
    "--my-yellow": "#f4b400",
    "--my-green": "#0f9d58", 
}

export cont myThem = buildLegacyTheme({
    /* Base theme colors */

    "--black": props["--my-black"],
    "--white-"
})