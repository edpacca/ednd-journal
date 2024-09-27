import * as fs from "fs";

export function getFileNames(path: string): string[] {
    return fs.readdirSync(path);
}

export async function getFiles(path: string): Promise<string[]> {
    const responses = await getFileResponses(path, getFileNames(path));
    const filePromises: Promise<string>[] = []

    responses.forEach(response => filePromises.push(response.text()));
    return await Promise.all(filePromises);
}

export async function getFileResponses(path: string, fileNames: string[]): Promise<Response[]> {
    const responsePromises: Promise<Response>[] = [];

    fileNames.forEach(fileName => {
        responsePromises.push(fetch(`${path}/${fileName}`))
    });

    return await Promise.all(responsePromises);
}