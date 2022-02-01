import { useMemo } from "react";
import { useSetRecoilState } from "recoil";
import PrevPage from "./resources/prev.svg";
import NextPage from "./resources/next.svg";
import { DisplayedPage } from "../../state";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};
const MAX_PAGES_NUM = 10;

export function PaginationComponent({
  totalPages,
  currentPage,
}: PaginationProps) {
  const setPageNum = useSetRecoilState(DisplayedPage);
  const pages = useMemo(
    () =>
      Array.from(
        { length: Math.min(totalPages, MAX_PAGES_NUM) },
        (_, i) => i + 1
      ),
    [totalPages]
  );
  const currPageClassName =
    "hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-black bg-black text-white pointer-events-none";
  const pageClassName =
    "hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300";

  function moveToPage(pageNum: number) {
    if (pageNum < 1 || pageNum > totalPages) return;
    setPageNum(pageNum);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="container mx-auto mb-2 px-4">
      <nav
        className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
        aria-label="Pagination"
      >
        <button
          className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
          title="Previous Page"
          onClick={() => moveToPage(currentPage - 1)}
        >
          <span className="sr-only">Previous Page</span>
          <PrevPage className="w-2" />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={page == currentPage ? currPageClassName : pageClassName}
            onClick={() => moveToPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
          title="Next Page"
          onClick={() => moveToPage(currentPage + 1)}
        >
          <span className="sr-only">Next Page</span>
          <NextPage className="w-2" />
        </button>
      </nav>
    </div>
  );
}
