import Logo from "@/components/layout/Logo";
import Nav from "@/components/layout/Nav";
export default function Header() {
  return (
    <header className="max-w-7xl w-full h-24 flex flex-col justify-center items-center mx-auto">
      <div className="flex justify-center w-[90%] ">
        <Logo />
      </div>
    </header>
  );
}
