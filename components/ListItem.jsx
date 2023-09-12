export function ListItemOne() {
    return (
        <li className="p-2 flex justify-around items-center">
            <div className=" py-4 md:w-1/2 grid place-content-center">
                <div className="flex">
                    <img className="pt-[3px] mx-auto md:w-[60px] w-12 h-16 md:h-[60px]" src="html.webp" alt="" />
                    <img className="mx-auto w-[68px] h-[60px]" src="css.webp" alt="" />
                </div>
                <p className="text-center py-4 text-base md:text-xl">HTML / CSS</p>
            </div>
            <div className=" py-4 md:w-1/2 grid place-content-center">
                <img className="mx-auto w-[60px] h-[60px]" src="tailwind.webp" alt="" />
                <p className="text-center py-4 text-base md:text-xl">Tailwindcss</p>
            </div>
        </li>
    )
}

export function ListItemTwo() {
    return (
        <li className="p-2  flex justify-around items-center">
            <div className=" py-4 md:w-1/2 grid place-content-center">
                <div className="flex">
                    <img className="pt-[3px] mx-auto w-[60px] h-[60px]" src="js.webp" alt="" />
                </div>
                <p className="text-center py-4 text-base md:text-xl">Javascript</p>
            </div>
            <div className=" py-4 md:w-1/2 grid place-content-center">
                <img className="mx-auto w-[60px] h-[60px]" src="react.webp" alt="" />
                <p className="text-center py-4 text-base md:text-xl">React.JS</p>
            </div>
        </li>
    )
}

export function ListItemThree() {
    return (
        <li className="p-2 flex justify-around items-center">
            <div className=" py-4 md:w-1/2 grid place-content-center">
                <div className="flex">
                    <img className="pt-[3px] mx-auto w-16 h-16 " src="sq.svg" alt="" />
                </div>
                <p className="text-center md:py-4 text-base md:text-xl">Sqlite</p>
            </div>
            <div className=" py-4 md:w-1/2 grid place-content-center">
                <img className="mx-auto w-[60px] h-[60px]" src="git.webp" alt="" />
                <p className="text-center py-4 text-base md:text-xl">Git</p>
            </div>
        </li>
    )
}