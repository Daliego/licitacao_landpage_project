import { FloatIcon } from "./style";
import whatsapp_logo from "../../../assets/whatsapp_logo.svg";

interface WhattsappLayoutProps {
  children: React.ReactNode;
}

export const WhattsappLayout = ({ children }: WhattsappLayoutProps) => {
  return (
    <>
      {children}
      <FloatIcon src={whatsapp_logo} />
    </>
  );
};
