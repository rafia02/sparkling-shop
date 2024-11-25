'use client'
import { SetStateAction, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../../images/image 9.png'
import img2 from '../../../images/image2.png'
import img3 from '../../../images/image3.png'
import img4 from '../../../images/image1.png'
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import { BiMinus } from "react-icons/bi";
import Comments from "@/components/comments";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Hero from "@/components/ui/home/hero";




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};






const ProductDetailsPage = () => {


  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const thumbnails = [
    img1,
    img2,
    img3,
    img4,
  ];

  const handleThumbnailClick = (index: SetStateAction<number>) => {
    setSelectedThumbnail(index);
  };


  const [quantity, setQuantity] = useState(1);





  return (
    <div className="px-5 md:px-8 mb-40">
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-8">
        {/*f coloumn carousel */}
        <div>
          <div className="">
            <div className="h-[328px] md:h-[460px] rounded bg-bgcolor">
              <Image
                src={thumbnails[selectedThumbnail]}
                height={50}
                width={500}
                alt="Main Image"
                className="h-full"
              // className="w-full h-96 object-cover"
              />
            </div>

            <div className=" mt-5">
              <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true}
                infinite={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"desktop"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px mx-1 gap-1"
              >
                {thumbnails.map((thumbnail, index) => (
                  <Image
                    key={index}
                    height={100}
                    width={100}
                    src={thumbnail}
                    alt={`Thumbnail ${index}`}
                    className={` w-32 h-28 rounded-xl cursor-pointer  ${selectedThumbnail === index
                      ? "bg-[#E0DCF8]"
                      : "bg-[#ECE9FE]"
                      }`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </Carousel>
            </div>
          </div>




        </div>

        {/* 2nd coloumn */}
        <div>
          <div>
            <span className="text-white py-2 text-lg rounded-[2px] px-8 bg-[#2F1C59]">New Arrival</span>
            <h1 className="text-[33px] mt-5 font-semibold">
              White Hoodie
            </h1>
            <div className="flex gap-[6px] mt-4 items-center">
              <FaStar className="text-[#FFCF11] text-[24px]"></FaStar>
              <FaStar className="text-[#FFCF11] text-[24px]"></FaStar>
              <FaStar className="text-[#FFCF11] text-[24px]"></FaStar>
              <FaStar className="text-[#FFCF11] text-[24px]"></FaStar>
              <FaStar className="text-[#DFDFDF] text-[24px]"></FaStar>
              <p>(4.0)</p>
              <p className="text-textBlue pl-3">121 reviews</p>

            </div>
            <h1 className="text-[28px] font-semibold mt-5 border-b pb-4">BDT 2500 </h1>
          </div>

          {/* size  */}

          <div className="">
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-6 gap-6 md:gap-10">
                <div>
                  <p className="font-semibold text-xl">Available Size</p>
                  <div className="flex  gap-4 mt-4">
                    <button className="focus:border-2 focus:border-textBlue bg-bgcolor text-lg w-10 h-10 rounded-md">
                      S
                    </button>
                    <button className="focus:border-2 bg-bgcolor border-textBlue text-lg w-10 h-10 rounded-md">
                      M
                    </button>
                    <button className="focus:border-2 bg-bgcolor border-textBlue text-lg w-10 h-10 rounded-md">
                      L
                    </button>
                    <button className="focus:border-2 bg-bgcolor border-textBlue text-lg w-10 h-10 rounded-md">
                      XL
                    </button>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-xl">Available Color</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-3">
                      <button className=" border-[1.3px] border-textBlue bg-bgcolor  w-6 h-6 rounded-full"></button>
                      <p>Off White</p>
                    </div>
                    <button className=" bg-black  w-4 h-4 rounded-full"></button>
                  </div>
                </div>
              </div>
              {/* <p className="text-rose-600 my-5">It is 7 pice available</p> */}

              <div className="mt-5">
                <label className="text-lg">Quentity</label>
                <div className="flex bg-[#ECE9FE] items-center justify-between px-3 w-32 py-2 mt-2 rounded-full">
                  <BiMinus onClick={() => setQuantity(quantity - 1)}></BiMinus>
                  <span className="text-lg">{quantity}</span>
                  <PiPlus onClick={() => setQuantity(quantity + 1)}></PiPlus>
                </div>
              </div>



              <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-4 md:gap-8">
                <button className="w-full px-10 rounded-lg py-[6px] border-2 text-[16px] border-[#7E53D4] bg-[#7E53D4] tracking-wide text-white">
                  Buy Now
                </button>
                <button className="w-full px-10 rounded-lg py-[6px] border-2 text-[16px] hover:bg-[#5C36A1] duration-500 border-[#7E53D4] tracking-wide hover:text-white">
                  Add to cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* review  */}
      <div className="mt-16 ">
        <div className="md:text-xl flex justify-between md:justify-start md:gap-20 tracking-wide text-[#747474]">
          <p>Details</p>
          <p className="text-textBlue">Review & Rating</p>
          <p>Discussion </p>
        </div>
        <Comments></Comments>
      </div>

      {/* product card  */}
      <div className="mt-32">
        {/* <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl tracking-normal">Related Products</h1>
          <div className="flex space-x-4 items-center justify-center">

            <button
              className="flex items-center justify-center w-9 border-2 border-[#7E53D4] h-9 rounded-full hover:text-white hover:bg-[#7E53D4] text-[#7E53D4] transition-all duration-300"
              aria-label="Left Arrow"
            >
              <FiArrowLeft className="w-6 h-6" />
            </button>


            <button
              className="flex items-center justify-center w-9 border-2 border-[#7E53D4] h-9 rounded-full hover:text-white hover:bg-[#7E53D4] text-[#7E53D4] transition-all duration-300"
              aria-label="Right Arrow"
            >
              <FiArrowRight className="w-6 h-6" /> 
            </button>
          </div>
        </div> */}

        <Hero title="Related Products"></Hero>

        <div className="text-center">
          <button className=" px-10 rounded-lg py-2 border text-[17px] divide-purple-300 hover:bg-[#6F42C1] duration-500 bg-[#7E53D4] tracking-wide text-white">
            See more
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage