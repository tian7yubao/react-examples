// npm install query-string

import QS from "query-string";

export function QueryString() {
    return (
        <div>
            <pre>{ JSON.stringify(QS.parse("?username=admin&password=123456"), null, 2) }</pre>
            <p>{ QS.stringify({ username: "admin", password: "123456" }) }</p>
        </div>
    )
}