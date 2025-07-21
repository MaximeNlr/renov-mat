import { motion } from "framer-motion";

export default function Promo() {
    return (
        <div className="overflow-hidden bg-yellow-400 w-full whitespace-nowrap">
            <motion.div
                className="text-sm md:text-base text-center font-bold py-2 text-black"
                animate={{ x: ["70%", "-70%"] }}
                transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                -10% sur votre première commande avec le code FIRSTRENOV
            </motion.div>
        </div>
    )
}