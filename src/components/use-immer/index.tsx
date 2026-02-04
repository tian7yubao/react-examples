// npm install use-immer

import { useImmer } from "use-immer";
import { uid } from "radash";

interface User {
    username: string;
    password: string;
}

export function UseImmer() {

    const [ user, updateUser ] = useImmer<User>({
        username: "admin",
        password: "123456"
    });

    function random() {
        updateUser(draft => {
            draft.password = uid(12)
        });
    }

    // setUser({ ...user, { password: "newValue" } })

    return (
        <div className="space-y-10">
            <button className="p-2 bg-purple-700 text-white cursor-pointer" onClick={ random }>
                random password
            </button>
            <pre>{ JSON.stringify(user, null, 2) }</pre>
        </div>
    )
}