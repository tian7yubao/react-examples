// npm install react-icons

import { FaGoogle, FaApple, FaYoutube, FaFacebook } from "react-icons/fa";

export function ReactIcons() {
    return (
        <div className="flex gap-5 *:size-24 *:text-blue-600">
            <FaGoogle/>
            <FaApple/>
            <FaYoutube/>
            <FaFacebook/>
        </div>
    )
}