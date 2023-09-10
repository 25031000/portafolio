export default function AboutViewOne(params) {

    function handleMenu(params) {
        console.log("done");
    }

    function handleClick(params) {
        console.log("second two");
    }
    return (
        
        <main className="md:flex h-screen relative font-questrial">
            <img src="menu.webp" className="cursor-pointer w-24 h-24 rounded-md  z-10 p-2 absolute top-8 right-8 hover:bg-gray hover:bg-opacity-40" alt="" />
            <div className="md:w-1/2 md:p-8 border h-full grid place-content-center ">
                <h2 className="p-4 text-2xl sm:text-3xl md:text-6xl mb-6 md:mb-12 ">Entusiasta en la<span className="text-secondary"> creaciòn</span> de escenarios informativos, interactivos y divertidos</h2>
                <p className="text-base md:text-2xl p-4 pr-8 ">Una de la cosas que mas llama mi atecion es manifestar ideas y contenidos informativos de la manera  mas clara, conscisa y valiosa para todos los que somos parte del ciberespacio.</p>
            </div>
            <div className="md:w-1/2 md:flex justify-center items-center relative hidden">
                <img src="photo-one.webp" className="p-2 w-3/5 h-4/5 object-cover" alt="" />
            </div>
            <a href="#" ><img src="RightChevron.png" className="absolute w-12 h-12 rounded-md  cursor-pointer right-8 bottom-8 md:top-[52%] border-effect p-2 " alt="" /></a>
        </main>
    )
}

{/* <main className="md:flex h-screen relative font-questrial bg-primary">
            <img onClick={handleMenu} className='cursor-pointer z-10 absolute top-4 right-4' width={32} height={32} src="menu.webp" alt="" />
            <div className="md:w-1/2 h-screen p-8 grid place-content-center ">
                <h2 className="p-2  text-6xl mb-12 animate-fade-up animate-delay-[600ms]">Entusiasta en la <span className="text-secondary">creaciòn</span> de escenarios informativos, interactivos y divertidos</h2>
                <p className="text-2xl p-2 pr-8 animate-fade-up animate-delay-[600ms]">Una de la cosas que mas llama mi atecion es manifestar ideas y contenidos informativos de la manera  mas clara, conscisa y valiosa para todos los que somos parte del ciberespacio.</p>
            </div>
            <div className="md:w-1/2 h-screen md:block hidden relative">
                <img className="w-full md:h-screen" src="photo-one.webp" alt="" />
            </div>
            <a onClick={handleClick} ><img src="chevron-right.png" className="absolute w-12 hover:bg-tertiary hover:bg-opacity-40 top-[52%] rounded-full hover:scale-105 cursor-pointer transition-all right-8" alt="" /></a>
        </main> */}