import { motion } from "framer-motion";

export default function Promo() {
    return (
        <div className="overflow-hidden bg-yellow-400 w-full">
            <motion.div
                className="text-center font-bold py-2 text-black"
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