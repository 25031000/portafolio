
import SectionTitle from "../components/SectionTitle";
import Scroll from "../components/SmoothScroll";
import StudyCard from "../components/StudyCard";

export default function App() {
  return (
    <div>
      {/* //TODO: header */}
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
        {/* //TODO: first section */}
        <section id="section-one" className="h-auto bg-red-400 py-20">
          <div className=" px-8 ">
            <p className=" md:w-[500px]  h-auto text-base md:text-xl 2xl:text-3xl">Bienvenido a mi portafolio, soy Camilo Pinilla, un apasionado
              desarrollador Front-end enfocado en abordar proyectos
              cautivantes e interactivos.</p>
          </div>
          <div className=" p-4 flex justify-center items-center md:h-60">
            <p className=" h-auto  text-5xl md:text-[160px]">UX/UI</p>
          </div>
          <div className="  px-8  flex justify-end">
            <p className="text-base  md:w-[500px] md:text-xl 2xl:text-3xl block ">Marcando distinguidos y novedosos diseños acorde a
              tendencias en UI/UX con el uso de tecnologias y estandares empleados en la industria.</p>
          </div>
        </section>
        {/* //TODO: second section */}
        <section className="h-auto md:flex py-4 mb-12 mt-4 px-6 md:justify-between">
          <div className="md:w-1/2 w-full h-auto grid place-content-center p-2 justify-center">
            <h2 className="text-2xl  md:text-7xl py-8">Perfil profesional</h2>
            <p className="text-base  md:text-xl leading-relaxed">Tecnologo en anàlisis y desarrollo de software, con aptitudes enfocadas a la investigacion, resolucion de problemas y necesidades, diseño de arquitecturas de sofware, desarrollo e implementacion de aplicaciones de software haciendo uso de diversas tecnologias.</p>
            <br />
            <p className="text-base md:text-xl leading-relaxed">Experiencia solida en el campo del desarrollo Front-end aplicando practicas de experiencia de usuario y usabilidad , prototipado de interfaces de usuario, Implementando diseños responsivos adaptables a diferentes tamaños de pantallas.</p>
            <br />
            <button className="text-base border border-black md:text-xl py-4 px-8 mx-auto mt-8 flex justify-center text-center md:w-[45%]"><a href="#">sobre camilo</a></button>
          </div>
          <div className="h-auto md:w-1/2 py-4 px-2 md:shrink-0 relative flex items-  justify-center ">
            <div className="h-full w-full top-0 left-0 absolute hidden"></div>
            <img src="photo-one.webp" alt="" className=" w-full sm:w-3/5 md:w-[70%]  mt-8 object-cover" />
          </div>
        </section>
        {/* //TODO: third section */}
        <section className="h-auto">
          <SectionTitle title="Formacion academica" />
          <div className="md:flex mt-8 h-auto">
            <div className="md:w-2/6 hidden md:block">
              <p className="text-[160px] border py-4 h-1/3 text-center">01</p>
              <p className="text-[160px] border py-4 h-1/3 text-center">02</p>
              <p className="text-[160px] border py-4 h-1/3 text-center">03</p>
            </div>
            <div className="md:w-2/3  h-auto">
              <StudyCard
                title="Analisis y desarrollo de sofware"
                desc="Certificiacion en tecnologia de analisis y desarrollo de software, adquiriendo conocimiento de los procesos en cada fase del ciclo de desarrollo de software "
                dataone="Servicio Nacional de Aprendizaje "
                datatwo="Bogota - Colombia"
                datathree="2022 - 2024"
                
              />
              <StudyCard
                title="Fundamentos de programacion"
                desc="Curso de fundamentos de programacion, enfocado en el lenguaje JavaScript y ejecutando varios ejercicios consolidando el conocimiento adquirido. "
                dataone="Fundacion telefonica Movistar"
                datatwo="Bogota - Colombia"
                datathree="16 OCT - 2021"
                
              />
              <StudyCard
                title="Implementacion de soluciones  de ciberseguridad en la nube "
                desc="Bootcamp en implementacion de soluciones de ciberseguridad en la nube en la plataforma Microsoft Azure, desempenando labores de administracion de redes y la gestion de acceso."
                dataone="Intelligent training"
                datatwo="Bogota - Colombia"
                datathree="23 SEPT - 2022"
                
              />
            </div>
          </div>
        </section>
      </main>
      <Scroll />
    </div>

  )
}