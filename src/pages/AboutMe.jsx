import Default from '../layouts/Default'
import Textbox from '../components/Textbox';
import CodingLanguages from '../components/CodingLanguages';
import test2 from '../assets/test2.png';
import Card from '../components/Card';

function AboutMe(){

    return(
    <>
    <Default>
        <Card   image={test2} title="About me"
                paragraph="My name is Kalousu and I am 18yrs old (soon 19 though).
                My main occupation right now is being a VT / STAR student. I wouldn't say that I specialize in anything,
                but especially things like Game & Web Development present a lot of fun for me. Some technologies that I
                used in my personal experience for example are:"/>
        <CodingLanguages/>
    </Default>
    </>
    )
}

export default AboutMe;