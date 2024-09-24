import { useContext } from "react";
import { CartContext } from "../store/Cart-Context";
export default function FoodCard({ image, name, id, price, description }) {
  const { cartState, onAddToCart } = useContext(CartContext);
  let source =image;
  return (
    <li className="meal-item">
      <article>
        <img src={source} alt="meal img" />

        <h3>{name}</h3>

        <div className="meal-item-description">{description}</div>
        <div className="meal-item-actions">
          <div className="meal-item-price">{price}</div>
          <button className="button" onClick={() => onAddToCart(id)}>
            {cartState.order.findIndex((meal) => meal.id === id) > -1
              ? "Remove From Cart"
              : "Add To Cart"}
          </button>
        </div>
      </article>
    </li>
  );
}
// 196 198 296 1282 1325 1362 1303 1291
