import Modal from "./Modal/Modal"
import MyBtn from "./Buttons/MyBtn";

function BuyModal({ isModalOpen, closeModal }) {



    return ( 

        <>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center p-10">
          <h1 className="text-xl font-bold mb-6 text-center text-gray-700">Confirnation</h1>

          <p>To continue shopping please login?</p>
          <div className="flex justify-center gap-8 pt-8">
        {/* <MyBtn onClick = {handleLogout} >Logout</MyBtn> */}
          <MyBtn onClick={closeModal}>Cancel</MyBtn>
          </div>
        </div>
      </Modal>
        </>
     );
}

export default BuyModal;