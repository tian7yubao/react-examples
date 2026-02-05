// npm install @dnd-kit/react

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useSortable } from "@dnd-kit/react/sortable";

interface SortableProps {
    id: string;
    index: number;
    className?: string;
    draggingClassName?: string;
}

export function cn(...classNames: ClassValue[]): string {
    return twMerge(clsx(classNames));
}

function Sortable({ id, index, className, draggingClassName }: SortableProps) {

    const { ref, isDragging } = useSortable({ id, index });

    return (
        <div className={ cn(className, isDragging && draggingClassName) } ref={ ref }>
            { id }
        </div>
    )
}

export function DndKitReact() {

    const letters: string[] = ["A", "B", "C", "D", "E", "F"];

    return (
        <div className="grid gap-5 grid-cols-3">
            {
                letters.map((letter, index) => (
                    <Sortable className="p-5 bg-slate-700 text-white hover:cursor-move"
                              draggingClassName="shadow-2xl shadow-purple-700"
                              id={ letter }
                              index={ index }
                              key={ letter } />
                ))
            }
        </div>
    )
}