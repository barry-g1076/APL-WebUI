import Section from "./Section";
import Heading from "./Heading";
import Editor from "@monaco-editor/react";
import { IoSend } from "react-icons/io5";
import Terminal from "./Terminal";
import { VscRunAll } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { DrawerDemo } from "./Drawers";

const CodeEditor = () => {
  const [isAIDrawerOpen, setisAIDrawerOpen] = useState(false);
  const [isTerminalDrawerOpen, setisTerminalDrawerOpen] = useState(false);
  const [value, setValue] = useState("");

  const openAIDrawer = () => {
    setisAIDrawerOpen(true);
  };

  const closeAIDrawer = () => {
    setisAIDrawerOpen(false);
  };
  const openTerminalDrawer = () => {
    setisTerminalDrawerOpen(true);
  };

  const closeTerminalDrawer = () => {
    setisTerminalDrawerOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Section crosses>
      <Heading tag="Code Editor" title="DEMO" />
      <div className="mr-20 w-40 h-12 float-right flex items-end justify-around pb-2">
        <button
          id="run"
          className={"p-2 rounded-xl border-n-10 border-2"}
          onClick={openTerminalDrawer}
        >
          <VscRunAll />
          <Tooltip anchorSelect="#run" content="Run Program" />
        </button>
        <button
          id="ai"
          className={"p-2 rounded-xl border-n-10 border-2"}
          onClick={openAIDrawer}
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
      <DrawerDemo
        isOpen={isAIDrawerOpen}
        onClose={closeAIDrawer}
        title={"TypeSnake AI"}
      >
        <div className="mb-2 w-96">
          <p className="tracking-wide leading-loose text-justify">{value}</p>
        </div>
        <div className="w-full relative">
          <input
            type="text"
            name="ai-input"
            id="ai-input"
            className="w-full rounded-2xl px-4 py-2"
            value={value}
            onChange={handleChange}
            placeholder="Consult AI ...."
          />
          <IoSend className="absolute right-2 top-3 hover:text-blue-300 cursor-pointer" />
        </div>
      </DrawerDemo>
      <DrawerDemo
        isOpen={isTerminalDrawerOpen}
        onClose={closeTerminalDrawer}
        title={"Terminal"}
      >
        <Terminal />
      </DrawerDemo>
    </Section>
  );
};

export default CodeEditor;
