function Email() {
  return (
    <section className=" flex flex-col justify-between items-center gap-10 right-9 bottom-0 z-10 fixed">
      <a
        href="mailto:rbcode1606@gmail.com"
        className="hover:text-primary-dark hover:dark:text-primary-ligth cursor-pointer hover:-translate-y-1 transition-all "
        style={{ writingMode: "vertical-rl" }}
      >
        rbcode1606@gmail.com
      </a>
      <div className="bg-foreground w-[0.5px] h-[100px]"></div>
    </section>
  );
}

export default Email;
