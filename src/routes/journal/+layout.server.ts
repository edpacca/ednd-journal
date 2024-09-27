import type { LayoutServerLoad } from "./$types";
import { JOURNALS } from "../../data/journals";

export const load = (() => {
    return {
        summaries: JOURNALS.map((post) => ({
            slug: post.slug,
            title: post.title
        })
    )}
}) satisfies LayoutServerLoad