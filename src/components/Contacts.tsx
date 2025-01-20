import React from "react";

import IconContacts from "./IconContacts";
function Contacts() {
  return (
    <section className="flex flex-col justify-between items-center gap-12 left-9 bottom-0 z-10 fixed">
      <IconContacts />
      <div className="bg-foreground w-[1px] h-[100px]"></div>
    </section>
  );
}

export default Contacts;
