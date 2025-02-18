import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import ContactsSection from "@/components/ContactsSection";
import Email from "@/components/Email";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Proyects from "@/components/Proyects";
import Skills from "@/components/Skills";
import { getDictionary } from "../i18n/dictionary";

export default async function Init({
  params
}:{
  params: { lang: "en" | "es" }
}) {
  const { lang } = params;
  const t = await getDictionary(lang);
  return (
    <main className="w-screen px-6 lg:px-24">
      <Home t={t.home}/>
      <AboutMe t={t.sobreMi}/>
      <Skills t={t.skills}/>
      <Experience t={t.experience}/>
      <Proyects t={t.projects}/>
      <div className="hidden lg:block">
        <Contacts />
        <Email />
      </div>
      <ContactsSection t={t.header}/>
    </main>
  );
}
