import Default from '../layouts/Default'
import Card from '../components/Card'
import testImage from '../assets/test.png'

function Homepage(){

    return(
        <>
            <Default>
                <Card 
                    title="Hey guys! This is my homepage for now..." 
                    paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nobis nisi eum magnam quos repudiandae. 
                                Rerum est expedita maxime ea, accusamus cum distinctio, vel perferendis cupiditate ut debitis. 
                                Perspiciatis, iusto inventore." image={testImage} />
                
            </Default>
        </>
    )
}

export default Homepage;
