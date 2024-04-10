import Section from "./Section";
import Heading from "./Heading";
import Editor from "@monaco-editor/react";
import { IoSend } from "react-icons/io5";
import Terminal from "./Terminal";
import { VscRunAll } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Tooltip } from "react-tooltip";
import { useState, useEffect } from "react";
import { DrawerDemo } from "./Drawers";
import prompt from "../constants/promtp_trainer";

// node --version # Should be >= 18
// npm install @google/generative-ai
// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyAPmDX_93NOs7rZuaIl4OkQKi0GQgrWf2I";

// run();

const CodeEditor = () => {
  const [isAIDrawerOpen, setisAIDrawerOpen] = useState(false);
  const [isTerminalDrawerOpen, setisTerminalDrawerOpen] = useState(false);
  const [value, setValue] = useState("");
  const [responseValue, setResponseValue] = useState([]);
  const [monacoValue, setMonacoValue] = useState("");
  const [aiResults, setAiResults] = useState("");
  const [chatCount, setChatCount] = useState(0);
  const [lastChatTime, setLastChatTime] = useState(null);
  useEffect(() => {
    const now = new Date().getTime();
    if (lastChatTime && now - lastChatTime < 3600000 && chatCount >= 10) {
      setAiResults(
        "You have reached the maximum of 10 chats per hour. Please try again later.⏳"
      );
    } else {
      setAiResults("");
    }
  }, [chatCount, lastChatTime]);
  // console.log(monacoValue);

  var user_prompt = "\n " + value;

  async function runChat() {
    const now = new Date().getTime();
    if (lastChatTime && now - lastChatTime < 3600000 && chatCount >= 10) {
      setAiResults(
        "You have reached the maximum of 10 chats per hour. Please try again later."
      );
      return;
    }
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
    setAiResults("Waiting on response..😶‍🌫️");
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });
    const parts = [prompt + user_prompt];
    try {
      const result = await chat.sendMessage(parts[0]);
      const response = result.response;
      // console.log(response.text().split());
      setAiResults(response.text().split());
      setMonacoValue(response.text());
      return;
      // setHistory(history + user_prompt);
    } catch (error) {
      setAiResults("A.I Error☹️");
    }
    setChatCount(chatCount + 1);
    setLastChatTime(now);
    // console.log(chatCount);
  }
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

  const generate_code = async () => {
    await fetch("https://typesnake.azurewebsites.net/generate_code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ code: monacoValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.python_code); // Log the actual data received
        // con;
        if (data.error) {
          setResponseValue(data.error.split("\n").filter(Boolean));
        } else {
          setResponseValue(data.python_code.split("\n").filter(Boolean));
        }
        openTerminalDrawer();
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occur during the fetch request
      });
  };

  return (
    <Section crosses id="editor">
      <Heading tag="Code Editor" title="DEMO" id="edit" />
      <div className="mr-20 w-40 h-12 float-right flex items-end justify-around pb-2">
        <button
          id="run"
          className={"p-2 rounded-xl border-n-10 border-2"}
          onClick={generate_code}
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
            value={monacoValue}
            options={{
              selectOnLineNumbers: true,
              lineNumbers: "on",
              readOnly: false, // Allows for copying code snippets
              scrollBeyondLastLine: false,
            }}
            onChange={(monacoValue) => setMonacoValue(monacoValue)}
          />
        </div>
      </div>
      <DrawerDemo
        isOpen={isAIDrawerOpen}
        onClose={closeAIDrawer}
        title={"TypeSnake AI"}
      >
        <div className="mb-2 w-96">
          <p className="tracking-wide leading-loose text-justify">
            {aiResults}
          </p>
        </div>
        <div className="w-full relative">
          <input
            type="text"
            name="ai-input"
            id="ai-input"
            className="w-full rounded-2xl px-4 py-2"
            value={value}
            onChange={handleChange}
            placeholder="Create an abstract that accepts 2 int variables and scribes it ...."
          />
          <IoSend
            className="absolute right-2 top-3 hover:text-blue-300 cursor-pointer"
            onClick={runChat}
          />
        </div>
      </DrawerDemo>
      <DrawerDemo
        isOpen={isTerminalDrawerOpen}
        onClose={closeTerminalDrawer}
        title={"Terminal"}
      >
        <Terminal items={responseValue} />
      </DrawerDemo>
    </Section>
  );
};

export default CodeEditor;
