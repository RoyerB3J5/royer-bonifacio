interface SkillsItemProps {
  title: string;
  items: string[];

}
const SkillsItme : React.FC<SkillsItemProps> = ({
  title,
  items,

 }) => {
  return(
    <div className="flex flex-col gap-5" >
          <h3 className="font-bold text-dark dark:text-white">
            {title}
          </h3>
          <ul className="text-[0.9rem] flex flex-col gap-3">
            {items && items.map((item, index)=> (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
  )
}

export default SkillsItme;