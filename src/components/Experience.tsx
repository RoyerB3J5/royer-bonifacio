import SectionHeader from "./SectionHeader";

function Experience() {
  return (
    <section
      id="experience"
      className="px-9 lg:px-16 flex flex-col lg:flex-row justify-center items-start  py-16 gap-10 lg:gap-8 "
    >
      <div className="w-full lg:w-1/2 flex  flex-col items-center gap-6 ">
        <SectionHeader titulo="experiencia" />
      </div>
      <div className="w-full lg:w-1/2 py-2 flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <p className="text-black dark:text-white font-medium text-[22px]">
            Freelancer
          </p>
          <p className="text-[13px] text-primary-dark dark:text-primary-ligth">
            Enero 2024 - Presente
          </p>
        </div>

        <ul className="text-20px flex flex-col gap-3">
          <li className="li-arrow">
            Desarrollo de sistemas de gestión para carwash y hoteles,optimizando
            operaciones y mejorando la experiencia del usuario con interfaces
            fáciles de usar.
          </li>
          <li className="li-arrow">
            Páginas web dinámicas presentadas en la universidad, utilizando para
            ofrecer soluciones modernas y escalables.
          </li>
          <li className="li-arrow">
            Integración de backend para implementar funcionalidades de bases de
            datos, autenticación de usuarios y la conexión con APIs externas.
          </li>
          <li className="li-arrow">
            Diseño de esquemas de base de datos para almacenar información de
            clientes, reservas y servicios, y manejo de consultas básicas.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
