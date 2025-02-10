function Card(props){

    return(
        <>
        <div className="flex border-1 border-teal-500 border-r-0 border-l-0 bg-neutral-950 gap-4 flex-row flex-wrap sm:flex-nowrap">
            <img src={props.image} alt={props.title} className="w-50 h-50"/>
            <div className="flex flex-col">
                <p className="text-2xl underline">{props.title}</p>
                <p>{props.paragraph}</p>
            </div>
        </div>
        </>
    )
}

export default Card;