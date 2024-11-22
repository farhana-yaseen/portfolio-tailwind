"use client"
import Image from "next/image"



export default function Skills() {

    return (

        <div className="bg-black font-serif w-full h-full text-white">
    
                <div className="p-10 md:p-16 lg:p-20 px-10 md:px-20 lg:px-32">
                    
                <h1 className="bg-purple-500 lg:p-2 2xl:p-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold mb-10 lg:mb-12 xl:mb-16 rounded-md ">Personal Skills</h1>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                {/* Ms-Office */}
                <div className="p-5 flex flex-col justify-center items-center space-y-5 ">
                <Image src={"/skills/msoffice.png"} alt={"MS Office Logo"} width={100} height={100} className="px-auto md:shadow-xl shadow-md shadow-white w-16 h-16 md:w-20 md:h-20 object- lg:w-24 lg:h-24 xl:w-32 xl:h-32 contain"></Image>
                <h1 className="text-base md:text-lg xl:text-2xl font-bold">Ms.Office</h1>
                </div>

                {/* Photoshop */}
                <div className="p-5 flex flex-col justify-center items-center space-y-5 ">
                <Image src={"/skills/adobe.png"} alt={"Photoshop Logo"} width={100} height={100} className="px-auto md:shadow-xl shadow-md shadow-white w-16 h-16 md:w-20 md:h-20 object- lg:w-24 lg:h-24 xl:w-32 xl:h-32 contain"></Image>
                <h1 className="text-base md:text-lg xl:text-2xl font-bold" >Photoshop</h1>
                </div>

                {/* HTML */}
                <div className="p-5 flex flex-col justify-center items-center space-y-5 ">
                <Image src={"/skills/html.png"} alt={"HTML Logo"} width={100} height={100} className="px-auto md:shadow-xl shadow-md shadow-white w-16 h-16 md:w-20 md:h-20 object- lg:w-24 lg:h-24 xl:w-32 xl:h-32 contain"></Image>
                <h1 className="text-base md:text-lg xl:text-2xl font-bold" >HTML</h1>
                </div>

                {/* CSS */}
                <div className="p-5 flex flex-col justify-center items-center space-y-5 ">
                <Image src={"/skills/css.png"} alt={"CSS Logo"} width={100} height={100} className="px-auto md:shadow-xl shadow-md shadow-white w-16 h-16 md:w-20 md:h-20 object- lg:w-24 lg:h-24 xl:w-32 xl:h-32 contain"></Image>
                <h1 className="text-base md:text-lg xl:text-2xl font-bold" >CSS</h1>
                </div>

                 {/* Tailwind CSS */}
                 <div className="p-5  flex flex-col justify-center items-center space-y-5 ">
                <Image src={"/skills/tailwind.png"} alt={"Tailwind Logo"} width={100} height={100} className="px-auto md:shadow-xl shadow-md shadow-white w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32  object-contain"></Image>
                <h1 className="text-base md:text-lg xl:text-2xl font-bold" >Tailwind CSS</h1>
                </div>

                {/* Typescript */}
                <div className="p-5 flex flex-col justify-center items-center space-y-5 ">
                <Image src={"/skills/ts.png"} alt={"Typescript Logo"} width={100} height={100} className="px-auto md:shadow-xl shadow-md shadow-white w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32  object-contain"></Image>
                <h1 className="text-base md:text-lg xl:text-2xl font-bold" >Typescript</h1>
                </div>

                {/* Next.js */}
                <div className="p-5 flex flex-col justify-center items-center space-y-5 ">
                <Image src={"/skills/next.jpg"} alt={"Next.js Logo"} width={100} height={100} className="px-auto md:shadow-xl shadow-md shadow-white w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32  object-contain"></Image>
                <h1 className="text-base md:text-lg xl:text-2xl font-bold" >Next.js</h1>
                </div>

                </div>
            

            </div>







        </div>


    )
}



