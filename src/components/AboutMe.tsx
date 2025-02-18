import SectionHeader from "./SectionHeader";

function AboutMe() {
  return (
    <section
      id="about"
      className="px-9 lg:px-16 flex flex-col lg:flex-row justify-center items-start lg:py-16 gap-8 mb-20 lg:mb-0"
    >
      <div className="w-full lg:flex-1 flex-col items-center gap-6">
        <SectionHeader titulo="sobre-mi" />
      </div>
      <div className="w-full lg:flex-1 flex flex-col gap-7 py-3">
        <p>
          Futuro Ingeniero Mecatrónico de la{" "}
          <span className="dark:text-primary-ligth text-primary-dark  font-semibold">
            Universidad Nacional de Trujillo (UNT)
          </span>
          , apasionado por la tecnología y la programación.
        </p>
        <p>
          Actualmente, me especializo en el desarrollo frontend con conocimiento
          de backend, tengo experiencia en la creación de aplicaciones web
          modernas utilizando tecnologías como{" "}
          <span className="text-primary-dark dark:text-primary-ligth font-semibold">
            React, Next.js, TailwindCSS
          </span>
          , entre otras. Me interesa combinar mis conocimientos en ingeniería y
          programación para diseñar soluciones innovadoras y eficientes
        </p>
        <p>
          Me esfuerzo por mantenerme actualizado en las últimas tendencias
          tecnológicas y por mejorar mis habilidades, buscando destacar en el
          ámbito del desarrollo web y enfrentar nuevos retos que impulsen mi
          crecimiento profesional.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
