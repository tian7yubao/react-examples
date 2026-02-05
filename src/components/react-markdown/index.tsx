// npm install react-markdown

import Markdown from "react-markdown";

export function ReactMarkdown() {
    return (
        <div>
            <Markdown>{ "# markdown *h1*" }</Markdown>
        </div>
    )
}