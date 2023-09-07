export default function App() {
  return (
    <header className="bg-blue-300 w-screen h-auto relative border border-transparent md:h-screen font-questrial text-2xl">
      <img src="paint.webp" className="absolute md:w-[480px] w-[150px] h-[150px] md:h-[453px] top-[-10px] left-[-10px]" alt="" />
      <div className="p-8 flex justify-end items-center">
        <img src="menu.webp" className="cursor-pointer w-8 h-8 md:w-12 md:h-12 rounded-full hover:bg-gray-300 p-2" alt="" />
      </div>
      <h1 className="mx-auto my-auto px-4 text-center mt-12 md:mt-48 ">
        <span className="block leading-tight ">
          <span className="text-3xl md:text-7xl lg:text-[110px] 2xl:text-[160px]">DESARROLLADOR</span>
        </span>
        <span className="block text-3xl md:text-7xl lg:text-[110px] 2xl:text-[160px]">FRONT-END</span>
      </h1>
      <div className="mt-4 text-xs gap-4 px-4 justify-center md:text-xl 2xl:text-3xl flex ">
        <p>Interactividad</p>
        <p>Diseno</p>
        <p>Rendimiento</p>
      </div>
      <a href="#section-one">
        <img src="down-arrow.webp" className="mx-auto mt-12 md:mt-44 rounded-full hover:bg-gray-300 cursor-pointer p-4 w-12 h-12 md:w-16 md:h-16 " alt="" />
      </a>
    </header>
  )
}