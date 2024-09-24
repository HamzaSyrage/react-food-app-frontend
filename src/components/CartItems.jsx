import { forwardRef, useContext } from "react";
import { CartContext } from "../store/Cart-Context";
import ModalActions from "./ModalActions";
const CartItems = forwardRef(function CartItems(props, ref) {
  const { cartState, onIncrease, onDecrease, nextPos } =
    useContext(CartContext);
  const totalPrice = cartState.order
    .reduce((acc, item) => acc + item.price * item.count, 0)
    .toFixed(2);
  return (
    <>
      <h2>{cartState.order.length ? "Cart Items" : "No Item In The Cart"}</h2>
      {cartState.order.length ? (
        <ul>
          {cartState.order.map((meal) => (
            <li key={meal.id} className="cart-item">
              <p>
                <strong>
                  {meal.name} - {meal.count}x ${meal.price}
                </strong>
              </p>
              <div className="cart-item-actions">
                <button
                  onClick={() => {
                    onDecrease(meal.id);
                  }}
                >
                  -
                </button>
                <p>{meal.count}</p>
                <button
                  onClick={() => {
                    onIncrease(meal.id);
                  }}
                >
                  +
                </button>
              </div>
            </li>
          ))}
          <div className="cart-total">total ${totalPrice}</div>
        </ul>
      ) : null}
      <ModalActions
        ref={ref}
        next={cartState.order.length ? "Check Out" : ""}
        nextMethod={nextPos}
      />
    </>
  );
});
export default CartItems;
