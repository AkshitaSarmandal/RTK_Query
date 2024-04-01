import { useDispatch } from "react-redux";
import { useGetBlogbyCategoryQuery } from "../../lib/api";
import { setCategoryTerm } from "@/lib/postSlice";

interface ProductCategoryProps {
  categoryTerm: string;
}

export const RadioButtonCategory = ({ categoryTerm }: ProductCategoryProps) => {
  const dispatch = useDispatch();
  const { data } = useGetBlogbyCategoryQuery([]);
  console.log("category data", data);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCategoryTerm(e.target.value));
  };
  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        {data.map((category: any) => (
          <label>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleCategoryChange}
              style={{ margin: "1rem" }}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </>
  );
};
