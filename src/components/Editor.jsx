import Section from "./Section";
import Heading from "./Heading";
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
// import { IoSend } from "react-icons/io5";
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
// Define the language grammar for your custom language
const customTypeSnake = {
  tokenPostfix: ".custom", // The token postfix for your language

  // Define the language syntax rules
  keywords: [
    "abstract",
    "hail",
    "scribe",
    "unlock",
    "lock",
    "if",
    "elif",
    "then",
    "else",
  ],

  // Define the language tokenizer
  tokenizer: {
    root: [
      // Regular expressions to match different syntax elements
      [/\b(abstract|hail|scribe|unlock|lock|if|elif|then|else)\b/, "keyword"],
      [/\b(true|false)\b/, "boolean"], // Example for boolean literals
      [/\b\d+\.\d+\b|\b\d+\b/, "number"], // Example for numbers (floats and integers)
      [/"(?:[^"\\]|\\.)*"/, "string"], // Example for string literals
      [/#.*$/, "comment"], // Example for comments (starting with #)
      [/_[A-Z][a-zA-Z1-9_]\w*/, "identifier"], // Example for identifiers (variables, function names, etc.)
      // Add more token patterns as needed
    ],
  },
};

const CodeEditor = () => {
  const [isAIDrawerOpen, setisAIDrawerOpen] = useState(false);
  const [isTerminalDrawerOpen, setisTerminalDrawerOpen] = useState(false);
  const [value, setValue] = useState("");
  const [responseValue, setResponseValue] = useState([]);
  const [monacoValue, setMonacoValue] =
    useState(`//All supported functionally is found in the documentation & User Guide
//Declaration
unlock int _COUNT = (0 + 2 + 3)@ #Declaration
lock string _Global_var = "This is a global variable."@
lock int _TEN = 10@
lock float _PI = 3.14@ 
unlock bool _BINARY = true@

//Assignment
lock int _Assignment@ #Declaration
_Assignment = 5+7@ #Assignment
lock int _Wrong@ 
_Wrong = 11@

//if-else conditional
if (_TEN > _Wrong){
    lock bool _Inside_IF = true@
    scribe("This is _Inside_IF", _Inside_IF)@
    scribe("10 is greater than 11")@
    # _TEN = 11@
} 
else {
    lock bool _Inside_ELSE = false@
    scribe("This is _Inside_ELSE", _Inside_ELSE)@
    # scribe("This is _Inside_IF", _Inside_IF)@
    scribe("10 is not greater than 11")@
}
//abstract declaration (function)
abstract PRINTS(int _X, int _Y){
  scribe("This is X: ", _X)@
  scribe("This is Y: ", _Y)@
}
//abstract call
hail PRINTS(4,6)@`);
  const [aiResults, setAiResults] = useState("");
  // const [aiStatus, setAiStatus] = useState(10);
  const [chatCount, setChatCount] = useState(0);
  const [lastChatTime, setLastChatTime] = useState(null);
  useEffect(() => {
    const now = new Date().getTime();
    if (lastChatTime && now - lastChatTime < 3600000 && chatCount >= 10) {
      setAiResults(
        "You have reached the maximum of 10 chats per hour. Please try again later.⏳"
      );
    } else {
      // setAiResults("");
      console.log("j");
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
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });
    const parts = [prompt + user_prompt];
    try {
      setAiResults("Waiting on response..😶‍🌫️");
      const result = await chat.sendMessage(parts[0]);
      const response = result.response;
      // console.log(response.text().split());
      setAiResults(response.text().split());
      setMonacoValue(response.text());
      setChatCount(chatCount + 1);
      // setAiStatus(10 - chatCount);
      console.log(chatCount);
      console.log(response.text());
      setLastChatTime(now);
      return;
      // setHistory(history + user_prompt);
    } catch (error) {
      setAiResults("A.I Error☹️");
      setChatCount(chatCount + 1);
      // setAiStatus(10 - chatCount);
    }
    console.log(chatCount);
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
    await fetch("https://typesnakeapi.azurewebsites.net/generate_code", {
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
      <div className="container md:pb-10">
        <Heading tag="Code Editor" title="DEMO" id="edit" />
        <div className="">
          <div className="bg-red flex">
            <div className="flex-none "></div>
            <div className="flex-auto ">
              <div className="  w-32 h-12 float-right flex items-end justify-around pb-2">
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
            </div>
          </div>
          <div>
            <div className=" mx-auto flex items-center h-[39rem] mb-5 border border-n-1/10 rounded-3xl overflow-hidden ">
              <div className="w-full h-full rounded-3xl">
                <div className="flex-none border-b border-slate-500/30 bg-white ">
                  <div className="flex items-center h-8 space-x-1.5 px-3">
                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                  </div>
                </div>
                <Editor
                  defaultLanguage="customLanguage"
                  language="customLanguage"
                  theme="customTheme"
                  value={monacoValue}
                  options={{
                    selectOnLineNumbers: true,
                    lineNumbers: "on",
                    readOnly: false,
                    scrollBeyondLastLine: true,
                  }}
                  onChange={(monacoValue) => setMonacoValue(monacoValue)}
                  onMount={(editor) => {
                    // Register custom language and theme
                    monaco.languages.register({ id: "customLanguage" });
                    monaco.languages.setMonarchTokensProvider(
                      "customLanguage",
                      customTypeSnake
                    );
                    monaco.editor.defineTheme("customTheme", {
                      base: "vs-dark",
                      inherit: true,
                      rules: [
                        {
                          token: "keyword",
                          foreground: "#AAFF00",
                          fontStyle: "bold",
                        },
                        { token: "boolean", foreground: "#AAFF00" },
                        { token: "number", foreground: "#AAFF00" },
                        { token: "string", foreground: "#800080" },
                        {
                          token: "comment",
                          foreground: "#808080",
                          fontStyle: "italic",
                        },
                        { token: "identifier", foreground: "#FFD700" },
                        // Add more token colors as needed
                      ],
                    });
                    // Set the theme
                    editor.updateOptions({ theme: "customTheme" });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <DrawerDemo
          isOpen={isAIDrawerOpen}
          onClose={closeAIDrawer}
          title={"TypeSnake AI"}
          doSumbit={true}
          runthis={runChat}
        >
          <div className="scroll-m-0">
            <div className="mb-4 w-96">
              <article className="text-wrap hover:text-balance">
                {/* <h3 className="pb-2 text-violet-500">
                  {aiStatus}
                  {" LLM calls left"}
                </h3>
                <hr className="pb-5 w-full text-violet-500" /> */}
                <p>{aiResults}</p>
              </article>
            </div>
          </div>
          <div className="w-full h-10 flex flex-row">
            <input
              type="text"
              name="ai-input"
              id="ai-input"
              className="w-full rounded-2xl px-4 py-2   focus:border-2"
              value={value}
              onChange={handleChange}
              placeholder="Create an abstract that accepts 2 int variables and scribes it ...."
            />
            {/* <div>
              <IoSend
                className="w-1/12 absolute text-2xl right-0 top-2 hover:text-blue-300 cursor-pointer"
                onClick={runChat}
              />
            </div> */}
          </div>
        </DrawerDemo>

        <DrawerDemo
          isOpen={isTerminalDrawerOpen}
          onClose={closeTerminalDrawer}
          title={"Terminal"}
        >
          <Terminal items={responseValue} />
        </DrawerDemo>
      </div>
    </Section>
  );
};

export default CodeEditor;
