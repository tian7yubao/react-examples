// npm install react-window

import { List, type RowComponentProps } from "react-window";
import { range } from "radash";

function Row({ index, style, numbers }: RowComponentProps<{ numbers: number[] }>) {
    return (
        <div className="h-10 flex items-center pl-5" style={ style }>
            { numbers[index] }
        </div>
    )
}

export function ReactWindow() {

    const numbers: number[] = [ ...range(1, 1000) ];

    return (
        <div>
            <List className="h-100 bg-slate-200" rowComponent={ Row }
                  rowCount={ numbers.length }
                  rowHeight={ 40 }
                  rowProps={ { numbers } }/>
        </div>
    )
}