"use client";

import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const page = useSearchParams().get("page") || 1;

  const params = new URLSearchParams(searchParam);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (+page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (+page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", +page - 1)
      : params.set("page", +page + 1);
    replace(`${pathName}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
