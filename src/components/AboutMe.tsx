
import SectionHeader from "./SectionHeader";

async function AboutMe({
  t
}: {
  t: any
}) {

  return (
    <section
      id="about"
      className="px-9 lg:px-16 flex flex-col lg:flex-row justify-center items-start lg:py-16 gap-8 mb-20 lg:mb-0"
    >
      <div className="w-full lg:flex-1 flex-col items-center gap-6">
        <SectionHeader titulo={t.titulo} />
      </div>
      <div className="w-full lg:flex-1 flex flex-col gap-7 py-3">
        <p>
          {t.intro1}{" "}
          <span className="dark:text-primary-ligth text-primary-dark  font-semibold">
            Universidad Nacional de Trujillo (UNT)
          </span>
          {t.intro2}
        </p>
        <p>
          {t.parr2_1}{" "}
          <span className="text-primary-dark dark:text-primary-ligth font-semibold">
            React, Next.js, TailwindCSS
          </span>
          {t.parr2_2}
        </p>
        <p>
          {t.parr3}
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
