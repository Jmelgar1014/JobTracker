import React from "react";
import { useJob } from "../Hooks/useJob";

const Pagination = ({ jobs }) => {
  const { newPage, isPlaceholderData } = useJob();
  const page = jobs?.page ?? 1;
  const pageSize = jobs?.pageSize ?? 20;
  const itemCount = jobs?.items?.length ?? 0;
  const totalCount = jobs?.totalCount ?? 0;

  const start = (page - 1) * pageSize + 1;
  const end = start + itemCount - 1;
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) return null;

  return (
    <nav className="jt-pagination" aria-label="Pagination">
      <span className="jt-pagination-info">
        Showing{" "}
        <span className="jt-mono">
          {start}–{end}
        </span>{" "}
        of <span className="jt-mono">{totalCount}</span>
      </span>
      <div className="jt-pagination-controls">
        <button
          type="button"
          aria-label="Previous page"
          disabled={page === 1 || isPlaceholderData}
          onClick={() => newPage(page - 1)}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10 3.5 5.5 8 10 12.5" />
          </svg>
          Prev
        </button>
        <span className="jt-pagination-page">
          Page <span className="jt-mono">{page}</span> of{" "}
          <span className="jt-mono">{totalPages}</span>
        </span>
        <button
          type="button"
          aria-label="Next page"
          disabled={page >= totalPages || isPlaceholderData}
          onClick={() => newPage(page + 1)}
        >
          Next
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 3.5 10.5 8 6 12.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
