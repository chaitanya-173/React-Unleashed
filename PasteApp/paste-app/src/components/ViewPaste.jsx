import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import "prismjs-themes/themes/prism-vsc-dark-plus.css";

const handleCopy = (paste) => {
  navigator.clipboard
    .writeText(paste.content)
    .then(() => toast.success("Copied to clipboard!"))
    .catch((err) => toast.error("Failed to copy: " + err.message));
};

const ViewPaste = () => {
  const { id } = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 w-[66%] pl-4"
          type="text"
          placeholder="Enter title here"
          value={paste?.title || ""}
          disabled
        />
        <button onClick={() => handleCopy(paste)}>Copy</button>
      </div>
      <div className="mt-8">
        {paste && paste.content ? (
          <SyntaxHighlighter language="javascript" style={dark}>
            {paste.content}
          </SyntaxHighlighter>
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
};

export default ViewPaste;
