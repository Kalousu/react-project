import anime from 'animejs/lib/anime.es.js';
import { NavLink } from "react-router-dom";

function Navbar(props){

    return(
        <>
            <nav className="flex w-full justify-around items-center text-s h-16">
                <NavLink to="/">
                    <div className="text-center text-xl hover:cursor-pointer">
                        <p>Home</p>
                        <div className="border-t-2 border-teal-400"></div>
                    </div>
                </NavLink>
                <NavLink to="/about-me">
                    <div className="text-center text-xl hover:cursor-pointer">
                        <p>About me</p>
                        <div className="border-t-2 border-teal-400"></div>
                    </div>
                </NavLink>
                <NavLink to="/fun-stuff">
                    <div className="text-center text-xl hover:cursor-pointer">
                        <p>Fun Stuff</p>
                        <div className="border-t-2 border-teal-400"></div>
                    </div>
                </NavLink>
                <NavLink to="/secret">
                    <div className="text-center text-xl hover:cursor-pointer">
                        <p>Secret 🤯</p>
                        <div className="border-t-2 border-teal-400"></div>
                    </div>
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar;

