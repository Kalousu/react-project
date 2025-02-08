import Default from '../layouts/Default'
import Card from '../components/Card'
import Textbox from '../components/Textbox'
import testImage from '../assets/test.png'
import FirstBackground from '../backgrounds/FirstBackground'
import Placeholdercat from '../assets/placeholdercat.png'

function Homepage(){

    return(
        <>
            <FirstBackground/>
            <Default>
                <Card 
                    title="Hey guys! This is my homepage for now..." 
                    paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nobis nisi eum magnam quos repudiandae. 
                                Rerum est expedita maxime ea, accusamus cum distinctio, vel perferendis cupiditate ut debitis. 
                                Perspiciatis, iusto inventore." image={testImage} />
                <Textbox>
                    This website is in HEAVY maintenance. Any solid advice you can give is appreciated (really.)
                </Textbox>
                <Textbox>
                    If there's any cool suggestions you have, please send them my way.
                </Textbox>
                <Textbox>
                    For now, you can enjoy this silly little cat :)
                </Textbox>
                <div className="flex w-full justify-center mt-10">
                    <img src={Placeholdercat}></img>
                </div>
            </Default>
        </>
    )
}

export default Homepage;
