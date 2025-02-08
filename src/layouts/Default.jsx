import Navbar from '../components/Navbar'
import Separator from '../components/Separator';

function Default(props){

    return(
        <>
            <div className="flex bg-neutral-950 w-[70vw] opacity-99 flex-col border-l-1 border-r-1 border-neutral-900">
                <Navbar />
                <div>{props.children}</div>
            </div>
        </>
    )
}

export default Default;