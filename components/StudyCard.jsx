export default function StudyCard(props) {
    return(
        <article className=" p-4 h-1/3 relative border-b-2 border-black px-4 grid place-content-center  md:border-none">
            <h3 className="p-4 flex text-lg md:text-3xl underline decoration-red-400 justify-between">
                {props.title}
            </h3>
            <p className="text-base md:text-xl py-4 px-4">{props.desc}</p>
            <div className="md:absolute flex flex-col md:flex-row md:flex mb-2 mx-4 md:bottom-0 md:right-0">
                <small className="md:ml-auto py-2 px-4 block  font-nixie font-semibold   ">{props.dataone}</small>
                <small className="py-2 px-4 block   font-nixie font-semibold  ">{props.datatwo}</small>
                <small className="py-2 px-4 block  font-nixie font-semibold  ">{props.datathree}</small>
            </div>
        </article>
    )
}