import React from "react";
interface EmailTemplateProps {
  message: string;
}
export const EmailTemplate : React.FC<Readonly<EmailTemplateProps>> = ({
  message
}) => (
  <div className="flex jusitfy-start items-center">
    <p className="text-start text-[14px]">
      {message}
    </p>
  </div>
);