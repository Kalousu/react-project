function Card(props){

    return(
        <>
        <div className="flex border-2 border-teal-500 bg-gray-900 p-4 m-4 gap-4">
            <img src={props.image} alt={props.title} className="w-50 max-h-50"/>
            <div className="flex flex-col">
                <p className="text-2xl underline">{props.title}</p>
                <p>{props.paragraph}</p>
            </div>
        </div>
        </>
    )
}

export default Card;