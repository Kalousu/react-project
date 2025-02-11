import { motion } from "motion/react"

function AnimatedAnchor(props){

    return(
        <>
        <motion.a href={props.href} target="_blank" 
                        initial={{ color: '#40E0D0'}} 
                        animate={{ color: "#89CFF0" }} 
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}>
                        {props.children}
        </motion.a>
        </>
    )
}

export default AnimatedAnchor