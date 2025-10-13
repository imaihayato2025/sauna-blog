import Logo from "@/components/layout/Logo";
import Nav from "@/components/layout/Nav";
export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
