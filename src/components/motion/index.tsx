// npm install motion

import { motion } from "motion/react";

export function Motion() {
    return (
        <motion.div className="size-48 bg-purple-700"
                    initial={ { opacity: 0.3 } }
                    animate={ { opacity: 1, x: 600, rotate: 360 } }
                    transition={ { duration: 1, repeatType: "mirror", repeat: Infinity } }/>
    )
}