
const ContactForm = () => {
    return (
        <div className="w-full h-auto font-serif bg-black text-black p-10 lg:px-20 xl:px-28 2xl:px-52">
            <form action="https://formspree.io/f/manybyao" method="POST" className="place-items-center border-2 bg-purple-500">
                <div className="flex space-x-12 p-10 ">
                    <input type="text" placeholder="Name" required className="text-sm md:text-lg xl:text-xl 2xl:text-2xl w-48 h-10 md:w-56 lg:w-72 lg:h-10 xl:w-80 xl:h-12 2xl:w-[400px] 2xl:h-16 rounded-md border-2" />
                    <input type="email" name="email" id="email" placeholder="Email" className="text-sm md:text-lg xl:text-xl 2xl:text-2xl w-48 h-10 md:w-56 lg:w-72 lg:h-10 xl:w-80 xl:h-12 2xl:w-[400px] 2xl:h-16 rounded-md border-2" />
                </div>

                <div>
                    <input type="text" placeholder="Subject" className="text-sm md:text-lg xl:text-xl 2xl:text-2xl blockrounded-md w-[425px] h-10 md:w-[500px] lg:w-[625px] lg:h-10 xl:w-[750px] xl:h-12 2xl:w-[850px] 2xl:h-16 mb-10 border-2 rounded-md" />
                    <textarea name="message" id="message" placeholder="Type your Message" required className="text-sm md:text-lg xl:text-xl 2xl:text-2xl block rounded-md w-[425px] h-32 md:w-[500px] lg:w-[625px] lg:h-52 xl:w-[750px] xl:h-60 2xl:w-[850px] 2xl:h-72 border-2"></textarea>
                </div>
                <div className="py-5 lg:py-10">

                    <input type="submit" value="Send Email" className="border-2 block bg-purple-800 rounded-md lg:rounded-lg xl:rounded-xl w-28 h-10 lg:w-40 lg:h-12 lg:text-lg xl:w-60 xl:h-16 xl:text-2xl 2xl:w-72 2xl:h-20 2xl:text-3xl font-extrabold animate-bounce" />
                </div>

            </form>
        </div>
    )

}

export default ContactForm