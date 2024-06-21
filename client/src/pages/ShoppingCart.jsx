import useStore from "../store/store";
import PlusMinus from "../components/PlusMinus/PlusMinus";
import MyBtn from "../components/Buttons/MyBtn";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth";
import BuyModal from "../components/BuyModal";
import axios from "axios";


function ShoppingCart() {
  const cart = useStore((state) => state.cart);
  const removeItemFromCart = useStore((state) => state.removeItemFromCart);
  const getTotalSum = useStore((state) => state.getTotalSum);
  const user = useAuthStore((state) => state.user);

  const handleSumm = (price, qty) => {
    return (Number(price) * Number(qty)).toFixed(2);
  };
  const totalProsucts = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWeight = Number(
    cart.reduce((sum, item) => sum + item.product.weight * item.quantity, 0)
  ).toFixed(1);

  const { token } = useAuthStore();

  // buy modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModalHandle = () => {
    console.log(token);
    if (!token) {
      openModal();
    } else {
      if (cart.length == 0) {
        alert("Cart is empty");
      } else {
        cartSent();
        
      }
    }
  };

  const cartSent = async () => {
    
  const cartData = {
    cart,
    user
  }   
try {

  await axios.post(
    "http://localhost:3050/user/shopping-cart",
    cartData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  useStore.getState().clearCart();
      
      alert("Congratulations you have successfully purchased");

} catch (error) {
  console.log(error);
 if (error.response && error.response.data && error.response.data.message == "Token expired") {
  alert('Token expired. Please login again')
 }
}

   
  };

  return (
    <>
      <div className="contaner xl-auto">
        <h1 className="title_h1">Shopping Cart</h1>

        <div className="flex sm:p-10 p-4 flex-col lg:flex-row gap-y-10 lg:gap-5">
          <div className="shopping-cart rounded-xl shadow-xl bg-white border-solid border-2 inline-flex h-full flex-col lg:w-2/3 sm:p-6 p-4">
            {(cart.length === 0 && (
              <div className="flex justify-center p-20 text-xl">
                Shoppig cart is empty
              </div>
            )) || (
              <div>
                <table className="table-shoppingcart w-full p-10">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Sum</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="p-4">
                          <img
                            className="w-20 h-20"
                            src={`/img/${item.product.image[0]}`}
                            alt={item.product.name}
                          />
                        </td>
                        <td className="flex flex-col mt-9 justify-center items-center">
                          <span className="font-bold">
                            {" "}
                            {item.product.name}{" "}
                          </span>{" "}
                          <span>available: {item.product.stock} </span>
                        </td>
                        <td align="center">
                          <PlusMinus
                            initialQty={item.quantity}
                            item={item.product}
                          >
                            {item.quantity}
                          </PlusMinus>
                        </td>
                        <td align="center">
                          $ {handleSumm(item.product.price, item.quantity)}
                        </td>
                        <td align="center">
                          <button
                            className="rounded-lg bg-white p-2 outline-none border-solid border-2 shadow-md"
                            onClick={() => removeItemFromCart(item.product)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="font-bold ">
                      <td></td>
                      <td align="center"></td>
                      <td align="center"></td>
                      <td align="center">$ {getTotalSum().toFixed(2)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>
          <div className="bg-white rounded-xl shadow-xl border-solid border-2 inline-flex lg:w-1/3  h-fit flex-col px-8">
            <h1 className="text-2xl font-bold my-5">Purchase summary</h1>
            <table>
              <tbody>
                <tr>
                  <td className="p-6">Products ({totalProsucts})</td>
                  <td align="right" className="p-6">
                    {" "}
                    $ {getTotalSum().toFixed(2)}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-6">Total weight</td>
                  <td align="right" className="p-6">
                    {totalWeight} kg
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ height: "200px" }}>
                  <td
                    style={{ verticalAlign: "bottom" }}
                    className="p-6 font-bold"
                  >
                    Total
                  </td>
                  <td
                    align="right"
                    style={{ verticalAlign: "bottom" }}
                    className="p-6 font-bold "
                  >
                    $ {getTotalSum().toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
            <MyBtn onClick={openModalHandle} className="mx-12 my-8 ">
              Purchase
            </MyBtn>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <BuyModal isModalOpen={isModalOpen} closeModal={closeModal} />
      )}
    </>
  );
}

export default ShoppingCart;
