"use client";

// import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "../component/homePage";
import Pagination from "@mui/material/Pagination";
import { useGetBlogsQuery } from "../lib/api";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductSearchBar } from "../component/searchBar/productsSearchBar";
import { RadioButtonCategory } from "../component/radioCategory/radioButtonCategory";
import { RootState } from "../types";

export default function Home() {
  // const [page, setPage] = useState(1);
  const searchTerm = useSelector(
    (state: RootState) => state.product.searchTerm
  );
  console.log("search the data", searchTerm);

  const categoryTerm = useSelector(
    (state: RootState) => state.product.categoryTerm
  );
  const { data, error, isLoading, refetch } = useGetBlogsQuery({
    searchTerm,
    categoryTerm,
    limit: 10,
    // page,
    // category,
    // tag,
  });

  const productData = data?.products;
  console.log(productData);
  return (
    <main className={styles.main}>
      <h1 style={{marginBottom: "2rem"}}>Blog Post</h1>

      <ProductSearchBar searchTerm={searchTerm} />
      <RadioButtonCategory categoryTerm={categoryTerm} />
      <HomePage productData={productData} />
    </main>
  );
}
