import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import customers from '../../../images/customers.png'

const Customers = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 items-center bg-[#EEECFB] md:px-14 pt-5 ">
            <div className="w-full md:w-3/4 flex md:justify-center flex-col items-center md:items-start">

                <div className="text-center md:text-start">
                    <h3 className="text-[#6F42C1] text-2xl subtitle customar_Font">Big Deal</h3>
                    <h2 className="text-5xl font-semibold mt-4"> <span className="text-[#6F42C1] numfont"> 30% </span> Off for New Customers</h2>
                </div>
                <div className="mt-6 flex items-center">
                    <button className="bg-[#8F71E1] text-lg text-white px-6 py-2 rounded-full ">Shop Now</button>
                    <button className="bg-[#8F71E1] text-white px-[9px] py-[9px] rounded-full"> <GoArrowUpRight className="text-xl text-center" /> </button>
                </div>

            </div>

            <div className="w-full md:w-1/3">
                <Image className="w-full h-auto" width={300} height={500} src={customers} alt="customers" />
            </div>
        </div>
    )
}

export default Customers;