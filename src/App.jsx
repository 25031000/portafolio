import Header from "../components/Header";
import Grid from "../components/Grid";

import './output.css';

import initGSAP from "../libs/gsap.init.js";

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
          <div className="md:w-[60%]  p-2 md:pl-16 md:flex flex-col relative justify-center lg:justify-around">
            <div className="circle hidden lg:block md:w-72 md:h-72 top-56 right-20 rounded-full absolute"></div>
            <div className="circle hidden lg:block md:w-12 md:h-12 top-[470px] right-[320px] rounded-full absolute"></div>
            <div className="circle hidden lg:block md:w-4 md:h-4 top-[670px] right-64 rounded-full absolute"></div>
            <p className="md:text-3xl text-lg md:mt-0 mt-8 sm:w-72 px-4 py-2 lg:w-[69%] z-10">
              ¡Bienvenid@ a mi portafolio web! Soy un desarrollador front-end apasionado por crear experiencias de usuario impactantes. Explora mi trabajo en UX/UI.
            </p>
            <p className=" hidden md:block mt-4 pl-4 text-xl">Camilo Pinilla <span className="md:ml-16">Bogota D.C</span></p>
          </div>
          <div className="flex md:w-[40%] items-center justify-center">
            <img className="w-[300px] md:mt-0 mt-8 px-8 h-96 md:w-4/5 md:h-3/6 lg:h-3/4" src="photo-one.webp" alt="" />
          </div>
        </section>
        {/* //TODO: Professional profile section */}
        <Grid />
        {/* //TODO: Projects section */}
        <section id="section-three" className="h-auto mt-48 md:mt-48">
          <div className=" md:flex mt-12 md:my-20 mx-4 md:mx-10">
            <div className="md:w-1/2 py-8  flex  justify-center relative items-center  ">
              <img
                src="uno.webp"
                className="cursor-pointer h-64 md:h-[110%] md:w-[90%] rounded-3xl"
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
                <strong>Ciclo hidrologico del planeta</strong>
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
                <strong>Calidad en cada pixel</strong>
              </h4>
              <p className="text-base md:p-4 py-4 px-2">
                Optimiza el rendimiento de tu sitio web con nuestra herramienta
                especializada en redimensionar imágenes. Acelera la carga de
                páginas y mejora la experiencia del usuario. ¡Transforma tu
                sitio hoy y ofrece un rendimiento excepcional con imágenes
                optimizadas!
              </p>
            </div>
            <div className="md:w-1/2 py-8  flex  justify-center relative items-center ">
              <img
                src="dos.webp"
                className="cursor-pointer h-64 md:h-[110%] md:w-[90%] rounded-3xl"
                onClick={handleViewTrans}
                style={{ viewTransitionName: "img-one" }}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
      {/* <Scroll /> */}
    </div>
  );
}
