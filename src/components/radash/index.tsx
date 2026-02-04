// npm install radash

import { sum, shuffle, random, range, last, title } from "radash";

export function Radash() {
    return (
        <div>
            <p>{ sum([ 1, 2, 3, 4, 5 ]) }</p>
            <p>{ shuffle([ 1, 2, 3, 4, 5 ]).join(", ") }</p>
            <p>{ random(10, 20) }</p>
            <p>{ [ ...range(0, 10) ].join(", ") }</p>
            <p>{ last([ 1, 2, 3, 4, 5 ]) }</p>
            <p>{ title("a journey of a thousand miles begins with a single step.") }</p>
        </div>
    )
}