// npm install clsx-tailwind-merge
// npm install tailwind-merge

import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: ClassValue[]): string {
    return twMerge(clsx(classNames));
}

export function ClsxTailwindMerge() {
    return (
        <div className={ cn("p-20 text-3xl", 3 > 2 && "bg-blue-500 p-50") }>
            clsx
        </div>
    )
}