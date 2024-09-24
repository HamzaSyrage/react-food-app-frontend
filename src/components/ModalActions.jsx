import { forwardRef, useContext } from "react";
import { CartContext } from "../store/Cart-Context";

const ModalActions = forwardRef(function ModalActions(
  { next, nextMethod },
  ref
) {
  const { closedModal } = useContext(CartContext);
  return (
    <section className="modal-actions">
      <button
        className="text-button button"
        onClick={() => {
          ref.current.close();
          closedModal();
        }}
      >
        close
      </button>
      {next && (
        <button className="button" onClick={nextMethod}>
          {next}
        </button>
      )}
    </section>
  );
});
export default ModalActions;
