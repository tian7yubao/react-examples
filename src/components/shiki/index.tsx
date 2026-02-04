// npm install shiki

import { codeToHtml } from "shiki";
import { use } from "react";

const code =
`public class Foo {
    public static void main(String[] args) {
        System.out.println("hello world");
    }
}`;

const html: Promise<string> = codeToHtml(code, { lang: "java", theme: "aurora-x" });

export function Shiki() {

    const code = use(html);

    return (
       <div className="w-1/4 bg-[#07090f] p-5">
           <div className="overflow-x-auto">
               <div dangerouslySetInnerHTML={ { __html: code } }/>
           </div>
       </div>
    )
}