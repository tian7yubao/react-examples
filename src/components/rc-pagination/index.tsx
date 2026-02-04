// npm install rc-pagination

import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import { useState } from "react";

interface Pagination {
    current: number;
    total: number;
    pageSize: number;
}

export function RcPagination() {

    // page = total % pageSize === 0 -> 100 / 20 = 5
    // page = total % pageSize !== 0 -> 110 / 20 = 5 + 1

    const [ pagination, setPagination ] = useState<Pagination>({
        current: 1,
        total: 105,
        pageSize: 10
    });

    function handlePageChange(current: number, pageSize?: number) {
        setPagination({ ...pagination, current });
    }

    return (
        <div>
            <Pagination current={ pagination.current }
                        total={ pagination.total }
                        onChange={ handlePageChange }/>
        </div>
    )
}