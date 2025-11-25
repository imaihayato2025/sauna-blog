import { HiChevronLeft } from "react-icons/hi";
import Link from "next/link";

export default function ReturnButton() {
  return (
    <div>
      <div>
        <Link href="/articles">
          <HiChevronLeft size={40} className="absolute top-5 left-3" />
        </Link>
      </div>
    </div>
  );
}
