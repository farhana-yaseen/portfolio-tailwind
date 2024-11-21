"use client"
import Image from "next/image"
import Typewriter from 'typewriter-effect';



export default function Home() {

    return (

        <div className="text-black font-serif w-full h-full">

            <div className="flex items-center">

                {/* Left content (Image + Typewriter Effect) */}
                <div className="w-full h-screen bg-black p-3 lg:p-5 2xl:p-10">

                    {/* Purple circle */}
                    <div className="mb-10 md:mb-5 2xl:mb-10">
                        <Image src={"/purple.png"} alt="purple circle" width={100} height={100} className="md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52 2xl:w-72 2xl:h-72 opacity-60 "></Image>
                    </div>

                    <h1 className="text-purple-500 text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl text-center font-bold ">Hi Everyone.</h1>

                    {/* Typewriter Effect */}
                    <div className="text-white font-bold text-6xl md:text-7xl xl:text-7xl 2xl:text-9xl p-8 md:p-5 lg:p-5 xl:p-12 2xl:p-16 text-center leading-relaxed max-w-full h-32 lg:h-20 xl:h-28 mb-10 lg:mb-8 2xl:mb-20">
                        <Typewriter
                            options={{
                                strings: ['I am Farhana'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    {/* Web Developer badge */}
                    <div className=" text-center bg-purple-500 mt-32 md:mt-28 lg:mt-20 2xl:mt-60 w-60 lg:w-80 xl:w-96 2xl:w-[500px] 2xl:p-5 lg:p-3 p-2 mx-auto rounded-md lg:rounded-lg">
                        <h1 className="bg-black p-2 text-purple-500 lg:p-2 2xl:p-6 font-bold text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Web Developer</h1>
                    </div>

                    {/* Purple circle */}
                    <div className=" flex justify-end my-5 ">
                        <Image src={"/purple.png"} alt="purple circle" width={100} height={100} className="md:w-32 md:h-32 opacity-60 lg:w-40 lg:h-40 xl:w-52 xl:h-52 2xl:w-72 2xl:h-72"></Image>
                    </div>
                </div>

                {/* Right content (Portfolio Section) */}
                <div className="bg-purple-500 w-80 lg:w-[400px] xl:w-[500px] 2xl:w-1/2 h-screen flex items-center flex-col space-y-20 py-10 ">
                    <h1 className=" text-3xl sm:text-2xl md:text-3xl text-center lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ">Portfolio</h1>
                    {/* Profile Picture*/}
                    <div className="flex justify-center items-center">
                        <Image src={"/profileImg.jpg"} alt={"Profile Picture"} width={200} height={200} className="md:shadow-xl shadow-lg shadow-white w-40 h-40 lg:w-60 lg:h-60 xl:w-72 xl:h-72 2xl:w-96 2xl:h-96 rounded-full object-cover"></Image>
                    </div>
                </div>
            </div>





        </div>


    )
}



