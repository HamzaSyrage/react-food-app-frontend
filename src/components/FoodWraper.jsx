import { useFetsh } from "../hooks/FetshHook";
import FoodCard from "./FoodCard";

export default function FoodWrapper() {
  const { data, loading, errors } = useFetsh("http://localhost:3000/meals");
  if (errors) {
    return <div class="error">Error While fetching data from the backend</div>;
  } else if (loading) {
    return <div class="loader"></div>;
  } else if (data) {
    return (
      <ul id="meals">
        {data.map((e, index) => (
          <FoodCard key={index} {...e} />
        ))}
      </ul>
    );
  }
}
