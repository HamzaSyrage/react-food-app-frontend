import { forwardRef, useContext } from "react";
import LOGO from "../assets/logo.jpg";
import { CartContext } from "../store/Cart-Context";
export default forwardRef(function Header(props, ref) {
  const { cartState } = useContext(CartContext);
  return (
    <header>
      <div id="main-header">
        <div id="title">
          <img src={LOGO} alt="" />
          <h1>React Food Order App</h1>
        </div>
        <button className="text-button" onClick={() => ref.current.open()}>
          cart
          {cartState.order && cartState.order.length > 0
            ? ` (${cartState.order.length})`
            : null}
        </button>
      </div>
    </header>
  );
});
