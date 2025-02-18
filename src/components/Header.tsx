import Logo from "../../public/logo1.svg";
import Image from "next/image";
import { getDictionary } from "@/app/i18n/dictionary";
import ClientHeader from "./ClientHeader";

interface HeaderProps {
  params: { lang: "en" | "es" };
}

async function Header({ params }: HeaderProps) {
  const t = await getDictionary(params.lang);

  return (
    <ClientHeader
      t={t.header}
      logo={<Image src={Logo} alt="Logo RB" width={40} height={40} className="size-10 lg:size-11" />}
    />
  );
}

export default Header;