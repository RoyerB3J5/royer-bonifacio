import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { FiGithub } from "react-icons/fi";
import InternetIcon from "./InternetIcon";

interface Project {
  titulo: string;
  parr: string;
}

interface Projects {
  titulo: string;
  cafeteria: Project;
  hotel: Project;
  diodos: Project;
  carwash: Project;
  ciclo: Project;
}
function Proyects({
  t
}:{
  t: Projects
}) {
 
  return (
    <section
      id="proyects"
      className="px-9 lg:px-16 flex flex-col justify-start items-start  py-16 gap-16 lg:gap-8 "
    >
      <div className="w-full lg:w-1/2 flex  flex-col items-center gap-6 ">
        <SectionHeader titulo={t.titulo} />
      </div>
      <div className="border-b-2 border-t-2 rounded-md md:border-0 border-primary-dark dark:border-primary-ligth relative w-full px-7 sm:px-2 py-10 flex flex-col md:flex-row justify-around items-center gap-8 lg:gap-20">
        <div className="flex flex-col justify-center items-start relative z-20 gap-6 w-full md:w-auto">
          <h3 className="text-[1.4rem] font-medium hover:text-primary-dark hover:dark:text-primary-ligth cursor-pointer transition-all">
            {t.cafeteria.titulo}
          </h3>
          <div className="shadow-sm shadow-primary-dark dark:shadow-primary-ligth py-4 px-4 md:w-[400px] text-start rounded-md w-full">
            <p>
              {t.cafeteria.parr}
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <ul className="flex justify-center items-center gap-6 text-[12px]">
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
            </ul>
            <div className="flex justify-center items-center gap-6">
              <a href="https://github.com/RoyerB3J5/cafeteria">
                <FiGithub
                  className="size-6 
                      hover:text-primary-dark hover:dark:text-primary-ligth  cursor-pointer hover:-translate-y-1 transition-all "
                  strokeWidth={2}
                />
              </a>
              <a href="https://rb-coffee-seven.vercel.app/">
                <InternetIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-lg cursor-pointer">
          <Image
            src="/cafeteria.webp"
            width={550}
            height={350}
            alt="Hotel"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-primary-dark opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-md"></div>
        </div>
      </div>
      <div className="border-b-2 border-t-2 rounded-md md:border-0 border-primary-dark dark:border-primary-ligth relative w-full px-7 sm:px-2 py-10 flex flex-col md:flex-row justify-around items-center gap-8 lg:gap-20">
        <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-lg cursor-pointer">
          <Image
            src="/hotel.png"
            width={550}
            height={350}
            alt="Hotel"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-primary-dark dark:bg-primary-ligth opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-md"></div>
        </div>
        <div className="flex flex-col justify-center items-end relative z-20 gap-6 w-full md:w-auto">
          <h3 className="text-[1.4rem] font-medium hover:text-primary-dark hover:dark:text-primary-ligth cursor-pointer transition-all">
            {t.hotel.titulo}
          </h3>
          <div className="shadow-sm shadow-primary-dark dark:shadow-primary-ligth py-4 px-4 md:w-[400px] text-end rounded-md w-full">
            <p>
              {t.hotel.parr}
            </p>
          </div>

          <div className="flex flex-col justify-center items-end gap-4">
            <ul className="flex justify-center items-center gap-6 text-[12px]">
              <li>NextJS</li>
              <li>Supabase</li>
              <li>TailwindCSS</li>
            </ul>
            <a href="https://github.com/RoyerB3J5/Hotel-manager">
              <FiGithub
                className="size-6 
                      hover:text-primary-dark hover:dark:text-primary-ligth  cursor-pointer hover:-translate-y-1 transition-all "
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-t-2 rounded-md md:border-0 border-primary-dark dark:border-primary-ligth relative w-full px-7 sm:px-2 py-10 flex flex-col md:flex-row justify-around items-center gap-8 lg:gap-20">
        <div  className="flex flex-col justify-center items-start relative z-20 gap-6 w-full md:w-auto">
          <h3 className="text-[1.4rem] font-medium hover:text-primary-dark hover:dark:text-primary-ligth cursor-pointer transition-all">
            {t.diodos.titulo}
          </h3>
          <div className="shadow-sm shadow-primary-dark dark:shadow-primary-ligth py-4 px-4 md:w-[400px] text-start rounded-md w-full">
            <p>
              {t.diodos.parr}
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <ul className="flex justify-center items-center gap-6 text-[12px]">
              <li>React</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>TailwindCSS</li>
            </ul>
            <div className="flex justify-center items-center gap-6">
              <a href="https://github.com/RoyerB3J5/backend-diodos">
                <FiGithub
                  className="size-6 
                      hover:text-primary-dark hover:dark:text-primary-ligth  cursor-pointer hover:-translate-y-1 transition-all "
                  strokeWidth={2}
                />
              </a>
              <a href="https://backend-diodos-1.onrender.com/">
                <InternetIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-lg cursor-pointer">
          <Image
            src="/diodos.png"
            width={550}
            height={350}
            alt="Hotel"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-primary-dark opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-md"></div>
        </div>
      </div>
      <div className="border-b-2 border-t-2 rounded-md md:border-0 border-primary-dark dark:border-primary-ligth relative w-full px-7 sm:px-2 py-10 flex flex-col md:flex-row justify-around items-center gap-8 lg:gap-20">
        <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-lg cursor-pointer">
          <Image
            src="/carwash.jpg"
            width={550}
            height={300}
            alt="Hotel"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-primary-dark opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-md"></div>
        </div>
        <div className="flex flex-col justify-center items-end relative z-20 gap-6 w-full md:w-auto">
          <h3 className="text-[1.4rem] font-medium hover:text-primary-dark hover:dark:text-primary-ligth cursor-pointer transition-all">
            {t.carwash.titulo}
          </h3>
          <div className="shadow-sm shadow-primary-dark dark:shadow-primary-ligth py-4 px-4 md:w-[400px] text-end rounded-md w-full">
            <p>
              {t.carwash.parr}
            </p>
          </div>

          <div className="flex flex-col justify-center items-end gap-4">
            <ul className="flex justify-center items-center gap-6 text-[12px]">
              <li>React</li>
              <li>NodeJS</li>
              <li>TailwindCSS</li>
              <li>MongoDB</li>
            </ul>
            <a href="https://github.com/RoyerB3J5/CARWASH_MAGNAMENT">
              <FiGithub
                className="size-6 
                      hover:text-primary-dark hover:dark:text-primary-ligth  cursor-pointer hover:-translate-y-1 transition-all "
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-t-2 rounded-md md:border-0 border-primary-dark dark:border-primary-ligth relative w-full px-7 sm:px-2 py-10 flex flex-col md:flex-row justify-around items-center gap-8 lg:gap-20">
        <div className="flex flex-col justify-center items-start relative z-20 gap-6 w-full md:w-auto">
          <h3 className="text-[1.4rem] font-medium hover:text-primary-dark hover:dark:text-primary-ligth cursor-pointer transition-all">
            {t.ciclo.titulo}
          </h3>
          <div className="shadow-sm shadow-primary-dark dark:shadow-primary-ligth py-4 px-4 md:w-[400px] text-start rounded-md w-full">
            <p>
              {t.ciclo.parr}
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <ul className="flex justify-center items-center gap-6 text-[12px]">
              <li>React</li>
              <li>Django</li>
              <li>TailwindCSS</li>
            </ul>
            <div className=" flex justify-center items-center gap-6">
              <a href="https://github.com/RoyerB3J5/Ciclo_Brayton">
                <FiGithub
                  className="size-6 
                      hover:text-primary-dark hover:dark:text-primary-ligth  cursor-pointer hover:-translate-y-1 transition-all "
                  strokeWidth={2}
                />
              </a>
              <a href="https://ciclo-brayton.onrender.com/">
                <InternetIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-lg cursor-pointer">
          <Image
            src="/brayton.png"
            width={550}
            height={350}
            alt="Hotel"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-primary-dark opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-md"></div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
