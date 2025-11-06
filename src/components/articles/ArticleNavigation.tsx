import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ArticleNavigation() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col items-center">
        <HiArrowNarrowLeft size={60} color="black" className="pb-2" />
        <p>前の記事へ</p>
      </div>
      <div className="flex flex-col items-center">
        <HiArrowNarrowRight size={60} color="black" className="pb-2" />
        <p>次の記事へ</p>
      </div>
    </div>
  );
}
