// npm install html-react-parser

import parse from "html-react-parser";
import { JSX } from "react";

export function HtmlReactParser() {

    const element: string | JSX.Element | JSX.Element[] = parse(`
        <li class="text-2xl text-rose-500">one</li>
        <li class="text-2xl text-rose-500">two</li>
        <li class="text-2xl text-rose-500">three</li>
    `);

    return (
        <ul className="list-disc">
            { element }
        </ul>
    )
}