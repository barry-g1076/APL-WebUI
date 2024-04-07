import Section from "./Section";
import Heading from "./Heading";
import Editor from "@monaco-editor/react";
import Terminal from "./Terminal";
// import Button from "./Button";
import { VscRunAll } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Tooltip } from "react-tooltip";
import Modal from "./Modal";
import { useState } from "react";
const CodeEditor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Section crosses>
      <Heading tag="Code Editor" title="Code Editor" />
      <div className="mr-20 w-40 h-12 float-right flex items-end justify-around pb-2">
        <button id="run" className={"p-2 rounded-xl border-n-10 border-2"}>
          <VscRunAll />
          <Tooltip anchorSelect="#run" content="Run Program" />
        </button>
        <button
          id="ai"
          className={"p-2 rounded-xl border-n-10 border-2"}
          onClick={openModal}
        >
          <GiArtificialIntelligence />
          <Tooltip anchorSelect="#ai" content="Consult AI" />
        </button>
      </div>
      <div className=" w-[75rem] mx-auto flex items-center h-[39rem] mb-5 border border-n-1/10 rounded-3xl overflow-hidden ">
        <div className="w-full h-full rounded-3xl">
          <div className="flex-none border-b border-slate-500/30 bg-white ">
            <div className="flex items-center h-8 space-x-1.5 px-3">
              <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
            </div>
          </div>
          <Editor
            language="javascript"
            theme="vs-dark"
            value="//this line is a comment"
            options={{
              selectOnLineNumbers: true,
              lineNumbers: "on",
              readOnly: false, // Allows for copying code snippets
              scrollBeyondLastLine: false,
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default CodeEditor;
