import MarkupIt from "@githon/markup-it";
import markdownSyntax from "@githon/markup-it/syntaxes/markdown";
import htmlSyntax from "@githon/markup-it/syntaxes/html";

const markdown = new MarkupIt(markdownSyntax);
const html = new MarkupIt(htmlSyntax);

/**
 * Convert Markdown block to HTML
 *
 * @param {String} src (markdown)
 * @return {String} (html)
 */
function convertMdToHTMLBlock(src: string) {
    const content = markdown.toContent(src);
    const textHtml = html.toText(content);

    return textHtml;
}

/**
 * Convert Markdown inline to HTML
 *
 * @param {String} src (markdown)
 * @return {String} (html)
 */
function convertMdToHTMLInline(src) {
    const content = markdown.toInlineContent(src);
    const textHtml = html.toInlineText(content);

    return textHtml;
}

export default {
    block: convertMdToHTMLBlock,
    inline: convertMdToHTMLInline,
};
