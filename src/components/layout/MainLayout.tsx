import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";

type LayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
}
