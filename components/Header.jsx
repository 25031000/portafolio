import '../src/output.css';

export default function Header() {
    return (
        <header className=" text-tertiary p-4 w-screen h-[40vh] sm:h-[70vh] flex flex-col justify-center relative  md:h-[80vh] lg:h-screen text-2xl">
            <img className='absolute top-4 left-4 sm:top-10 md:left-10 w-[100px] h-24 md:w-[140px] md:h-[110px] lg:w-[182px] lg:h-[143px]' src="vector-one.svg" alt="" />
            <img className='absolute right-4 sm:right-16 bottom-0 sm:bottom-24 w-[100px] h-24 md:w-[150px] md:h-[110px] lg:w-[208px] lg:h-[151px]' src="vector-two.svg" alt="" />
            <h1 className="lg:text-[150px] tracking-wide md:ml-4 block leading-none md:leading-[103px] py-0 text-5xl text-center sm:text-7xl md:text-8xl">
                <strong >Desarrollador</strong>    
                <strong className='lg:text-[150px]  block text-5xl text-center sm:text-7xl md:text-8xl '>Frontend</strong>
            </h1>
        </header>
    )
}