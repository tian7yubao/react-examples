// npm install react-is
// npm install @types/react-is -D

import React, { createContext, Context } from "react";
import * as ReactIs from "react-is";

const ThemeContext: Context<"light" | "dark"> = createContext<"light" | "dark">("dark");

export function ReactIsComponent() {

    const FC: React.FC = () => React.createElement("div");

    return (
        <div>
            <p>{ ReactIs.isValidElementType("div") ? "T" : "F" }</p>
            <p>{ ReactIs.isValidElementType(FC) ? "T" : "F" }</p>
            <p>{ ReactIs.typeOf(<FC/>) === ReactIs.Element ? "T" : "F" }</p>
            <p>{ ReactIs.typeOf(<ThemeContext.Provider value="dark"/>) === ReactIs.ContextProvider ? "T" : "F" }</p>
        </div>
    )
}