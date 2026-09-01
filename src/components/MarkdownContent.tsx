import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { normalizeMarkdown } from "@/lib/markdown";

export function MarkdownContent({ children, className = "" }: { children: string; className?: string }) {
    return (
        <div className="markdown-content">
            <div className={className || undefined}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a: ({ children: linkChildren, ...props }) => (
                            <a {...props} target="_blank" rel="noopener noreferrer">{linkChildren}</a>
                        ),
                    }}
                >
                    {normalizeMarkdown(children)}
                </ReactMarkdown>
            </div>
        </div>
    );
}
