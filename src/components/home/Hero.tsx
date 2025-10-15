import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src="/images/hero.jpg" // public/images/hero.jpg に画像を置く
        alt="サウナのメインビジュアル"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
