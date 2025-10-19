import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[300px] w-full md:h-[500px]">
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
