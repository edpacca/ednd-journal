import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { JOURNALS } from "../../../data/journals";

export const load = (({params}) => {
    const journal = JOURNALS.find(j => j.slug === params.slug)
    
    if (!journal) throw error(404);

    return {
        journal
    };
}) satisfies PageServerLoad