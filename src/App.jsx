import Scroll from "../components/SmoothScroll";


export default function App() {
  return (
    <div>
      <header className="bg-blue-300 w-screen h-auto relative border border-transparent md:h-screen font-questrial text-2xl">
        <img src="paint.webp" className="absolute md:w-[480px] w-[150px] h-[150px] md:h-[453px] top-[-10px] left-[-10px]" alt="" />
        <div className="py-8 px-2 flex justify-end items-center">
          <img src="menu.webp" className="cursor-pointer w-8 h-8 md:w-12 md:h-12 rounded-full hover:bg-gray-300 p-2" alt="" />
        </div>
        <h1 className="mx-auto my-auto px-4 text-center mt-12 md:mt-48 ">
          <span className="block leading-tight ">
            <span className="text-4xl md:text-7xl lg:text-[110px] 2xl:text-[160px]">DESARROLLADOR</span>
          </span>
          <span className="block text-4xl md:text-7xl lg:text-[110px] 2xl:text-[160px]">FRONT-END</span>
        </h1>
        <div className="mt-4 text-base gap-4 px-4 justify-center md:text-xl 2xl:text-3xl flex ">
          <p>Interactividad</p>
          <p>Diseno</p>
          <p>Rendimiento</p>
        </div>
        <a href="#section-one">
          <img src="down-arrow.webp" className="mx-auto mt-12 md:mt-44 rounded-full hover:bg-gray-300 cursor-pointer p-4 w-12 h-12 md:w-16 md:h-16 " alt="" />
        </a>
      </header>
      <main className="font-questrial h-auto">
        <section id="section-one" className="h-auto bg-red-400 py-20">
          <div className=" p-4 ">
            <p className=" md:w-[500px] h-auto text-base md:text-xl 2xl:text-3xl">Bienvenido a mi portafolio, soy Camilo Pinilla, un apasionado
              desarrollador Front-end enfocado en abordar proyectos
              cautivantes e interactivos.</p>
          </div>
          <div className=" p-4 flex justify-center items-center md:h-60">
            <p className=" h-auto  text-5xl md:text-[160px]">UX/UI</p>
          </div>
          <div className="  p-4  flex justify-end">
            <p className="text-base md:w-[500px] md:text-xl 2xl:text-3xl block ">Marcando distinguidos y novedosos diseños acorde a
              tendencias en UI/UX con el uso de tecnologias y estandares empleados en la industria.</p>
          </div>
        </section>
      </main>
    <Scroll />
    </div>

  )
}