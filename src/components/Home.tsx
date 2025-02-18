"use client";
import Image from "next/image";
import { useState } from "react";
interface Home {
  titulo: string;
  sub1: string;
  sub2: string;
  boton: string;
}
function Home({t}:{t:Home}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section
      id="home"
      className="h-screen w-full lg:w-2/3 flex flex-col justify-center items-start gap-16 lg:gap-9 px-9 lg:px-16 "
    >
      <div className="flex justify-center items-center gap-3">
        <h1 className="text-[1.75rem] lg:text-h1">{t.titulo}</h1>
        <div
          className={`cursor-pointer ${isHovered ? "animate-wave" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/emojis/wave.png"
            width={35}
            height={35}
            alt="emoji manito"
          />
        </div>
      </div>
      <h2 className="text-[1.75rem] lg:text-h1">
        {t.sub1}{" "}
        <span className="font-bold text-primary-dark dark:text-primary-ligth">
          Royer Bonifacio Julian
        </span>
        {t.sub2}
      </h2>
      <h3 className="flex justify-start items-center gap-3 text-[1.25rm]">
        <Image
          src="/emojis/pointright.png"
          width={20}
          height={20}
          alt="pointright"
        />
        <span>
          <a
            href="./cv.pdf"
            className=" transition duration-200 ease-in-out  hover:text-background px-2 py-2 shadow-email-dark dark:shadow-email hover:shadow-email-hover-dark hover:dark:shadow-email-hover "
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.boton}
          </a>
        </span>
      </h3>
    </section>
  );
}

export default Home;
