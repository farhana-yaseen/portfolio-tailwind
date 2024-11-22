"use client"
import Image from "next/image"
import Link from "next/link"



export default function Projects() {

    return (

        <div className="bg-black font-serif w-full h-full text-white px-10 md:px-20 lg:px-32 py-10 lg:py-12 xl:py-20">

            <h1 className="bg-purple-500 lg:p-2  2xl:p-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold mb-12 md:mb-16 xl:mb-24 rounded-md">Recent Project</h1>

            <div className="grid grid-cols-2 place-items-center gap-10 md:gap-12 px-5">

                {/* Figma Design cover into Next.js */}
                <div className="flex flex-col space-x-5 border-2 border-purple-500 rounded-md w-28 h-36 md:w-52 md:h-48 lg:w-60 lg:h-52 xl:w-80 xl:h-72">
                    <Link href={"https://first-figma-project-zeta.vercel.app/"} target="_blank">
                        <Image src={"/projects/figma.jpg"} alt={"Figma Design"} width={200} height={200} className="px-auto md:shadow-xl shadow-md shadow-white md:w-60 xl:w-80 object-contain"></Image>
                        <h1 className="text-sm lg:text-lg xl:text-2xl font-bold text-purple-500 text-center mt-2">Figma Design convert into Next.js</h1>
                    </Link>
                </div>

                {/* Resume Builder */}
                <div className="flex flex-col  space-x-5 border-2 border-purple-500 rounded-md w-28 h-36 md:w-52 md:h-48 lg:w-60 lg:h-52 xl:w-80 xl:h-72  ">
                    <Link href={"https://dynamic-resume-weld.vercel.app/"} target="_blank">
                        <Image src={"/projects/resume.jpg"} alt={"Online Resume Builder"} width={200} height={200} className="px-auto md:shadow-xl shadow-md shadow-white md:w-60 xl:w-80 object-contain"></Image>
                        <h1 className="text-sm lg:text-lg xl:text-2xl font-bold text-purple-500 text-center mt-2">Online Resume Builder</h1>
                    </Link>
                </div>

                {/* Countries */}
                <div className="flex flex-col space-x-5 border-2 border-purple-500 rounded-md w-28 h-36 md:w-52 md:h-48 lg:w-60 lg:h-52 xl:w-80 xl:h-72">
                    <Link href={"https://assignment2-eight-jade.vercel.app/"} target="_blank">
                        <Image src={"/projects/countries.jpg"} alt={"countries detail"} width={200} height={200} className="px-auto md:shadow-xl shadow-md shadow-white md:w-60 xl:w-80  object-contain"></Image>
                        <h1 className="text-sm lg:text-lg xl:text-2xl font-bold text-purple-500 text-center mt-2 ">Countries Detail with National Flags</h1>
                    </Link>
                </div>

                {/* Personal Resume */}
                <div className="flex flex-col space-x-5 border-2 border-purple-500 rounded-md w-28 h-36 md:w-52 md:h-48 lg:w-60 lg:h-52 xl:w-80 xl:h-72">
                    <Link href={"https://personal-resume-zeta-woad.vercel.app/"} target="_blank">
                        <Image src={"/projects/cv.jpg"} alt={"Personal Resume"} width={200} height={200} className="px-auto md:shadow-xl shadow-md shadow-white md:w-60 xl:w-80 object-contain"></Image>
                        <h1 className="text-sm lg:text-lg xl:text-2xl font-bold text-purple-500 text-center mt-2">Personal Resume</h1>
                    </Link>
                </div>

            </div>
        </div>

    )
}



