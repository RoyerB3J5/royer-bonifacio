interface SectionHeaderProps {
  titulo: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ titulo }) => {
  return (
    <div className="flex justify-start items-center gap-3 w-full pr-0 lg:pr-8">
      <p className="text-[32px] text-black dark:text-white">
        <span className="text-primary-dark dark:text-primary-ligth">#</span>
        {titulo}
      </p>
      <div className="flex-grow h-[1px] bg-primary-dark dark:bg-primary-ligth"></div>
    </div>
  );
};

export default SectionHeader;
