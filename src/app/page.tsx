import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import ContactsSection from "@/components/ContactsSection";
import Email from "@/components/Email";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Proyects from "@/components/Proyects";
import Skills from "@/components/Skills";

export default function Init() {
  return (
    <main className="w-screen px-6 lg:px-24">
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <Proyects/>
      <div className="hidden lg:block">
        <Contacts />
        <Email />
      </div>
      <ContactsSection />
    </main>
  );
}
