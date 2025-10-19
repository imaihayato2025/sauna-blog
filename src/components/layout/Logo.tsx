type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <h1
      className={`text-[clamp(1rem,0.583rem+2.08vw,2.25rem)] font-bold ${className}`}
    >
      Sauna Life
    </h1>
  );
}
