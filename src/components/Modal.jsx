import { forwardRef, useRef, useImperativeHandle, useContext } from "react";
import { createPortal } from "react-dom";
import CartItems from "./CartItems";
import OrderForm from "./orederForm";
import { CartContext } from "../store/Cart-Context";
import FeedBack from "./FeedBack";

const Modal = forwardRef(function Modal(props, ref) {
  const { cartState } = useContext(CartContext);
  const dialog = useRef();
  useImperativeHandle(
    ref,
    () => ({
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    }),
    []
  );
  return createPortal(
    <dialog ref={dialog} className="modal">
      {cartState.pos === 0 ? <CartItems ref={ref} /> : null}

      {cartState.pos === 1 ? <OrderForm ref={ref} /> : null}
      {cartState.pos === 2 ? <FeedBack ref={ref} /> : null}
    </dialog>,
    document.getElementById("modal")
  );
});
export default Modal;
