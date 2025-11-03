import Logo from "@/components/layout/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#333333] pb-4 text-center">
      <div className="flex h-30 w-full flex-col items-center justify-center">
        <Logo className="text-white" />
      </div>
      <small className="text-white">© SeekNext Co. Ltd. 2021</small>
    </footer>
  );
}
