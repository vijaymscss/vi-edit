import { useRef, useState } from "react";
import React from "react";
import Editor from "@monaco-editor/react";
import LangSelect from "./LangSelect";
import { INIT_CODE } from "@/lib/constant";
import { Button } from "../ui/button";
import OutputWindow from "./OutputWindow";

const EditorWindow = () => {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  console.log("first");
  const handleLanguage = (value) => {
    setLanguage(value);
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <div className='w-full md:w-1/2 lg:w-1/2 p-4'>
          <LangSelect language={language} onSelect={handleLanguage} />
          <Editor height='90vh' language={language} value={INIT_CODE[language]} onMount={onMount} />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/2 p-4'>
          <OutputWindow language={language} sourceCode={editorRef} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(EditorWindow);
