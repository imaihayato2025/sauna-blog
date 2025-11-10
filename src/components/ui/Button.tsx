import Link from "next/link";

type ButtonProprs = {
  className?: string;
  label: React.ReactNode;
};

export default function Button({ className, label }: ButtonProprs) {
  return (
    <Link href="/articles">
      <button
        className={`my-10 h-10 w-40 rounded-lg border border-black bg-black text-base font-bold tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-black ${className}`}
      >
        {label}
      </button>
    </Link>
  );
}
