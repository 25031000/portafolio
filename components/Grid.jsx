import '../src/output.css'

export default function Grid(params) {
    return(
        <section id="section-two" className="h-auto grid grey overflow-x-hidden  relative mr-4  mx-auto mt-12 md:mt-24   lg:px-20 md:grid-cols-2 gap-2 p-4 ">
          <div className=" w-full  h-auto p-8 lg:py-12 pl-8 flex flex-col justify-center rounded-3xl border bg-tertiary text-primary">
            <h2 className="text-2xl md:text-5xl  lg:text-7xl mb-8 "><strong>Perfil profesional</strong></h2>
            <p className="md:text-2xl leading-relaxed">
              <strong className="md:block hidden">Tecnologo en anàlisis y desarrollo de software, con aptitudes investigativas, resolucion de problemas, diseño de arquitecturas de sofware, desarrollo de aplicaciones de software.</strong>
              <span className="md:hidden block">Tecnologo en anàlisis y desarrollo de software, con aptitudes investigativas, resolucion de problemas, diseño de arquitecturas de sofware, desarrollo de aplicaciones de software.</span>
            </p>

          </div>
          <div className="h-auto  gap-2 flex flex-col">
            <div className=" gradient carrusel first-hover md:py-8 relative rounded-3xl h-auto p-4 md:flex ">
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
            <div className=" gradient rounded-3xl first-hover relative md:py-8 h-auto p-4 md:flex ">
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
          <div className=" h-auto translate-x-[1200px] text w-full gap-2 sm:flex justify-center ">
            <div className=" h-auto sm:w-1/2 p-8 pl-8 flex justify-center items-center rounded-3xl border">
              <p className="lg:text-3xl text-2xl md:text-2xl"><strong>Git</strong></p>
              <img src="git.webp" className="w-12 h-12" alt="" />
            </div>
            <div className=" h-auto sm:w-1/2 p-8 pl-8 md:py-12 flex  justify-center items-center rounded-3xl border">
              <p className="lg:text-3xl text-2xl md:text-2xl"><strong>Tailwindcss</strong></p>
              <img src="tailwind.webp" className="w-12 h-12" alt="" />
            </div>
          </div>
          <div className=" h-auto translate-x-[1200px] text w-full gap-2 sm:flex justify-center ">
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
    )
}