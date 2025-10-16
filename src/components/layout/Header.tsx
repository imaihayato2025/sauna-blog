import Logo from "@/components/layout/Logo";
import Nav from "@/components/layout/Nav";
export default function Header() {
  return (
    <header className="mx-auto flex h-24 w-full max-w-7xl flex-col items-center justify-center">
      <div className="flex w-[90%] items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
