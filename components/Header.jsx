import '../src/output.css';

export default function Header() {
    return (
        <header className="bg-blue-300 text-tertiary w-screen h-auto relative border border-transparent md:h-screen font-questrial text-2xl">
            <div className="py-2 px-2 flex justify-end items-center ">
                <img src="menu.webp" className="cursor-pointer w-10 h-10 md:w-12 m-2 md:h-12 rounded-md p-2 transition-all hover:bg-gray" alt="" />
            </div>
            <h1 className="lg:text-[170px] text-4xl md:text-8xl md:mt-12 block p-4 leading-tight "><strong>Desarrollador</strong> <span className="block  p-0"><strong>Front-end</strong></span></h1>
            <div className="mt-4 text-base gap-4 p-4  justify-start md:text-xl 2xl:text-3xl sm:flex ">
                <div className="p-2 flex flex-col md:mt-32">
                    <h4><strong>Diseno</strong></h4>
                    <p className="text-base md:w-96">Mi enfoque principal radica en el diseño de aplicaciones, donde busco la armonía entre estética y usabilidad para crear experiencias digitales memorables.</p>
                </div>
                <div className="p-2 flex flex-col md:mt-32">
                    <h4><strong>Rendimiento</strong></h4>
                    <p className="text-base md:w-96">El rendimiento de las aplicaciones es crucioal. Busco la eficiencia, velocidad y respuesta para brindar a los usuarios experiencias excepcionales.
                    </p>
                </div>
            </div>
        </header>
    )
}