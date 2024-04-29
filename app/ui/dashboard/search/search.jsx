"use client";

import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placrholder }) => {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParam);
    params.set("q", e.target.value);
    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathName}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placrholder}
        className={styles.input}
        onChange={handleSearch}
        value={searchParam?.q}
      />
    </div>
  );
};

export default Search;
