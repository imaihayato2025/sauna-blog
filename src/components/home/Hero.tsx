import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative my-4 h-[300px] w-full md:my-12 md:h-[500px]">
      <Image
        src="/main.png"
        alt="サウナのメインビジュアル"
        fill
        className="rounded-lg object-cover"
        priority
      />
    </div>
  );
}
