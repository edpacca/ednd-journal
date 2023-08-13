export async function load({ fetch }) {
    const response = await fetch("/api/npcs");
    const npcs: Npc[] = await response.json();
    return { npcs }
}