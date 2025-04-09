import SectionHeader from "./SectionHeader";
interface Experience {
  titulo: string;
  item1: {
    title: string;
    parr1: string;
    parr2: string;
    parr3: string;
    parr4: string;
    parr5: string;
  };
  item2: {
    title: string;
    parr1: string;
    parr2: string;
    parr3: string;
    parr4: string;
    parr5: string;
  };
}
function Experience({ t }: { t: Experience }) {
  return (
    <section
      id="experience"
      className="px-9 lg:px-16 flex flex-col lg:flex-row justify-center items-start  py-16 gap-10 lg:gap-8 "
    >
      <div className="w-full lg:w-1/2 flex  flex-col items-center gap-6 ">
        <SectionHeader titulo={t.titulo} />
      </div>
      <div className="w-full lg:w-1/2 py-2 flex flex-col gap-6">
        <div className="w-full py-2 flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <p className="text-black dark:text-white font-medium text-[22px]">
              {t.item1.title}
            </p>
            <p className="text-[13px] text-primary-dark dark:text-primary-ligth">
              {t.item1.parr1}
            </p>
          </div>

          <ul className="text-20px flex flex-col gap-3">
            <li className="li-arrow">{t.item1.parr2}</li>
            <li className="li-arrow">{t.item1.parr3}</li>
            <li className="li-arrow">{t.item1.parr4}</li>
            <li className="li-arrow">{t.item1.parr5}</li>
          </ul>
        </div>
        <div className="w-full py-2 flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <p className="text-black dark:text-white font-medium text-[22px]">
              {t.item2.title}
            </p>
            <p className="text-[13px] text-primary-dark dark:text-primary-ligth">
              {t.item2.parr1}
            </p>
          </div>

          <ul className="text-20px flex flex-col gap-3">
            <li className="li-arrow">{t.item2.parr2}</li>
            <li className="li-arrow">{t.item2.parr3}</li>
            <li className="li-arrow">{t.item2.parr4}</li>
            <li className="li-arrow">{t.item2.parr5}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
