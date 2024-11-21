import Link from "next/link"
import Image from "next/image"


export default function Footer() {

    return (
        <div className="py-10 bg-white w-full h-12 lg:h-16 xl:h-24">
            <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center mb-3 font-bold">Copyright © 2024 All rights reserved </p>

            <div className="flex justify-center items-center  md:space-x-8 space-x-5 xl:py-5">
                <Link href={"https://www.facebook.com/"} target="_blank">
                    <Image src={"/footer/facebook.png"} alt="fb" width={100} height={100} className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 object-contain"></Image>
                </Link>

                <Link href={"https://www.instagram.com/"} target="_blank">
                    <Image src={"/footer/insta.png"} alt="insta" width={100} height={100} className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 object-contain"></Image>
                </Link>

                <Link href={"https://studio.youtube.com/channel/UC5tu9PKMlOFQMhBtxBtoPHg"} target="_blank">
                    <Image src={"/footer/youtube.png"} alt="youtube" width={100} height={100} className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 object-contain"></Image>
                </Link>

                <Link href={"https://pk.linkedin.com/"} target="_blank">
                    <Image src={"/footer/linkedin.jpg"} alt="linkedin" width={100} height={100} className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 object-contain"></Image>
                </Link>
            </div>

        </div>



    )
}
