
import { useEffect } from "react";
import Header from "../components/Header";
import { ListItemOne, ListItemThree, ListItemTwo } from "../components/ListItem";
import SectionTitle from "../components/SectionTitle";
import Scroll from "../components/SmoothScroll";
import StudyCard from "../components/StudyCard";
import './output.css';

//greensock

//import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js";
//import scrollTrigger from "https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"

export default function App() {

  function handleViewTrans(params) {
    console.log("done");
  }

  return (
    <div>
      {/* //TODO: header */}
      <Header />
      <main className="font-questrial h-auto border border-transparent  trigger text-tertiary">
        {/* //TODO: Presentation section */}
        <section id="section-one" className="h-auto md:mt-56 relative">
          <div className=" px-4 md:px-8 flex flex-col ">
            <div className=" p-4  hidden md:flex justify-center mt-8 md:mt-0 items-center md:h-60">
              <p className=" h-auto box text-7xl md:text-[160px] box-shadow"><strong>UX/UI</strong></p>
            </div>
          </div>
          <div className=" md:p-8 md:ml-12 sm:border hidden md:flex modal md:opacity-0 text-transparent bg-clip-text text-grad  sm:border-none mt-8 mx-auto md:w-[51%] h-auto  justify-start">
            <p className=" md:p-4 w-full md:text-[52px] leading-tight 2xl:text-6xl block ">
              <strong>¡Bienvenid@ a mi portafolio web! Soy un desarrollador front-end  apasionado por crear experiencias de usuario impactantes. Explora mi trabajo en UX/UI.</strong></p>
          </div>
          <img src="photo-one.webp" className="absolute right-32 img-ani opacity-0 w-[350px]  h-[620px]" alt="" srcset="" />
          <p className="md:hidden block bg-gradient-to-r sm:text-center text-grad text-3xl p-4 pl-5 bg-clip-text text-transparent"><strong>¡Bienvenid@ a mi portafolio web!</strong></p>
        </section>
        {/* //TODO: Professional profile section */}
        <section className="h-auto grid border  md:px-12 md:grid-cols-2 gap-2 p-4 mb-12 ">
          <card className=" w-full h-auto p-8 md:py-12 pl-8 flex flex-col justify-center rounded-3xl border bg-tertiary text-primary">
            <h2 className="text-2xl  md:text-7xl mb-8 "><strong>Perfil profesional</strong></h2>
            <p className="md:text-2xl leading-relaxed">
              <strong className="md:block hidden">Tecnologo en anàlisis y desarrollo de software, con aptitudes investigativas, resolucion de problemas, diseño de arquitecturas de sofware, desarrollo de aplicaciones de software.</strong>
              <span className="md:hidden block">Tecnologo en anàlisis y desarrollo de software, con aptitudes investigativas, resolucion de problemas, diseño de arquitecturas de sofware, desarrollo de aplicaciones de software.</span>
            </p>
          </card>
          <card className="h-auto gap-2 flex flex-col">
            <div className=" gradient md:py-8 text-primary rounded-3xl h-auto p-4 md:flex ">
              <div className=" flex w-full flex-col p-4 justify-center items-center">
                <p className="text-3xl  w-full">
                  <strong >Analisis y desarrollo de software</strong>
                </p>
                <p className="py-4 md:text-xl">
                  <strong className="md:block hidden">Certificado en Analisis y desarrollo de software, con experiencia en cada fase del desarrollo de software</strong>
                  <span className="md:hidden block">Certificado en Analisis y desarrollo de software, con experiencia en cada fase del desarrollo de software</span>
                </p>
              </div>

            </div>
            <div className="border rounded-3xl md:py-8 h-auto p-4 md:flex ">
              <div className=" flex w-full flex-col p-4 justify-center items-center">
                <p className="text-3xl  w-full">
                  <strong >Fundamentos de programacion</strong>
                </p>
                <p className=" py-4 md:text-xl">
                  <strong className="md:block hidden">Curso en fundamentos de programacion con lenguaje JavaScript.</strong>
                  <span className="md:hidden block">Curso en fundamentos de programacion con lenguaje JavaScript.</span>
                </p>
              </div>
            </div>
          </card>
          <card className=" h-auto w-full gap-2 sm:flex justify-center ">
            <div className=" h-auto sm:w-1/2 p-8 pl-8 flex justify-center items-center rounded-3xl border">
              <p className="text-5xl"><strong>Git</strong></p>
              <img src="git.webp" className="w-12 h-12" alt="" />
            </div>
            <div className=" h-auto sm:w-1/2 p-8 pl-8 md:py-12 flex  justify-center items-center rounded-3xl border">
              <p className="text-5xl"><strong>Tailwind</strong></p>
              <img src="tailwind.webp" className="w-12 h-12" alt="" />
            </div>
          </card>
          <card className=" h-auto w-full gap-2 sm:flex justify-center ">
            <div className=" h-auto sm:w-1/2 p-8 pl-8 flex justify-center rounded-3xl items-center border">
              <p className="text-5xl"><strong>React</strong></p>
              <img src="react.webp" className="w-12 h-12" alt="" />
            </div>
            <div className=" h-auto sm:w-1/2 p-8 pl-8 md:py-12 flex  justify-center items-center rounded-3xl border">
              <p className="text-5xl"><strong>Sqlite</strong></p>
              <img src="sq.svg" className="w-12 h-12" alt="" />
            </div>
          </card>
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
                    <img className=" md:w-[120px] w-28 h-28 md:h-[120px]" src="team.png" alt="" />
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
      {/* <Scroll /> */}
    </div>

  )
}