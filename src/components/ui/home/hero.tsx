// import Image from "next/image"
// import img1 from '../../../images/icon (1).png'
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";



// const Hero = () => {



//   const products = [
//     { name: "Indian Sharee", price: "BDT 2,300", image: img1 },
//     { name: "Indian Sharee", price: "BDT 3,500", image: img1 },
//     { name: "Indian Sharee", price: "BDT 2,800", image: img1 },
//     { name: "Indian Sharee", price: "BDT 4,000", image: img1 },
//     { name: "Indian Sharee", price: "BDT 4,100", image: img1 },
//     { name: "Indian Sharee", price: "BDT 4,500", image: img1 },
//   ];




//   return (
//     <div>
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl md:text-3xl tracking-normal">Related Products</h1>
//         <div className="flex space-x-4 items-center justify-center">

//           <button
//             className="flex items-center justify-center w-9 border-2 border-[#7E53D4] h-9 rounded-full hover:text-white hover:bg-[#7E53D4] text-[#7E53D4] transition-all duration-300"
//             aria-label="Left Arrow"
//           >
//             <FiArrowLeft className="w-6 h-6" />
//           </button>


//           <button
//             className="flex items-center justify-center w-9 border-2 border-[#7E53D4] h-9 rounded-full hover:text-white hover:bg-[#7E53D4] text-[#7E53D4] transition-all duration-300"
//             aria-label="Right Arrow"
//           >
//             <FiArrowRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>



//       <div className="mt-8">
//         <div className="grid grid-cols-4 gap-5">

//           {
//             products.map(p => <div key={p.price} className="">
//               <Image className="bg-bgcolor w-full h-auto" src={p.image} height={50} width={500} alt=""></Image>
//               <div className="px-3 py-5">
//                 <div className=" flex gap-1 items-center tracking-wide justify-between">
//                   <p className="text-[17px] text-gray-500">{p.name}</p>
//                   <p className="text-xl text-gray-600 font-semibold">{p.price}</p>
//                 </div>
//                 <button className="w-full px-10 mt-5 rounded-[7px] py-[7px] border text-[16px] hover:bg-[#6F42C1] duration-500 border-[#7E53D4] tracking-wide hover:text-white">
//                   Add to cart
//                 </button>
//               </div>
//             </div>)
//           }



//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero



"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../../../images/icon (1).png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Hero = ({title}) => {
  const products = [
    { id: 1, name: "Indian Sharee", price: "BDT 2,300", image: img1 },
    { id: 2, name: "Indian Sharee", price: "BDT 3,500", image: img1 },
    { id: 3, name: "Indian Sharee", price: "BDT 2,800", image: img1 },
    { id: 4, name: "Indian Sharee", price: "BDT 4,000", image: img1 },
    { id: 5, name: "Indian Sharee", price: "BDT 4,100", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,500", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,600", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,700", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,800", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,900", image: img1 },
    { id: 6, name: "Indian Sharee", price: "BDT 4,200", image: img1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive logic
  const updateItemsPerPage = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerPage(4);
      else if (width >= 768) setItemsPerPage(3);
      else setItemsPerPage(1);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalItems = products.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= totalItems ? totalItems - itemsPerPage : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 < 0 ? 0 : prevIndex - 2));
  };

  return (
    <div className="mb-10">
      <div className="overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl tracking-normal">{title}</h1>
          <div className="flex space-x-4 items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-9 border-2 border-[#7E53D4] h-9 rounded-full transition-all duration-300 ${currentIndex === 0
                  ? "text-gray-300 border-gray-300 cursor-not-allowed"
                  : "hover:text-white hover:bg-[#7E53D4] text-[#7E53D4]"
                }`}
              aria-label="Left Arrow"
            >
              <FiArrowLeft className="w-6 h-6" />
            </button>
            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= totalItems}
              className={`flex items-center justify-center w-9 border-2 border-[#7E53D4] h-9 rounded-full transition-all duration-300 ${currentIndex + itemsPerPage >= totalItems
                  ? "text-gray-300 border-gray-300 cursor-not-allowed"
                  : "hover:text-white hover:bg-[#7E53D4] text-[#7E53D4]"
                }`}
              aria-label="Right Arrow"
            >
              <FiArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative mt-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
              width: `${(totalItems / itemsPerPage) * 100}%`,
            }}
          >
            {products.map((p) => (
              <div
                key={p.price}
                className={`flex-none w-[302px] px-2 ${itemsPerPage === 4
                    ? "w-1/4"
                    : itemsPerPage === 3
                      ? "w-1/3"
                      : "w-full"
                  }`}
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <Image
                    className="bg-bgcolor w-full h-auto"
                    src={p.image}
                    height={150}
                    width={500}
                    alt={p.name}
                  />
                  <div className="px-3 py-5">
                    <div className="flex gap-1 items-center tracking-wide justify-between">
                      <p className="text-[17px] text-gray-500">{p.name}</p>
                      <p className="text-xl text-gray-600 font-semibold">{p.price}</p>
                    </div>
                    <button className="w-full px-10 mt-5 rounded-[7px] py-[7px] border text-[16px] hover:bg-[#6F42C1] duration-500 border-[#7E53D4] tracking-wide hover:text-white">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




