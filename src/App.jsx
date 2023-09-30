import Header from "../components/Header";
import Grid from "../components/Grid";

import './output.css';

import initGSAP from "../libs/gsap.init.js";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    initGSAP()
  }, [])

  function handleViewTrans(params) {
    console.log("done");
  }
 
  return (
    <div id="container" className="scroller overflow-x-hidden" style={{ height: "100vh", overflowX: "hidden" }}>
      <Header />
      <main id="main" className="h-auto  bg-alternative   text-tertiary">
        {/* //TODO: Presentation section */}
        <section className="md:h-screen sm:flex ">
          <div className="sm:w-1/2 md:w-[60%] sm:mr-8 mt-8 sm:mt-0 md:mr-0 circles-cont   p-2 lg:pl-16 flex flex-col relative justify-center lg:justify-around">
            <div transition-style="in:circle:center" className="circle hidden  lg:hidden md:w-12 md:h-12 cir-two top-[520px] right-[220px] lg:top-[470px] lg:right-[320px] rounded-full absolute"></div>
            <div transition-style="in:circle:center" className="circle hidden  lg:hidden md:w-4 md:h-4 cir-three top-[670px] right-64 rounded-full absolute"></div>
            <div transition-style="in:circle:center" className="circle cir-one hidden  lg:hidden lg:w-72 lg:h-72 top-56 right-20 rounded-full absolute"></div>
            <p className="md:text-3xl text-lg md:mt-0 mt-8  w-full px-4 py-2 lg:w-[69%] z-10">
              ¡Bienvenid@ a mi portafolio web! Soy un desarrollador front-end apasionado por crear experiencias de usuario impactantes. Explora mi trabajo en UX/UI.
            </p>
            <p className=" hidden md:block mt-4 pl-4 text-2xl text-subgray"> <small>About me</small> <small className="md:ml-8 text-subgray">Projects</small></p>
          </div>
          <div className="flex slider-cont relative md:w-[40%] items-center justify-center">
            <div className="h-full slider-img w-full top-0 left-0 bg-primary absolute"></div>
            <img className="w-[300px] md:mt-0 mt-8 px-8 h-96 md:w-4/5 md:h-3/6 lg:h-3/4" src="photo-one.webp" alt="" />
          </div>
        </section>
        {/* //TODO: Professional profile section */}
          <Grid />
        {/* //TODO: Projects section */}
        <section id="section-three" className="h-auto  mt-40 md:mt-32">
          <h2 className=" text-center "><strong className="text-2xl md:text-6xl tracking-widest  lg:text-[140px]">Proyectos</strong></h2>
          <div className=" md:flex mt-16   md:my-28 mx-4 md:mx-10">
            <div className="md:w-1/2 py-8  slider-cont2 flex  justify-center relative items-center  ">
              <div className="slider-img2 absolute img-eff top-0 left-0 bg-primary "></div>
              <img
                src="uno.webp"
                className="cursor-pointer img-effect h-64 md:h-[110%] md:w-[90%] "
                onClick={handleViewTrans}
                style={{ viewTransitionName: "img-one" }}
                alt=""
              />
            </div>
            <div className="md:w-1/2  grid place-content-center py-8 xl:pr-4 md:pl-4">
              <h4
                className="text-xl md:text-3xl md:p-4 py-4 px-2 "
                id="title-one"
                style={{ viewTransitionName: "title-one" }}
              >
                Ciclo hidrologico del planeta
              </h4>
              <p className="text-base md:p-4 py-4 px-2">
                Explora el fascinante ciclo hidrológico de nuestro planeta a
                través de nuestro sitio web. Descubre cómo el agua fluye en un
                constante viaje, desde la evaporación hasta la precipitación y
                más. Únete a nosotros para comprender y preservar este vital
                proceso. ¡Sumérgete en el ciclo del agua hoy mismo!
              </p>
            </div>
          </div>
          <div className=" md:flex mt-4 md:my-20 mx-4 md:mx-10">
            <div className="md:w-1/2  grid place-content-center py-8 xl:pr-4 md:pl-4">
              <h4
                className="text-xl md:text-3xl md:p-4 py-4 px-2 "
                id="title-one"
                style={{ viewTransitionName: "title-one" }}
              >
                Calidad en cada pixel
              </h4>
              <p className="text-base md:p-4 py-4 px-2">
                Optimiza el rendimiento de tu sitio web con nuestra herramienta
                especializada en redimensionar imágenes. Acelera la carga de
                páginas y mejora la experiencia del usuario. ¡Transforma tu
                sitio hoy y ofrece un rendimiento excepcional con imágenes
                optimizadas!
              </p>
            </div>
            <div className="md:w-1/2 py-8 slider-cont2  flex  justify-center relative items-center ">
            <div className="slider-img2 absolute img-eff top-0 left-0 bg-primary "></div>
              <img
                src="dos.webp"
                className="cursor-pointer h-64 img-effect md:h-[110%] md:w-[90%] "
                onClick={handleViewTrans}
                style={{ viewTransitionName: "img-one" }}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
