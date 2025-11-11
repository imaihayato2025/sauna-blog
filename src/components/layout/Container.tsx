import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto mt-5 mb-10 w-[90%] max-w-7xl sm:mb-20">
      {children}
    </div>
  );
}
