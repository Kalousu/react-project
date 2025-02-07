import anime from 'animejs/lib/anime.es.js';
import { NavLink } from "react-router-dom";

function Navbar(){

    return(
        <>
            <nav className="flex w-full justify-around items-center text-s h-16">
                <div className="text-center text-xl hover:cursor-pointer">
                    <NavLink to="/">Home</NavLink>
                    <div className="border-t-2 border-teal-400"></div>
                </div>
                <div className="text-center text-xl hover:cursor-pointer">
                    <NavLink to="/about-me">About me</NavLink>
                    <div className="border-t-2 border-teal-400"></div>
                </div>
                <div className="text-center text-xl hover:cursor-pointer">
                    <NavLink to="/fun-stuff">Fun stuff</NavLink>
                    <div className="border-t-2 border-teal-400"></div>
                </div>
                <div className="text-center text-xl hover:cursor-pointer">
                    <NavLink to="/secret">Secret 🤯</NavLink>
                    <div className="border-t-2 border-teal-400"></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

