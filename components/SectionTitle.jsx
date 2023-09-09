export default function SectionTitle({title}) {
    return(
        <div className="flex h-auto justify-center mt-2 my-8 md:mb-20 items-center">
            <hr className="w-24 hidden lg:block" />
            <h2 className="text-2xl md:text-7xl mx-8 text-center">{title}</h2>
            <hr className="w-24 hidden lg:block" />
        </div>
    )
}