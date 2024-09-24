import { createContext, useState } from "react";
import { useFetsh } from "../hooks/FetshHook";

export const CartContext = createContext({
  cartState: { order: [], pos: 0 },
  onAddToCart: () => {},
  onIncrease: () => {},
  onDecrease: () => {},
  nextPos: () => {},
  closedModal: () => {},
  resetOrders: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartState, setCartState] = useState({
    order: [
      // { id: "m0", name: "test", price: 10, count: 1 },
    ],
    pos: 0,
  });
  const { data } = useFetsh("http://localhost:3000/meals");
  // const DUMMY_ARRAY = [
  //   { id: "m1", name: "im m1" },
  //   { id: "m2", name: "im m2" },
  //   { id: "m3", name: "im m3" },
  // ];

  function onAddToCart(id) {
    setCartState((prev) => {
      let updatedState = [...prev.order];
      let itemIndex = updatedState.findIndex((meal) => meal.id === id);
      let updatedItem = updatedState[itemIndex];
      if (updatedItem) {
        let finalState = updatedState.filter((meal) => meal.id !== id);
        return { ...prev, order: finalState };
      } else {
        let actualIndex = data.findIndex((meal) => meal.id === id);
        let actualItem = { ...data[actualIndex] };
        updatedState.push({
          id,
          name: actualItem.name,
          price: actualItem.price,
          count: 1,
        });
        return { ...prev, order: updatedState };
      }
    });
  }
  // ?
  function onIncrease(id) {
    const index = cartState.order.findIndex((meal) => meal.id === id);
    setCartState((prev) => {
      const updatedState = [...prev.order];
      updatedState[index].count += 1;
      return { ...prev, order: [...updatedState] };
    });
  }
  function onDecrease(id) {
    const index = cartState.order.findIndex((meal) => meal.id === id);

    setCartState((prev) => {
      const updatedState = [...prev.order];
      if (updatedState[index].count <= 1) {
        const finalState = [...updatedState.filter((meal) => meal.id !== id)];

        return { ...prev, order: [...finalState] };
      } else {
        updatedState[index].count -= 1;
      }
      return { ...prev, order: [...updatedState] };
    });
  }
  function nextPos() {
    setCartState((prev) => {
      let newPos = prev.pos + 1;
      return { ...prev, pos: newPos };
    });
  }
  function closedModal() {
    setCartState((prev) => {
      let newPos = 0;
      return { ...prev, pos: newPos };
    });
  }
  function resetOrders() {
    setCartState({
      order: [],
      pos: 0,
    });
  }
  // ?

  const CtxValue = {
    cartState,
    onAddToCart,
    onIncrease,
    onDecrease,
    nextPos,
    closedModal,
    resetOrders,
  };
  return (
    <CartContext.Provider value={CtxValue}>{children}</CartContext.Provider>
  );
}
