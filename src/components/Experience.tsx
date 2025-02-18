import SectionHeader from "./SectionHeader";
interface Experience {
  titulo: string;
  parr1: string;
  parr2: string;
  parr3: string;
  parr4: string;
  parr5: string;
}
function Experience({
  t
}:{
  t: Experience}
) {
  return (
    <section
      id="experience"
      className="px-9 lg:px-16 flex flex-col lg:flex-row justify-center items-start  py-16 gap-10 lg:gap-8 "
    >
      <div className="w-full lg:w-1/2 flex  flex-col items-center gap-6 ">
        <SectionHeader titulo={t.titulo} />
      </div>
      <div className="w-full lg:w-1/2 py-2 flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <p className="text-black dark:text-white font-medium text-[22px]">
            Freelancer
          </p>
          <p className="text-[13px] text-primary-dark dark:text-primary-ligth">
            {t.parr1}
          </p>
        </div>

        <ul className="text-20px flex flex-col gap-3">
          <li className="li-arrow">
            {t.parr2}
          </li>
          <li className="li-arrow">
            {t.parr3}
          </li>
          <li className="li-arrow">
            {t.parr4}
          </li>
          <li className="li-arrow">
            {t.parr5}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
