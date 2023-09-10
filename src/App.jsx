
import { ListItemOne, ListItemThree, ListItemTwo } from "../components/ListItem";
import SectionTitle from "../components/SectionTitle";
import Scroll from "../components/SmoothScroll";
import StudyCard from "../components/StudyCard";

export default function App() {

  function handleViewTrans(params) {
    console.log("done");
  }
  return (
    <div>
      {/* //TODO: header */}
      <header className="bg-blue-300 text-tertiary w-screen h-auto relative border border-transparent md:h-screen font-questrial text-2xl">
        <img src="paint.webp" className="absolute md:w-[480px] w-[150px] h-[150px] md:h-[453px] top-[-10px] left-[-10px]" alt="" />
        <div className="py-8 px-2 flex justify-end items-center">
          <img src="menu.webp" className="cursor-pointer w-8 h-8 md:w-12 md:h-12 rounded-full p-2 transition-all hover:bg-gray" alt="" />
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
          <img src="down-arrow.webp" className="mx-auto mt-12 md:mt-44 rounded-full cursor-pointer p-4 w-12 h-12 md:w-16 md:h-16 transition-all hover:bg-gray" alt="" />
        </a>
      </header>
      <main className="font-questrial h-auto text-tertiary">
        {/* //TODO: Presentation section */}
        <section id="section-one" className="h-auto bg-red-400 mt-20 md:py-20">
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
        {/* //TODO: Professional profile section */}
        <section className="h-auto md:flex py-4 mb-12 mt-4 px-6 md:justify-between">
          <div className="md:w-1/2 w-full h-auto grid place-content-center p-2 justify-center">
            <h2 className="text-2xl  md:text-7xl py-8">Perfil profesional</h2>
            <p className="text-base  md:text-xl leading-relaxed">Tecnologo en anàlisis y desarrollo de software, con aptitudes investigativas, resolucion de problemas y necesidades, diseño de arquitecturas de sofware, desarrollo e implementacion de aplicaciones de software haciendo uso de diversas tecnologias.</p>
            <br />
            <p className="text-base md:text-xl leading-relaxed">Experiencia solida en el campo del desarrollo Front-end aplicando practicas de experiencia de usuario y usabilidad , prototipado de interfaces de usuario, Implementando diseños responsivos adaptables a diferentes tamaños de pantallas.</p>
            <br />
            <div>
              <button className="text-base btn-shadow bg-tertiary text-primary md:text-xl py-4 px-8 mx-auto mt-8 flex justify-center text-center md:w-[45%]"><a href="#">sobre camilo</a></button>
            </div>
            
          </div>
          <div className="h-auto md:w-1/2 py-4 px-2 md:shrink-0 relative flex items-  justify-center ">
            <div className="h-full w-full top-0 left-0 absolute hidden"></div>
            <img src="photo-one.webp" alt="" className=" w-full sm:w-3/5 md:w-[70%]  mt-8 object-cover" />
          </div>
        </section>
        {/* //TODO: Education section */}
        <section className="h-auto">
          <SectionTitle title="Formacion academica" />
          <div className="md:flex mt-8 h-auto">
            <div className="md:w-2/6 hidden md:block">
              <p className="text-[160px]  py-4 h-1/3 text-center">01</p>
              <p className="text-[160px]  py-4 h-1/3 text-center">02</p>
              <p className="text-[160px]  py-4 h-1/3 text-center">03</p>
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
        {/* //TODO: Technologies section */}
        <section className="h-auto mt-12 md:mt-48">
          <SectionTitle title="Habilidades y tecnologias" />
          <article className="md:flex">
            <div className="md:w-1/2 h-auto  items-center border-r-2">
              <h3 className="p-4 text-center underline text-xl md:text-3xl">Tecnologias</h3>
              <ul className="mt-8">
                <ListItemOne />
                <ListItemTwo />
                <ListItemThree />
              </ul>
            </div>
            <div className=" md:w-1/2 h-auto">
              <h3 className="p-4 text-center underline text-xl md:text-3xl">Habilidades blandas</h3>
              <div className="md:flex  mt-8">
                <ul className=" p-4 w-full">
                  <li className="flex p-4 items-center justify-around">
                    <p className="p-4 text-base md:text-xl">Administracion del tiempo</p>
                    <img className=" md:w-[140px] w-28 h-28 md:h-[140px]" src="time.png" alt="" />
                  </li>
                  <li className="flex p-4 items-center justify-around">
                    <img className=" md:w-[120px] w-24 h-24 md:h-[120px]" src="team.png" alt="" />
                    <p className="p-4 text-base md:text-xl">Trabajo en equipo</p>
                  </li>
                  <li className="flex p-4 items-center justify-around">
                    <p className="p-4 text-base md:text-xl">Resolucion de problemas</p>
                    <img className=" md:w-[140px] w-28 h-28 md:h-[140px]" src="idea.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
        {/* //TODO: Projects section */}
        <section className="h-auto mt-12 md:mt-48">
          <SectionTitle title="Proyectos desarrollados" />
          <div className=" md:flex mt-4 md:my-20 mx-8">
            <div className="md:w-1/2  flex justify-center relative items-center img-af after:h-full after:ease-linear after:duration-300 after:transition-all ">
              <img src="uno.webp" className="cursor-pointer " onClick={handleViewTrans} style={{ viewTransitionName: "img-one" }} alt="" />
            </div>
            <div className="md:w-1/2  grid place-content-center py-8 xl:pr-4 md:pl-4">
              <h4 className="text-xl underline md:text-3xl red-theme md:p-4 py-4 " id="title-one" style={{ viewTransitionName: "title-one" }}>Ciclo hidrologico del planeta</h4>
              <p className="text-base md:p-4 py-4">Explora el fascinante ciclo hidrológico de nuestro planeta a través de nuestro sitio web. Descubre cómo el agua fluye en un constante viaje, desde la evaporación hasta la precipitación y más. Únete a nosotros para comprender y preservar este vital proceso. ¡Sumérgete en el ciclo del agua hoy mismo!</p>
            </div>
          </div>
          <div className="md:flex  md:my-20 mx-8">
            <div className="md:w-1/2  grid place-content-center py-2 md:py-8 xl:pl-4 md:pr-4">
              <h4 className="text-xl underline md:text-3xl md:p-4 red-theme py-4 " id="title-two" style={{ viewTransitionName: "title-two" }}>Calidad en cada pixel</h4>
              <p className="text-base md:p-4 py-4">Optimiza el rendimiento de tu sitio web con nuestra herramienta especializada en redimensionar imágenes. Acelera la carga de páginas y mejora la experiencia del usuario. ¡Transforma tu sitio hoy y ofrece un rendimiento excepcional con imágenes optimizadas!</p>
            </div>
            <div className="md:w-1/2  flex justify-center items-center img-be before:h-full before:ease-linear before:duration-300 before:transition-all">
              <img src="dos.webp" className="cursor-pointer " onClick={handleViewTrans} style={{ viewTransitionName: "img-two" }} alt="" />
            </div>
          </div>
        </section>
        {/* //TODO: footer section */}
        <footer id="footer" className="h-auto  bg-secondary py-4 px-4 mt-12 md:mt-48">
          <div className=" md:flex justify-between p-4 md:p-8">
            <div >
              <h3 className="text-3xl md:text-7xl py-4">Sobre mi</h3>
              <p className="text-base md:text-xl py-2 md:pl-2">Conoce mas acerca de mi persona, como mis intereses, objetivos, experiencia y perspectiva en la siguiente sección.</p>
            </div>
            <div className="  flex items-center md:mr-4 md:m-0 md:ml-4">
              <a className="block hover:bg-tertiary transition-all hover:bg-opacity-40 rounded-full p-2" href="/about-one"><img className="w-16 h-16 md:w-24 md:h-24 cursor-pointer" src="back-btn.webp" alt="" /></a>
            </div>
          </div>
          <hr className="px-12 w-[95%] mx-auto" />
          <h4 className=" p-4 text-center text-2xl mt-8 md:text-4xl">Redes sociales</h4>
          <nav className=" p-4 flex justify-center gap-2 md:gap-8">
            <img width={60} height={60} className="cursor-pointer hover:bg-tertiary transition-all hover:bg-opacity-40 p-1 rounded-md" src="Instagram.webp" alt="" />
            <img width={60} height={60} className="cursor-pointer hover:bg-tertiary transition-all hover:bg-opacity-40 p-1 rounded-md" src="github.webp" alt="" />
            <img width={60} height={60} className="cursor-pointer hover:bg-tertiary transition-all hover:bg-opacity-40 p-1 rounded-md" src="Discord.webp" alt="" />
            <img width={60} height={60} className="cursor-pointer hover:bg-tertiary transition-all hover:bg-opacity-40 p-1 rounded-md" src="Linkedin.webp" alt="" />
          </nav>
          <h4 className=" p-4 text-center text-xl mt-8 md:text-2xl ">Desarrollado por Camilo Pinilla</h4>

        </footer>
      </main>
      <Scroll />
    </div>

  )
}