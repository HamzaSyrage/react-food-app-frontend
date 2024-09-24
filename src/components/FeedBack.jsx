import { forwardRef, useContext } from "react";
import { CartContext } from "../store/Cart-Context";

const FeedBack = forwardRef(function FeedBack(p, ref) {
  const { closedModal, resetOrders } = useContext(CartContext);
  return (
    <div>
      <h2>thank you for ordering</h2>
      <p>
        your order has been sent, we will contact with you soon via email
        address
      </p>
      <section className="modal-actions">
        <button
          className="text-button button"
          onClick={() => {
            ref.current.close();
            closedModal();
            resetOrders();
          }}
        >
          close
        </button>
      </section>
    </div>
  );
});
export default FeedBack;
