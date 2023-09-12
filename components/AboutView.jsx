import { useLayoutEffect } from 'react';
import '../src/output.css';
import { useRef } from 'react';


export default function AboutView(params) {

    const content = useRef();


    useLayoutEffect(() => {
        let body = document.body;
        body.style.overflowX = "hidden";
        let ctx = gsap.context(() => {
            // use scoped selectors
            gsap.registerPlugin(ScrollTrigger);

            let sections = gsap.utils.toArray(".panel");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".cont",
                    ease: "power2",
                    delay: "none",
                    pin: true,
                    scrub: 3,
                    snap: 1 / (sections.length - 1),
                    // base vertical scrolling on how wide the cont is so it feels more natural.
                    end: () => "+=" +
                        document.querySelector(".cont").offsetWidth
                }
            });

        }, content);

        return () => ctx.revert();
    })
    return (

        <main ref={content} className="md:flex h-screen relative font-questrial md:w-[200%] cont">
            <section className="  h-full w-full md:flex relative panel">
                <img src="menu.webp" className="cursor-pointer w-24 h-24 rounded-md  z-10 p-2 absolute top-8 right-4 md:top-8 md:right-8 hover:bg-gray hover:bg-opacity-40" alt="" />
                <div className="md:w-1/2 md:p-8  h-full flex flex-col justify-center">
                    <h2 className="p-4 text-2xl sm:text-3xl md:text-6xl  ">Entusiasta en la<span className="text-secondary"> creaciòn</span> de escenarios informativos, interactivos y divertidos</h2>
                    <p className="text-base md:text-2xl p-4  ">Creo firmemente en la estetica y usabilidad
                        en proyectos de alto valor, generando un
                        impacto atractivo y facil de usar.Desarrollando productos excepcionales con
                        interfaces llamativas, elegantes y minimalistas.</p>
                    <button className="text-base btn-shadow bg-tertiary text-primary md:text-xl py-4 px-8 mx-auto mt-8 flex justify-center text-center md:w-[45%] md:hidden"><a href="#">Proyectos</a></button>
                </div>
                <div className="md:w-1/2 md:flex justify-center items-center relative hidden">
                    <img src="photo-one.webp" className="p-2 w-80 h-[639px] object-cover" alt="" />
                </div>
            </section>
            <section className="w-full md:flex hidden panel">
                <img src="menu.webp" className="cursor-pointer w-24 h-24 rounded-md  z-10 p-2 absolute top-8 right-4 md:top-8 md:right-8 hover:bg-gray hover:bg-opacity-40" alt="" />
                <div className='p-2 w-4/5 flex flex-col justify-center h-auto'>
                    <h2 className='text-[110px] leading-tight p-2 ml-20 '>Desarrollador Frontend</h2>
                    <div className='w-full  p-2'>
                        <p className='text-lg  w-96 p-2 ml-20 mt-8'>Mi nombre es Juan Camilo, me dedico al desarrollo de software, llevando a cabo soluciones informaticas de gran impacto en entornos empresariales y organizacionales.</p>
                    </div>
                    <div className='w-full  flex justify-end p-2'>
                        <p className='text-lg  w-96 p-2 mr-8'>Mi objetivo es impactar con diseños excepcionales acompañados de contenido altamente valioso con el fin de implementar programas informaticas intuitivos  y eficacez.</p>
                    </div>

                </div>
                <div className='w-16'>
                    <img src="sky.png" className='w-full object-cover h-full' alt="" />
                </div>
            </section>

        </main>
    )
}
