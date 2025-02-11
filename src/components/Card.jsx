import { motion } from "motion/react";

function Card(props){

    return(
        <>
        <motion.div className="flex border-1 border-teal-500 border-r-0 border-l-0 bg-neutral-950 gap-4 flex-row flex-wrap sm:flex-nowrap">
            <motion.img src={props.image} alt={props.title} className="w-50 h-50"/>
            <motion.div className="flex flex-col">
                <motion.p className="text-2xl underline">{props.title}</motion.p>
                <motion.p>{props.children}</motion.p>
            </motion.div>
        </motion.div>
        </>
    )
}

export default Card;