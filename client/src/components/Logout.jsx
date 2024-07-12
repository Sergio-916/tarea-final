import Modal from "./Modal/Modal";
import MyBtn from "./Buttons/MyBtn";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";

function Logout({ isModalOpen, closeModal }) {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    closeModal();
    useStore.getState().clearFavorites();
    useStore.getState().clearCart();
    logout();
    navigate("/");
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center p-10">
          <h1 className="text-xl font-bold mb-6 text-center text-gray-700">
            Confirmation
          </h1>

          <p>Are you sure you want to logout?</p>
          <div className="flex justify-center gap-8 pt-8">
            <MyBtn onClick={handleLogout}>Logout</MyBtn>
            <MyBtn onClick={closeModal}>Cancel</MyBtn>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Logout;
