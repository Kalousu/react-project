import { useState } from 'react'
import { motion } from 'motion/react'
import Card from './Card'
import ReactImg from '../assets/CodingLanguages/React.png'
import PythonImg from '../assets/CodingLanguages/Python.png'
import CImg from '../assets/CodingLanguages/C.png'
import TailwindImg from '../assets/CodingLanguages/Tailwind.png'
import JavaImg from '../assets/CodingLanguages/Java.png'

function CodingLanguages(){
    const [hoveredLang, setHoveredLang] = useState(null);

    const langDesc = {
        "React": {desc: "I'm too lazy to name them all", img: ReactImg},
        "Tailwind": {desc: "Bruh2", img: TailwindImg},
        "Python": {desc: "Bruh3", img: PythonImg},
        "C": {desc: "Bruh4", img: CImg},
        "Java": {desc: "Bruh5", img: JavaImg}
    }

    return(
        <>
            <div className="flex w-full bg-zinc-950 min-h-20 border-l-1 border-t-1 border-b-1 border-r-1 border-neutral-900 justify-center items-center gap-2">
                <div className="w-30 h-30 flex items-center justify-center">
                    <motion.img onMouseEnter={() => {setHoveredLang("React")}} onMouseLeave={() => {setHoveredLang(null)}} src={ReactImg} className="w-20" whileHover={{ scale: 1.3 }}></motion.img>
                </div>
                <div className="w-30 h-30 flex items-center justify-center">
                    <motion.img onMouseEnter={() => {setHoveredLang("Tailwind")}} onMouseLeave={() => {setHoveredLang(null)}} src={TailwindImg} className="w-28" whileHover={{ scale: 1.3 }}></motion.img>
                </div>
                <div className="w-30 h-30 flex items-center justify-center">
                    <motion.img onMouseEnter={() => {setHoveredLang("Python")}} onMouseLeave={() => {setHoveredLang(null)}} src={PythonImg} className="w-20" whileHover={{ scale: 1.3 }}></motion.img>
                </div>
                <div className="w-30 h-30 flex items-center justify-center">
                    <motion.img onMouseEnter={() => {setHoveredLang("C")}} onMouseLeave={() => {setHoveredLang(null)}} src={CImg} className="w-17" whileHover={{ scale: 1.3 }}></motion.img>
                </div>
                <div className="w-30 h-30 flex items-center justify-center">
                    <motion.img onMouseEnter={() => {setHoveredLang("Java")}} onMouseLeave={() => {setHoveredLang(null)}} src={JavaImg} className="w-14" whileHover={{ scale: 1.3 }}></motion.img>
                </div>
            </div>
            {hoveredLang != null && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ease: "easeOut"}}>
                <Card title={hoveredLang} image={langDesc[hoveredLang].img}>
                    {langDesc[hoveredLang].desc}
                </Card>
            </motion.div>
        )}
        </>
    )
}

export default CodingLanguages;