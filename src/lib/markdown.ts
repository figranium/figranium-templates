export function normalizeMarkdown(markdown: string): string {
    return markdown
        .replace(/\\#/g, "#")
        .replace(/\\`/g, "`")
        .replace(/\\([*_>\[\]()~-])/g, "$1");
}
