import '../src/output.css'

export default function Grid(params) {
    return(
      <section className='w-full h-auto md:h-[90vh] gap-8  grid md:grid-cols-2 p-4'>
        <div className='w-full md:w-1/2  text-center flex flex-col justify-center'>
          <h4 className='text-base md:text-3xl '>Analisis y desarrollo de software</h4>
          <img src="user-illustration.png" width={176} height={176} className='mx-auto my-2 ' alt="" />
          <p className='w-full md:w-[400px] mx-auto mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo molestias quam quas sit tempora odit earum voluptates ipsa. Blanditiis, ratione ducimus maxime nisi tempore corrupti ea temporibus minima asperiores?</p>
          <button className='w-full md:w-36 py-4 text-center  mx-auto rounded-lg bg-secondary text-primary'>Contactame</button>
        </div>
        <div className='w-full md:w-1/2  text-center flex flex-col justify-center'>
          <h4 className='text-base md:text-3xl'>Fundamentos de programacion</h4>
          <img src="blocks.png" width={176} height={176} className='mx-auto my-2' alt="" />
          <p className='w-full md:w-[400px] mx-auto mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo molestias quam quas sit tempora odit earum voluptates ipsa. Blanditiis, ratione ducimus maxime nisi tempore corrupti ea temporibus minima asperiores?</p>
          <button className='w-full md:w-36 py-4 text-center mx-auto rounded-lg bg-alternative text-secondary border-2 border-secondary'>Sobre mi</button>
        </div>
      </section>       
    )
}