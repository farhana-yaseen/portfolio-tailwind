

import AboutUs from "@/components/About";
import HomePage from "@/components/HomePage";
import ContactUs from "./contact/page";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="bg-black">
      <HomePage/>
      <div className="w-full border-2 border-dashed border-purple-500 bg-black"></div>
      <AboutUs/>
      <div className="w-full border-2 border-dashed border-purple-500 bg-black"></div>
      <Skills/>
      <div className="w-full border-2 border-dashed border-purple-500 bg-black"></div>
      <Projects/>
      <div className="w-full border-2 border-dashed border-purple-500 bg-black"></div>
      <ContactUs/>
    </div>
  );
}
