import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <h1
        className={`cursor-pointer text-[clamp(1rem,0.583rem+2.08vw,2.25rem)] font-bold ${className}`}
      >
        Sauna Life
      </h1>
    </Link>
  );
}
