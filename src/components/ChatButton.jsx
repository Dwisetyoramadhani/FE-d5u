import React, { useState } from "react";

const ChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="fixed bottom-6 right-6 bg-yellow-400 text-indigo-950 font-semibold px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-yellow-300 transition z-50">
        <span>Tanya Adam</span>
      </button>
    </>
  );
};

export default ChatButton;
