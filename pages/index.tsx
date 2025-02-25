import Header from "@/components/common/Header";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Experience";
import Home from "@/components/ui/Home";
import LeftSidebar from "@/components/ui/LeftSidebar";
import Project from "@/components/ui/Project";
import RightSidebar from "@/components/ui/RightSidebar";
import Head from "next/head";
import Image from "next/image";
import favicon from "@/public/favicon.ico"
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [])

  return (
    <>
      <Head>
    <title>Awais Ali</title>
    <meta property="og:title" content="Azeem Aleem" key="title" />
    <link rel="icon" href="favicon.png" />
</Head>

      {!isLoading && <>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <main className={`max-w-6xl md:w-[80%] w-full mx-auto md:px-0 px-3`}>
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
      </>
      }
        
      {/*    Page Load Animation    */}
      <div className={`${isLoading ? 'bg-black/40 backdrop-blur-lg' : 'bg-transparent -translate-y-full backdrop-blur-0'} transform transition-all duration-700  ease-in-out backdrop-filter fixed top-0 left-0 h-full w-full flex justify-center items-center z-50`}>
        <div className="flex flex-col items-center w-max ">
          <div className="min-h-[55px] w-full overflow-hidden">
            <h1 className="heading text-center lg:text-5xl md:text-4xl text-3xl font-bold text-LightestSlate transform translate-y-full lg:mt-2 md:mt-4 mt-6">Awais Ali</h1>
          </div>
          <div className="loading-bar h-0.5 bg-LightestSlate rounded-md my-1"></div>
          <div className="min-h-[30px] w-full overflow-hidden">
            <p className="sub-heading text-center lg:text-xl md:text-lg text-[15px] uppercase font-smeibold transform -translate-y-full text-primary">Frontend Web Developer
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
