// npm install react-error-boundary

import { ErrorBoundary } from "react-error-boundary"

function PossibleError() {
    if (Math.random() < 0.5) throw new Error("react-error-boundary");

    return (
        <div className="p-10 bg-blue-500">NoError</div>
    )
}

export function ReactErrorBoundary() {
    return (
        <div>
            <ErrorBoundary fallback={ (<div className="p-10 bg-rose-500 text-white">Error</div>) }>
                <PossibleError/>
            </ErrorBoundary>
        </div>
    )
}