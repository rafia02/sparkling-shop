import React, { useState } from 'react'
import img1 from "../images/review.png"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'

const Comments = () => {
    const [comments, setComments] = useState([
        { id: 1, username: 'Cameron Williamvvvson', image: img1, comment: 'Very nice!!' },
        { id: 2, username: 'Cameron Williamvvvson', image: img1, comment: 'Thanks for sharing!' },
        { id: 3, username: 'Cameron Williamvvvson', image: img1, comment: 'Amazing content!' },
    ])

    const ratings = [
        { stars: 5, count: 50 },
        { stars: 4, count: 5 },
        { stars: 3, count: 10 },
        { stars: 2, count: 30 },
        { stars: 1, count: 2 },
    ];

    const totalRatings = ratings.reduce((acc, rating) => acc + rating.count, 0);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-32 mt-14 justify-between">
            {/*review fst  */}
            <div className='md:w-7/12'>
                <div className="w-full">
                    <select
                        className="border-[1.5px] outline-none px-5 py-[10px] border-textBlue rounded bg-white text-gray-700"
                    >
                        <option value="Newest">Newest</option>
                        <option value="Older">Older</option>
                    </select>
                </div>
                <ul className="grid grid-cols-1 gap-7 mt-8">
                    {comments.map((review) => (
                        <div className='border-b pb-7' key={review.id}>
                            <li className=" flex items-start">
                                {/* Profile Image */}
                                <Image
                                    src={review.image}
                                    height={100}
                                    width={100}
                                    alt={review.username}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    {/* Username */}
                                    <div className='flex items-center gap-3'>
                                        <h3 className="text-[17px] text-gray-800">{review.username}</h3>
                                        <p className='text-sm text-gray-500'>3 days</p>
                                    </div>
                                    {/* Comment */}
                                    <div className="flex gap-1 mt-[5px] text-[22px] items-center">
                                        <FaStar className="text-[#FFCF11]"></FaStar>
                                        <FaStar className="text-[#FFCF11]"></FaStar>
                                        <FaStar className="text-[#FFCF11]"></FaStar>
                                        <FaStar className="text-[#FFCF11]"></FaStar>
                                        <FaStar className="text-[#DFDFDF]"></FaStar>
                                    </div>
                                </div>
                            </li>

                            <p className="font-semibold text-gray-600 mt-4">{review.comment}</p>
                            <div className='flex items-center gap-[3px]'>
                                <AiOutlineLike></AiOutlineLike>
                                <span className='text-sm'>10</span>
                            </div>
                        </div>


                    ))}
                </ul>
            </div>

            {/* progress 2nd  */}
            <div className='md:w-5/12'>
                <div className="flex gap-[3px] text-[17px] -tracking-normal items-center">
                    <p>Product Review</p>
                    <p className="text-textBlue pl-3">121 reviews</p>

                </div>

                <div className='flex justify-between border-gray-300 border-dotted border-b  mt-4 pb-5 items-center'>
                    <div className="flex gap-2 text-4xl items-center">
                        <FaStar className="text-[#FFCF11]"></FaStar>
                        <FaStar className="text-[#FFCF11]"></FaStar>
                        <FaStar className="text-[#FFCF11]"></FaStar>
                        <FaStar className="text-[#FFCF11]"></FaStar>
                        <FaStar className="text-[#DFDFDF]"></FaStar>

                    </div>
                    <p className='text-xl'>(4.0)</p>
                </div>

                <div className="space-y-3 mt-6">
                    {ratings.map((rating) => {
                        const percentage = Math.round((rating.count / totalRatings) * 100);

                        return (
                            <div key={rating.stars} className="flex items-center space-x-2">
                                {/* Star Label */}
                                <span className="text-[17px] text-gray-700">
                                    {rating.stars}
                                </span>

                                {/* Progress Bar */}
                                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#FFCF11]"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>

                                {/* Percentage */}
                                <span className="text-sm font-medium text-gray-700">
                                    {percentage}%
                                </span>
                            </div>
                        );
                    })}
                </div>


            </div>
        </div>
    )
}

export default Comments