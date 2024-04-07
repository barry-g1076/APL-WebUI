import { IoSend } from "react-icons/io5";
const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="w-full  flex flex-col p-2 items-center justify-center z-50">
          <div className="w-full relative">
            <input
              type="text"
              name="ai-input"
              id="ai-input"
              className="w-full rounded-2xl px-4 py-2"
              placeholder="Ask me anything...."
                      />
            <IoSend className="absolute right-2 top-3 hover:text-blue-300 cursor-pointer" onClick={onClose}/>
          </div>

          <div className="flex items-center justify-end mt-4">
            <button
              className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100"
              onClick={onClose}
            >
              close
            </button>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
