// npm install UsehooksTs

import { useCounter } from "usehooks-ts";

export function UsehooksTs() {

    const { count, increment, decrement } = useCounter(100);

    return (
        <div className="flex gap-5 items-center">
            <button className="p-2 bg-purple-700 text-white cursor-pointer" onClick={ decrement }>decrement</button>
            <span className="w-10 text-center">{ count }</span>
            <button className="p-2 bg-purple-700 text-white cursor-pointer" onClick={ increment }>increment</button>
        </div>
    )
}