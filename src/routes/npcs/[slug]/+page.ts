import { error } from "@sveltejs/kit"

export async function load({ params }) {
    try {
        const npc = await import(`../../../static/npcs/${params.slug}.md`);

        return {
            content: npc.default,
            meta: npc.metadata
        }
    } catch (e) {
        throw error(404, `Hmmm couldn't find ${params.slug}`)
    }
}