import Link from "next/link";

const Navbar = () => {

    return <div className={`-mt-4 lg:-translate-x-4 lg:fixed lg:top-0 lg:mt-8 z-50 max-w-[1200px] backdrop-blur-sm w-full rounded-3xl px-6 py-5 flex justify-between items-center bg-[#001A6E]`}>
        <Link href={"/"} className={`text-base md:text-xl lg:text-2xl text-white font-bold`}>
            Tri State Community Services
        </Link>
        <div className={`px-2 lg:px-8 py-2 rounded-xl bg-white  font-semibold
        `}>
        </div>
    </div>
}

export default Navbar;