import anime from 'animejs/lib/anime.es.js';
import { NavLink, useLocation } from "react-router-dom";

function Navbar(props){

    const location = useLocation();
    

    return(
        <>
            <nav className="flex w-full justify-around items-center text-s h-16 mb-3">
                <NavLink to="/">
                    <div className={`text-center text-xl hover:cursor-pointer ${location.pathname == "/" ? "text-teal-700" : ""}`}>
                        <p>Home</p>
                        <div className="border-t-2 border-teal-400"></div>
                    </div>
                </NavLink>
                <NavLink to="/about-me">
                    <div className={`text-center text-xl hover:cursor-pointer ${location.pathname == "/about-me" ? "text-teal-700" : ""}`}>
                        <p>About me</p>
                        <div className="border-t-2 border-teal-400"></div>
                    </div>
                </NavLink>
                <NavLink to="/fun-stuff">
                    <div className={`text-center text-xl hover:cursor-pointer ${location.pathname == "/fun-stuff" ? "text-teal-700" : ""}`}>
                        <p>Fun Stuff</p>
                        <div className="border-t-2 border-teal-400"></div>
                    </div>
                </NavLink>
                <NavLink to="/secret">
                    <div className={`text-center text-xl hover:cursor-pointer ${location.pathname == "/secret" ? "text-teal-700" : ""}`}>
                        <p>Secret 🤯</p>
                        <div className="border-t-2 border-teal-400"></div>
                    </div>
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar;

