import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPaste } from "../redux/Pasteslice";
import { Copy, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";

const Home = () => {
  const [title, settitle] = useState("");
  // content in textarea
  const [value, setvalue] = useState("");
  // since updation & creation is on the same UI check if getting any pasteid or not. if pasteid exists show update paste on botton or show create
  const [searchparams, setsearchparams] = useSearchParams();
  const pasteId = searchparams.get("pasteId");
  const dispatch = useDispatch();
  const allpaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      console.log("inside useeffect");
      // exteacting the paste if it exists
      const paste = allpaste.find((p) => p._id === pasteId);
      settitle(paste.title);
      setvalue(paste.value);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      value: value,
      // creating new id if pasteid dosent exist
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toDateString(),
    };

    if (pasteId) {
      // Updation
      dispatch(updateToPaste(paste));
    } else {
      // creation
      dispatch(addToPastes(paste));
    }

    // After creation clear the input and textarea field

    setvalue("");
    settitle("");
    setsearchparams({});
  }
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start">
        <div className="w-full flex flex-row gap-x-4 justify-between items-center">
          <input
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className={`${
              pasteId ? "w-[80%]" : "w-[85%]"
            } border border-input rounded-md p-2`}
          />

          <button
            onClick={createPaste}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {pasteId ? "Update My paste" : "Create my paste"}
          </button>

          {/* {pasteId && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={resetPaste}
            >
              <PlusCircle size={20} />
            </button>
          )} */}
        </div>

        <div
          className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl`}
        >
          <div
            className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}
          >
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />

              <div
                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
              />

              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>
            {/* Circle and copy btn */}
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              {/*Copy  button */}
              <button
                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  toast.success("Copied to Clipboard", {
                    position: "top-right",
                  });
                }}
              >
                <Copy className="group-hover:text-sucess-500" size={20} />
              </button>
            </div>
          </div>

          <textarea
            value={value}
            placeholder="Enter text here..."
            onChange={(e) => setvalue(e.target.value)}
            rows={20}
            className="w-full p-3  focus-visible:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
