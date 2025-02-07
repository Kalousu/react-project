function Textbox(props){

    return(
        <>
        <div className="flex ml-4 mr-4 p-2">
            <p>{props.children}</p>
        </div>
        </>
    )
}

export default Textbox;