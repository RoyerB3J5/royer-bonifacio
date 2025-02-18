import { getDictionary } from "@/app/i18n/dictionary"
import SectionHeader from "./SectionHeader"
import SkillsItme from "./SkillsItem"


async function Skills({
  t
}:{
  t: any
}) {
  const data = [
    {
      title: t.title1,
      items: [
        "JavaScript (ES6)",
        "TypeScript",
        "HTML5",
        "CSS",
        "Python",
        "C++"
      ]
    },
    {
      title: t.title2,
      items: [
        "React",
        "Next.js",
        "TailwindCSS",
        "NextUI",
        "Node.js",
        "Django",
        "jQuery"
      ]
    },
    {
      title: t.title3,
      items: [
        "GitHub",
        "Postman",
        "Supabase",
        "MongoDB",
        "PostgreSQL",
        "Prisma"
      ]
    }
  ]
  return (
    <section id="skills" className="px-9 lg:px-16 flex flex-col lg:flex-row justify-center items-start  py-16 gap-10 lg:gap-8 ">
      <div className="w-full lg:flex-[2_2_0%] flex  flex-col items-center gap-6 ">
        <SectionHeader titulo="skills" />
      </div>
      <div className="w-full lg:flex-[3_3_0%] grid grid-cols-2 gap-10 lg:gap-0 lg:flex justify-around items-start py-3 px-8 lg:px-0">
        {data && data.map((item,index) => (
          <SkillsItme title={item.title} items={item.items} key={index}/>
        ) )}
        
      </div>

    </section>
  )
}

export default Skills