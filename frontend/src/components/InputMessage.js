import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";

const InputMessage = () => {
  return (
    <div className="h-12 bg-white w-full px-3 flex ">
      <div className="flex-none content-center p-2 pr-1">
        <a
          className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded hover:bg-gray-300"
          href="/"
        >
          <FaRegSmile />
        </a>
      </div>
      <div className="flex-none content-center p-2 ">
        <a
          className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded hover:bg-gray-300"
          href="/"
        >
          <CgAttachment />
        </a>
      </div>
      <div className="flex-grow  content-center">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Type a message"
          className="outline-0 border-0 px-3 w-full h-12"
        />
      </div>
      <div className="flex-none content-center p-2 pr-1">
        <a
          className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded hover:bg-gray-300"
          href="/"
        >
          <BsSend />
        </a>
      </div>
      <div className="flex-none content-center  px-1">
        <a
          className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded hover:bg-gray-300"
          href="/"
        >
          <CiMicrophoneOn className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default InputMessage;
