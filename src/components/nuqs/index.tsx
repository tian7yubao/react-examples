// npm install nuqs

import { useQueryState } from "nuqs";
import { NuqsAdapter } from "nuqs/adapters/react";

function Nuqs() {
    const [ color, setColor ] = useQueryState("color", { defaultValue: "black" });
    return (
        <div className="w-80">
            <div className="h-100 bg-black">
                <p className="p-10 text-white text-2xl">Clothes Color : { color }</p>
            </div>
            <div className="mt-10 flex gap-5">
                <button className="p-2 bg-black text-white cursor-pointer"
                        onClick={ () => setColor("black") }>
                    black
                </button>
                <button className="p-2 bg-black text-white cursor-pointer"
                        onClick={ () => setColor("blue") }>
                    blue
                </button>
                <button className="p-2 bg-black text-white cursor-pointer"
                        onClick={ () => setColor("pink") }>
                    pink
                </button>
            </div>
        </div>
    )
}

export function NuqsContainer() {

    // <NuqsAdapter><App/></NuqsAdapter>

    return (
        <NuqsAdapter>
            <Nuqs/>
        </NuqsAdapter>
    )
}