import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-[90%] max-w-7xl">{children}</div>;
}
