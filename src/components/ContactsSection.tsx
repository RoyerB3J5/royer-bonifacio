import IconContacts from "./IconContacts";
import SectionHeader from "./SectionHeader";

function ContactsSection() {
  return (
    <section
      id="contacts"
      className="px-9 lg:px-16 lg:hidden flex flex-col lg:flex-row justify-center items-start lg:py-16 gap-8 mb-5 lg:mb-0"
    >
      <div className="w-full  flex  flex-col items-center gap-6 ">
        <SectionHeader titulo="contactos" />
      </div>
      <div className="w-full flex  flex-col jsutify-center items-center gap-9">
        <a
          href="mailto:royer.boni13@gmail.com"
          className=" transition duration-200 ease-in-out  hover:text-background px-2 py-2 shadow-email-dark dark:shadow-email hover:shadow-email-hover-dark hover:dark:shadow-email-hover  "
        >
          royer.boni13@gmail.com
        </a>
        <IconContacts />
      </div>
    </section>
  );
}

export default ContactsSection;
