import { TextField, IconButton } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "@/lib/postSlice";
import styles from './SearchBar.module.css';
import { RootState } from "../../types";

interface ProductSearchBarProps {
  searchTerm: string; // Initial value for the search term
}

export const ProductSearchBar = ({ searchTerm }: ProductSearchBarProps) => {
  const dispatch = useDispatch();
    const searchData = useSelector((state: RootState) => state.product.searchTerm);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };
  console.log("searchTerm", searchData);
  return (
    <>
      <div className={styles.search_bar_container}>
        <input
          style={{height: "30px"}}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search_input"
        />
        {/* <button className={styles.search_button}>Search</button> */}
      </div>
    </>
  );
};
