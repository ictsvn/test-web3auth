const MessageModel = ({ message, onCloseMessage }) => {
  return (
    <div className="m-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative my-6 mx-auto w-96">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <div>
              <p>{message}</p>
            </div>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={onCloseMessage}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModel;
