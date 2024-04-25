import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placrholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placrholder} className={styles.input} />
    </div>
  );
};

export default Search;
