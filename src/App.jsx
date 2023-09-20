
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
      <main className="font-questrial h-auto border border-transparent bg-alternative  trigger text-tertiary">
        {/* //TODO: Presentation section */}
        <section id="section-one" className="h-auto md:mt-56 border border-transparent relative bg-alternative">
          <div className=" px-4 md:px-8 flex flex-col ">
            <div className=" p-4  hidden md:flex justify-center mt-8 md:mt-0 items-center md:h-60">
              <p className=" h-auto box text-7xl md:text-[160px] box-shadow"><strong>UX/UI</strong></p>
            </div>
          </div>
          <div className=" md:p-8 md:ml-12 sm:border hidden md:flex modal md:opacity-0 text-transparent bg-clip-text text-grad  sm:border-none mt-8 mx-auto md:w-[51%] h-auto  justify-start">
            <p className=" md:p-4 w-full md:text-[32px] xl:text-[54px] lg:text-[40px] leading-tight 2xl:text-6xl block ">
              <strong>¡Bienvenid@ a mi portafolio web! Soy un desarrollador front-end  apasionado por crear experiencias de usuario impactantes. Explora mi trabajo en UX/UI.</strong></p>
          </div>
          <img src="photo-one.webp" className="absolute md:right-16 lg:right-32 img-ani opacity-0 md:w-[250px] md:h-[460px] lg:w-[310px] lg:h-[580px] xl:w-[350px]  xl:h-[570px]" alt="" srcset="" />
          <p className="md:hidden block bg-gradient-to-r sm:text-center text-grad text-3xl p-4 pl-5 bg-clip-text text-transparent"><strong>¡Bienvenid@ a mi portafolio web!</strong></p>
        </section>
        {/* //TODO: Professional profile section */}
        <section className="h-auto grid  relative bottom-12  mx-auto mt-12  lg:px-12 md:grid-cols-2 gap-2 p-4 mb-12 ">
          <div  data-speed="0.5" className=" w-full  h-auto p-8 lg:py-12 pl-8 flex flex-col justify-center rounded-3xl border bg-tertiary text-primary">
            <h2 className="text-2xl md:text-5xl  lg:text-7xl mb-8 "><strong>Perfil profesional</strong></h2>
            <p className="md:text-2xl leading-relaxed">
              <strong className="md:block hidden">Tecnologo en anàlisis y desarrollo de software, con aptitudes investigativas, resolucion de problemas, diseño de arquitecturas de sofware, desarrollo de aplicaciones de software.</strong>
              <span className="md:hidden block">Tecnologo en anàlisis y desarrollo de software, con aptitudes investigativas, resolucion de problemas, diseño de arquitecturas de sofware, desarrollo de aplicaciones de software.</span>
            </p>
  
          </div>
          <div  data-speed="0.5" className="h-auto  gap-2 flex flex-col">
            <div className=" gradient first-hover md:py-8 text-primary relative rounded-3xl h-auto p-4 md:flex ">
              <div className=" flex w-full flex-col p-4 justify-center items-center">
                <p className="text-3xl  w-full">
                  <strong >Analisis y desarrollo de software</strong>
                </p>
                <p className="py-4 md:text-xl">
                  <strong className="md:block hidden">Certificado en Analisis y desarrollo de software, con experiencia en cada fase del desarrollo de software</strong>
                  <span className="md:hidden block">Certificado en Analisis y desarrollo de software, con experiencia en cada fase del desarrollo de software</span>
                </p>
              </div>
              <div transition-style="in:wipe:up" className="absolute hover-one hidden rounded-3xl text-center place-content-center top-0 left-0 w-full h-full bg-tertiary">
              <p className="text-3xl text-alternative"><strong>Servicio Nacional de Aprendizaje</strong></p>
                <p className="text-3xl text-alternative"><strong>2022-2024</strong></p>
              </div>
            </div>
            <div className="border rounded-3xl first-hover relative md:py-8 h-auto p-4 md:flex ">
              <div className=" flex w-full flex-col p-4 justify-center items-center">
                <p className="text-3xl  w-full">
                  <strong >Fundamentos de programacion</strong>
                </p>
                <p className=" py-4 md:text-xl">
                  <strong className="md:block hidden">Curso en fundamentos de programacion con lenguaje JavaScript.</strong>
                  <span className="md:hidden block">Curso en fundamentos de programacion con lenguaje JavaScript.</span>
                </p>
              </div>
              <div transition-style="in:wipe:up" className="absolute hover-one hidden rounded-3xl text-center justify-center top-0 left-0 w-full h-full bg-tertiary">
                <p className="text-3xl text-alternative"><strong>Fundacion telefonica Movistar</strong></p>
                <p className="text-3xl text-alternative"><strong>2021. 40h</strong></p>
              </div>
            </div>
          </div>
          <div data-speed="0.5"  className=" h-auto w-full gap-2 sm:flex justify-center ">
            <div className=" h-auto sm:w-1/2 p-8 pl-8 flex justify-center items-center rounded-3xl border">
              <p className="lg:text-3xl text-2xl md:text-2xl"><strong>Git</strong></p>
              <img src="git.webp" className="w-12 h-12" alt="" />
            </div>
            <div className=" h-auto sm:w-1/2 p-8 pl-8 md:py-12 flex  justify-center items-center rounded-3xl border">
              <p className="lg:text-3xl text-2xl md:text-2xl"><strong>Tailwindcss</strong></p>
              <img src="tailwind.webp" className="w-12 h-12" alt="" />
            </div>
          </div>
          <div  data-speed="0.5" className=" h-auto w-full gap-2 sm:flex justify-center ">
            <div className=" h-auto sm:w-1/2 p-8 pl-8 flex justify-center rounded-3xl items-center border">
              <p className="lg:text-3xl text-2xl md:text-2xl"><strong>React</strong></p>
              <img src="react.webp" className="w-12 h-12" alt="" />
            </div>
            <div className=" h-auto sm:w-1/2 p-8 pl-8 md:py-12 flex  justify-center items-center rounded-3xl border">
              <p className="lg:text-3xl text-2xl md:text-2xl"><strong>Sqlite</strong></p>
              <img src="sq.svg" className="w-12 h-12" alt="" />
            </div>
          </div>
        </section>
        <h3 className="text-4xl md:text-6xl mt-56 lg:text-[110px] py-4 bg-tertiary text-primary text-center md:mb-10 border"><strong>Proyectos desarrollados</strong></h3>

        {/* //TODO: Projects section */}
        <section className="h-auto mt-48 md:mt-48">
          <div className=" md:flex mt-12 md:my-20 mx-4 md:mx-10">
            <div className="md:w-1/2 py-8  flex  justify-center relative items-center  ">
              <img src="uno.webp" className="cursor-pointer h-64 md:h-[110%] md:w-[90%] rounded-3xl" onClick={handleViewTrans} style={{ viewTransitionName: "img-one" }} alt="" />
            </div>
            <div className="md:w-1/2  grid place-content-center py-8 xl:pr-4 md:pl-4">
              <h4 className="text-xl md:text-3xl md:p-4 py-4 px-2 " id="title-one" style={{ viewTransitionName: "title-one" }}><strong>Ciclo hidrologico del planeta</strong></h4>
              <p className="text-base md:p-4 py-4 px-2">Explora el fascinante ciclo hidrológico de nuestro planeta a través de nuestro sitio web. Descubre cómo el agua fluye en un constante viaje, desde la evaporación hasta la precipitación y más. Únete a nosotros para comprender y preservar este vital proceso. ¡Sumérgete en el ciclo del agua hoy mismo!</p>
            </div>
          </div>
          <div className=" md:flex mt-4 md:my-20 mx-4 md:mx-10">
            <div className="md:w-1/2  grid place-content-center py-8 xl:pr-4 md:pl-4">
              <h4 className="text-xl md:text-3xl md:p-4 py-4 px-2 " id="title-one" style={{ viewTransitionName: "title-one" }}><strong>Calidad en cada pixel</strong></h4>
              <p className="text-base md:p-4 py-4 px-2">Optimiza el rendimiento de tu sitio web con nuestra herramienta especializada en redimensionar imágenes. Acelera la carga de páginas y mejora la experiencia del usuario. ¡Transforma tu sitio hoy y ofrece un rendimiento excepcional con imágenes optimizadas!</p>
            </div>
            <div className="md:w-1/2 py-8  flex  justify-center relative items-center ">
              <img src="dos.webp" className="cursor-pointer h-64 md:h-[110%] md:w-[90%] rounded-3xl" onClick={handleViewTrans} style={{ viewTransitionName: "img-one" }} alt="" />
            </div>
          </div>
        </section>
      </main>
      {/* <Scroll /> */}
    </div>

  )
}