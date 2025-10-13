import { ReactNode } from "react";
import Header from "@/components/layout/Header";

type LayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
