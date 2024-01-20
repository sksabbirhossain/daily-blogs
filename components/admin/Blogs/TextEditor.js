"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const TextEditor = ({ defaultValue = null }) => {
  const editor = useRef(null);
  let editDetails = null;
  if (defaultValue !== null) {
    editDetails = defaultValue;
  }

  return (
    <JoditEditor name="details" ref={editor} tabIndex={1} value={editDetails} />
  );
};

export default TextEditor;
