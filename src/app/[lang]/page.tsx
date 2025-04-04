import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Proyects from "@/components/Proyects";
import Skills from "@/components/Skills";
import { getDictionary } from "../i18n/dictionary";
import SendEmail from "@/components/SendEmail";

export default async function Init({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  const t = await getDictionary(lang);
  return (
    <main className="w-screen px-6 lg:px-24">
      <Home t={t.home} />
      <AboutMe t={t.sobreMi} />
      <Skills t={t.skills} />
      <Experience t={t.experience} />
      <Proyects t={t.projects} />
      <div className="hidden lg:block">
        <Contacts />
      </div>
      <SendEmail t = {t.contact}/>
    </main>
  );
}
