"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const TextEditor = () => {
  const editor = useRef(null);

  return <JoditEditor name="details" ref={editor} tabIndex={1} />;
};

export default TextEditor;
