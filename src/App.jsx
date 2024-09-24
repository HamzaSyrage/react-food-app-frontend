import { useRef } from "react";
import FoodWrapper from "./components/FoodWraper";
import Header from "./components/Header";
import Modal from "./components/Modal";
import CartContextProvider from "./store/Cart-Context";
function App() {
  const ref = useRef();
  return (
    <CartContextProvider>
      <Header ref={ref} />
      <FoodWrapper />
      <Modal ref={ref} />
    </CartContextProvider>
  );
}

export default App;
