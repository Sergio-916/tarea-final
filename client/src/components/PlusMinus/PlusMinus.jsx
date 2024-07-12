import { useState } from "react";
import useStore from "../../store/store";

function PlusMinus({ initialQty, item, stock }) {
  const [quantity, setQuantity] = useState(initialQty);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const addToCart = useStore((state) => state.addToCart);

  const handleDecrement = () => {
    if (quantity == 1) {
        return
    } else {
        setQuantity((prevQty) => Math.max(0, prevQty - 1));
        removeFromCart(item);
    }
  };

  const handleIncrement = () => {
    if (stock <= 0) {
      console.log("Not enough stock");
      return;
    }
    setQuantity((prevQty) => prevQty + 1);
    addToCart(item);
  };

  return (
    <>
      <div className="sm:gap-2 gap-1 items-center inline-flex">
        <button
          onClick={handleDecrement}
          className="active:bg-gray-300 sm:w-8 w-6 h-12 rounded-lg outline-none border-solid border-2 shadow-md"
        >
          -
        </button>
        <div className="sm:w-8 w-4  text-center text-xl">{quantity}</div>
        <button
          onClick={handleIncrement}
          className="active:bg-gray-300 sm:w-8 w-6 h-12 rounded-lg outline-none border-solid border-2 shadow-md"
        >
          +
        </button>
      </div>
    </>
  );
}

export default PlusMinus;
