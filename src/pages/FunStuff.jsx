import Default from "../layouts/Default";
import Textbox from "../components/Textbox";
import AnimatedAnchor from "../components/AnimatedAnchor";
import Goofy1 from "../assets/goofy1.png"
import Goofy2 from "../assets/goofy2.png"
import { motion } from "motion/react";
import Card from "../components/Card";

function FunStuff(){

    return(
        <>
            <Default>
                <Card title="First website iml" image={Goofy1}>
                    <AnimatedAnchor href="https://kalousu.github.io/floobi/index.html">First website I've done.</AnimatedAnchor>
                    &nbsp;This is the first website i've created.<br/>
                    It allowed me to learn how to use vanilla html, css and javascript to create some simple games and stuff.<br/>
                    (Really. I really just used html, css and JavaScript. Madman)
                </Card>
                <Card title="Second website" image={Goofy2}>
                    I'm not sure what my second website will be, so just <AnimatedAnchor href="">click here to find out.</AnimatedAnchor>
                </Card>
            </Default>
        </>
    )
}

export default FunStuff;