import { forwardRef, useContext, useEffect, useState } from "react";
import ModalActions from "./ModalActions";
import { CartContext } from "../store/Cart-Context";
const OrderForm = forwardRef(function OrderForm(props, ref) {
  const { cartState, nextPos } = useContext(CartContext);
  const totalPrice = cartState.order
    .reduce((acc, item) => acc + item.price * item.count, 0)
    .toFixed(2);
  function validate(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const city = data.get("city");
    const postal = data.get("postal-code");
    const street = data.get("street");
    const finalOrder = {
      order: {
        items: cartState.order,
        customer: {
          city,
          email,
          name,
          street,
          "postal-code": postal,
        },
      },
    };
    async function send() {
      // const res1 = await fetch("http://localhost:3000/orders", {
      //   method: "POST",
      //   body: JSON.stringify(finalOrder),
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // });
      // console.log(res1);
      // if (res1.status === 201) {
      // }
      nextPos();
    }
    send();
  }
  return (
    <>
      <h2>total ${totalPrice}</h2>
      <p>please submit your info</p>
      <form onSubmit={validate}>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" id="name" required />
        </div>
        <div className="control">
          <label htmlFor="email">E-mail Address</label>
          <input name="email" type="email" id="email" required />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input name="street" type="text" id="street" required />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input name="postal-code" type="text" id="postal-code" required />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input name="city" type="text" id="city" required />
          </div>
        </div>
        <ModalActions
          next={"Order Now"}
          //   nextMethod={valid ?  : undefined}
          ref={ref}
        />
      </form>
    </>
  );
});
export default OrderForm;
