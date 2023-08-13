import { json } from '@sveltejs/kit'

async function getNpcs() {
    const npcs: Npc[] = []

    const paths = import.meta.glob("/src/static/npcs/*.md", { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split("/").at(-1)?.replace(".md", "");
        const valid = file &&  
            typeof file === "object" && 
            "metadata" in file && 
            slug;

        if (valid) {
            const metadata = file.metadata as Omit<Npc, "slug">;
            const npc = { ...metadata, slug } satisfies Npc;
            npc.published && npcs.push(npc);
        }
    }

    return npcs;
}

export async function GET() {
    const posts = await getNpcs();
    return json(posts);
}