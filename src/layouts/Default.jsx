import Navbar from '../components/Navbar'
import Separator from '../components/Separator';

function Default(props){

    return(
        <>
            <div className="flex bg-gray-800 w-[70vw] opacity-80 flex-col">
                <Navbar />
                <Separator />
                <div>{props.children}</div>
            </div>
        </>
    )
}

export default Default;